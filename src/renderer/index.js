// Only use require("babel-polyfill"); once in your whole app.
// Multiple imports or requires of babel-polyfill will throw an error
// since it can cause global collisions and other issues that are hard to trace.
// We recommend creating a single entry file
// that only contains the require statement
// https://github.com/babel/babel-preset-env
import 'babel-polyfill';

import Vue from 'vue';
import hello from './js/hello.vue';

new Vue({
  el: '.mount-point-for-vue-js',
  template: '<hello></hello>',
  components: {
    hello: hello,
  },
});
