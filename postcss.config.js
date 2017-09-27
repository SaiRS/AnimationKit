module.exports = {
  // parser: 'sugarss',
  plugins: {
    // plugin: option
    'postcss-import': {},
    'autoprefixer': {}, // 之前写错了，导致一些plugin不存在的bug

    // 'postcss-url': {},
    // 'postcss-cssnext': {},
    // add your 'plugins' here
    // ...
    // and if you want to compress,
    // just use css-loader option that already use cssnano under the hood
    // 'cssnano': {},

    // 'postcss-browser-reporter': {},
    // 'postcss-reporter': {},
  },
};
