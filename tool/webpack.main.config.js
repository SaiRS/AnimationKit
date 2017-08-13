'use strict';

process.env.BABEL_ENV = 'main';

const path = require('path');
const {dependencies} = require('../package.json');
const webpack = require('webpack');

// const BabiliWebpackPlugin = require('babili-webpack-plugin');

let Environment = require('./webpack.environment.js');

let mainConfig = {
  entry: {
    main: path.join(__dirname, '../src/main/index.js'),
  },
  externals: [
    ...Object.keys(dependencies || {}),
  ],
  module: {
    rules: [
      {
        test: /\.(js)$/,
        enforce: 'pre',
        exclude: /node_modules/,
        use: {
          loader: 'eslint-loader',
          options: {
            useEslintrc: true, // use .eslintrc, default value
            formatter: require('eslint-friendly-formatter'),
          },
        },
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: true, // use .babelrc, default value
            cacheDirectory: true,
          },
        },
        exclude: /node_modules/,

      },
      {
        test: /\.node$/,
        use: 'node-loader',
      },
    ],
  },
  node: {
    __dirname: Environment.isDevelopMode(),
    __filename: Environment.isDevelopMode(),
  },
  output: {
    filename: '[name].js',
    libraryTarget: 'commonjs2',
    path: path.join(__dirname, '../dist/electron'),
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.json', '.node'],

    alias: {

      // 插件路径
      'XXTool': path.resolve(__dirname, '..', 'vendor', 'Action', 'Tool'),
      'XXFoundation':
        path.resolve(__dirname, '..', 'vendor', 'Action', 'Foundation'),
      'XXAction': path.resolve(__dirname, '..', 'vendor', 'Action'),
    },
  },
  target: 'electron-main',
};

/**
 * Adjust mainConfig for development settings
 */
if (Environment.isDevelopMode()) {
  mainConfig.plugins.push(
    new webpack.DefinePlugin({
      '__static': `"${path.join(__dirname, '../static')}"`,
    })
  );
}

/**
 * Adjust mainConfig for production settings
 */
if (Environment.isProductionMode()) {
  mainConfig.plugins.push(
    // new BabiliWebpackPlugin({
    //   removeConsole: true,
    //   removeDebugger: true,
    // }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
    })
  );
}

module.exports = mainConfig;
