// @flow
'use strict';
// require('es6-promise').polyfill();
//
// process.env.NODE_ENV = 'production';

let Log = require('yalm');

const {say} = require('cfonts');
const chalk = require('chalk');
const del = require('del');

const packager = require('electron-packager');
const webpack = require('webpack');
const Multispinner = require('multispinner');

const buildConfig = require('./build.config.js');
const mainConfig = require('./webpack.main.config.js');
const rendererConfig = require('./webpack.renderer.config.js');
const webConfig = require('./webpack.web.config.js');

const doneLog = chalk.bgGreen.white(' DONE ') + ' ';
const errorLog = chalk.bgRed.white(' ERROR ') + ' ';
const okayLog = chalk.bgBlue.white(' OKAY ') + ' ';
const isCI = process.env.CI || false;


if (process.env.BUILD_TARGET === 'clean') clean();
else if (process.env.BUILD_TARGET === 'web') web();
else build();

/**
 * 清空打包目录
 */
function clean() {
  del.sync(['dist/*', 'build/*', '!dist/icons', '!dist/icons/icon.*']);
  Log.info(`\n${doneLog}\n`);
  process.exit();
}

/**
 * 打包web项目
 */
function web() {
  del.sync(['../../../../publish/webs/AnimationKitEditor', '!.gitkeep'], {
    force: true,
  });
  webpack(webConfig, (err, stats) => {
    if (err || stats.hasErrors()) {
      Log.error(err);
    }

    Log.info(stats.toString({
      chunks: false,
      colors: true,
    }));

    process.exit();
  });
}

/**
 * 打包electron项目
 */
function build() {
  greeting();

  del.sync(['dist/electron/*', '!.gitkeep']);

  const tasks = ['main', 'renderer'];
  const m = new Multispinner(tasks, {
    preText: 'building',
    postText: 'process',
  });

  let results = '';

  // 注册通知
  m.on('success', () => {
    process.stdout.write('\x1B[2J\x1B[0f');
    Log.info(`\n\n${results}`);
    Log.info(`${okayLog}take it away ${chalk.yellow('`electron-packager`')}\n`);
    bundleApp();
  });


  pack(mainConfig).then((result) => {
    results += result + '\n\n';
    m.success('main'); // 发送通知
  }).catch((err) => {
    m.error('main');
    Log.warning(`\n  ${errorLog}failed to build main process`);
    Log.error(`\n${err}\n`);
    process.exit(1);
  });

  pack(rendererConfig).then((result) => {
    results += result + '\n\n';
    m.success('renderer');
  }).catch((err) => {
    m.error('renderer');
    Log.warning(`\n  ${errorLog}failed to build renderer process`);
    Log.error(`\n${err}\n`);
    process.exit(1);
  });
}

/**
 * tips about build when start to build electron project
 */
function greeting() {
  const cols = process.stdout.columns;
  let text = '';

  if (cols > 85) text = 'lets-build';
  else if (cols > 60) text = 'lets-|build';
  else text = false;

  if (text && !isCI) {
    say(text, {
      colors: ['yellow'],
      font: 'simple3d',
      space: false,
    });
  } else Log.info(chalk.yellow.bold('\n  lets-build'));
  Log.info();
}

/**
 * build electron app
 */
function bundleApp() {
  packager(buildConfig, (err, appPaths) => {
    if (err) {
      Log.info(`\n${errorLog}${chalk.yellow('`electron-packager`')} says...\n`);
      Log.info(err + '\n');
    } else {
      Log.info(`\n${doneLog}\n`);
    }
  });
}

/**
 * web打包
 * @param  {[type]} config [description]
 * @return {[type]}        [description]
 */
function pack(config) {
  return new Promise((resolve, reject) => {
    webpack(config, (err, stats) => {
      if (err) reject(err.stack || err);
      else if (stats.hasErrors()) {
        let err = '';

        stats.toString({
          chunks: false,
          colors: true,
        })
        .split(/\r?\n/)
        .forEach((line) => {
          err += `    ${line}\n`;
        });

        reject(err);
      } else {
        resolve(stats.toString({
          chunks: false,
          colors: true,
        }));
      }
    });
  });
}
