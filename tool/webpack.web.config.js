let path = require('path');

let webpack = require('webpack');
//
let Environment = require('./webpack.environment.js');

// plugins
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
//
let documentExtractPlugin = new ExtractTextPlugin({
  filename: 'doc/vue-doc.md',
});
// 暂时不添加css/style.css, 否则css中的图片打包之后的路径不正确
let styleExtractPlugin = new ExtractTextPlugin({
  filename: 'style.css',
});
// 暂时不添加css/vue-style.css, 否则css中的图片打包之后的路径不正确
let vueStyleExtractPlugin = new ExtractTextPlugin({
  filename: 'vue-style.css',
});

let styleLoader = {
  loader: 'style-loader',
  options: {
    // 启用sourceMap后，样式将不会放置于<style></style>中
    // https://doc.webpack-china.org/loaders/style-loader/
    sourceMap: true,
    convertToAbsoluteUrls: true,
  },
};

let cssLoaders = [
  // 0 => no loaders (default); 1 => postcss-loader;
  // 2 => postcss-loader, sass-loader
  {
    loader: 'css-loader',
    options: {
      importLoaders: 1,
      sourceMap: true,
      minimize: Environment.isDevelopMode() ? false : true,
    },
  }, {
    loader: 'postcss-loader',
    options: {
      sourceMap: true,
    },
  }, {
    loader: 'resolve-url-loader',
    options: {
      sourceMap: true,
    },
  },
];

let scssLoaders = [
  // 0 => no loaders (default); 1 => postcss-loader;
  // 2 => postcss-loader, sass-loader
  {
    loader: 'css-loader',
    options: {
      importLoaders: 1,
      sourceMap: true,
    },
  }, {
    loader: 'postcss-loader',
    options: {
      sourceMap: true,
    },
  }, {
    loader: 'resolve-url-loader',
    options: {
      sourceMap: true,
    },
  }, {
    loader: 'sass-loader',
    options: {
      sourceMap: true,
    },
  },
];

let webpackPlugins = [
  // html
  new HtmlWebpackPlugin({
    title: 'Storybord',
    filename: 'index.html',
    template: path.resolve(__dirname, '../src/index.html'),

    // inject: 'bottom',
  }),

  // css
  styleExtractPlugin,
  documentExtractPlugin,
  vueStyleExtractPlugin,

  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: function(module) {
      return module.context && module.context.indexOf('node_modules') !== -1;
    },
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'manifest',
    minChunks: Infinity,
  }),

  // new webpack.DefinePlugin({
  //   'process.env': {
  //     NODE_ENV: '"production"',
  //   },
  // }),
];

if (!Environment.isDevelopMode()) {
  webpackPlugins.push(
    new UglifyJSPlugin({
      mangle: {
        exclude: /node_modules/,
        // Skip mangling these
        except: ['$super', '$', 'exports', 'require'],
        sourceMap: true,
      },
    })
  );

  webpackPlugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      },
    })
  );
}

module.exports = {
  entry: {
    main: path.resolve(__dirname, '../src/renderer/index.js'),
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, '..', 'dist', 'web'),
    // publicPath: '',
  },
  module: {
    rules: [
      // js
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
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
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: true, // use .babelrc, default value
            cacheDirectory: true,
          },
        },
      },

      // css & scss
      {
        test: /\.css$/,
        use: Environment.isDevelopMode() ?
              [styleLoader].concat(cssLoaders) :
              styleExtractPlugin.extract({
                // use when css is not extracted
                fallback: 'style-loader',
                use: cssLoaders,
              }),
      },
      {
        test: /\.scss$/,
        // 开发环境不使用Extract, 否则页面不会实时刷新
        // https://github.com/webpack-contrib/extract-text-webpack-plugin/issues/30#issuecomment-107242576
        use: Environment.isDevelopMode() ?
            [styleLoader].concat(scssLoaders) :
            styleExtractPlugin.extract({
            // use when css is not extracted
              fallback: 'style-loader',
              // 如果需要，可以在 sass-loader 之前将 resolve-url-loader 链接进来
              use: scssLoaders,
            }),
      },

        // file
      {
        test: /\.(png|jpeg|jpg|gif|svg)$/,
        exclude: /node_modules/,
        use: {
          loader: 'url-loader',
          query: {
            limit: 10 * 1024,
            name: '[name].[hash:7].[ext]',
            outputPath: 'img/',
            // publicPath: '../',
          },
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        exclude: /node_modules/,
        use: {
          loader: 'url-loader',
          query: {
            limit: 10000,
            name: 'fonts/[name].[ext]',
          },
        },
      },

        // vue
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
          options: {
            // https://vue-loader.vuejs.org/zh-cn/configurations/extract-css.html
            extractCSS: true,
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
    ],
  },
  target: 'web',
  devtool: 'source-map',
  resolve: {
    extensions: [' ', '.css', '.scss', '.coffee', '.js'],
    alias: {
      // vue/dist/vue.common.js for webpack 1
      'vue$': 'vue/dist/vue.esm.js',

      // webpack的配置路径
      'WebpackToolConfig': path.resolve(__dirname),
      // 插件路径
      'XXTool': path.resolve(__dirname, '..', 'vendor', 'Tool'),
      'XXFoundation':
        path.resolve(__dirname, '..', 'vendor', 'Foundation'),
      'XXActionAlias': path.resolve(__dirname, '..', 'vendor', 'Action'),
    },
  },
  externals: {
    'jquery': 'jQuery',
    'lodash': '_',
  },
  plugins: webpackPlugins,
};
