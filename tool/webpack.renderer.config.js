'use strict';

process.env.BABEL_ENV = 'renderer';

const path = require('path');
const {dependencies} = require('../package.json');
const webpack = require('webpack');

// const BabiliWebpackPlugin = require('babili-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

let Environment = require('./webpack.environment.js');

let documentExtractPlugin = new ExtractTextPlugin({
  filename: 'doc/vue-doc.md',
});
// 暂时不添加css/style.css, 否则css中的图片打包之后的路径不正确
// let styleExtractPlugin = new ExtractTextPlugin({
//   filename: 'style.css',
// });
// 暂时不添加css/vue-style.css, 否则css中的图片打包之后的路径不正确
let vueStyleExtractPlugin = new ExtractTextPlugin({
  filename: 'vue-style.css',
});

/**
 * List of node_modules to include in webpack bundle
 *
 * Required for specific packages like Vue UI libraries
 * that provide pure *.vue files that need compiling
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/webpack-configurations.html#white-listing-externals
 */
let whiteListedModules = ['vue'];

let rendererConfig = {
  devtool: '#cheap-module-eval-source-map',
  entry: {
    renderer: path.join(__dirname, '../src/renderer/index.js'),
  },
  externals: [
    ...Object.keys(
      dependencies || {}).filter((d) => !whiteListedModules.includes(d)),
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
            formatter: require('eslint-friendly-formatter'),
          },
        },
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        }),
      },
      {
        test: /\.html$/,
        use: 'vue-html-loader',
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.node$/,
        use: 'node-loader',
      },
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
          options: {
            // https://vue-loader.vuejs.org/zh-cn/configurations/extract-css.html
            extractCSS: Environment.isProductionMode() ? true : false,
            loaders: Environment.isDevelopMode() ?
            {
              sass: 'style-loader!css-loader?sourceMap' +
                '!postcss-loader?sourceMap' +
                  '!sass-loader?sourceMap',
              scss: 'style-loader!css-loader?sourceMap' +
                '!postcss-loader?sourceMap' +
                  '!sass-loader?sourceMap',
            } :
            {
              'sass':
                    vueStyleExtractPlugin.extract({
                      use: 'css-loader?sourceMap!postcss-loader?sourceMap' +
                        '!sass-loader?sourceMap',
                      fallback: 'style-loader',
                    }),
              'scss': vueStyleExtractPlugin.extract({
                use: 'css-loader?sourceMap!postcss-loader?sourceMap' +
                    '!sass-loader?sourceMap',
                fallback: 'style-loader',
              }),

              // 自定义块
              // 文档
              'xx-vue-docs': documentExtractPlugin.extract({
                use: 'raw-loader',
              }),
            },
          },
        },
      },
      {
        enforce: 'pre',
        test: /\.vue/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
        options: {
          formatter: require('eslint-friendly-formatter'),
        },
      },

      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          query: {
            limit: 10000,
            name: 'imgs/[name].[ext]',
          },
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          query: {
            limit: 10000,
            name: 'fonts/[name].[ext]',
          },
        },
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../src/index.html'),
      minify: {
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        removeComments: true,
      },
      nodeModules: Environment.isDevelopMode()
        ? path.resolve(__dirname, '../node_modules')
        : false,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),

    vueStyleExtractPlugin,
  ],
  output: {
    filename: '[name].js',
    libraryTarget: 'commonjs2',
    path: path.join(__dirname, '../dist/electron'),
  },
  resolve: {
    alias: {
      '@': path.join(__dirname, '../src/renderer'),
      'vue$': 'vue/dist/vue.esm.js',

      // 插件路径
      'XXTool': path.resolve(__dirname, '..', 'vendor', 'Action', 'Tool'),
      'XXFundation':
        path.resolve(__dirname, '..', 'vendor', 'Action', 'Foundation'),
      'XXAction': path.resolve(__dirname, '..', 'vendor', 'Action'),
    },
    extensions: ['.js', '.vue', '.json', '.css', '.node'],
  },
  target: 'electron-renderer',
};

/**
 * Adjust rendererConfig for development settings
 */
if (Environment.isDevelopMode()) {
  rendererConfig.plugins.push(
    new webpack.DefinePlugin({
      '__static': `"${path.join(__dirname, '../static')}"`,
    })
  );
}

/**
 * Adjust rendererConfig for production settings
 */
if (Environment.isProductionMode()) {
  rendererConfig.devtool = '';

  rendererConfig.plugins.push(
    // new BabiliWebpackPlugin({
    //   removeConsole: true,
    //   removeDebugger: true,
    // }),
    // new CopyWebpackPlugin([
    //   {
    //     from: path.join(__dirname, '../static'),
    //     to: path.join(__dirname, '../dist/electron/static'),
    //     ignore: ['.*'],
    //   },
    // ]),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    })
  );
}

module.exports = rendererConfig;
