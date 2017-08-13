// @flow

// Only use require("babel-polyfill"); once in your whole app.
// Multiple imports or requires of babel-polyfill will throw an error
// since it can cause global collisions and other issues that are hard to trace.
// We recommend creating a single entry file
// that only contains the require statement
// https://github.com/babel/babel-preset-env
import 'babel-polyfill';

// import xxvJSDriver
//   from '../../vendor/Action/ActionDriver/XXActionJSDriver.js';
//

import XXNodeDomActor from 'XXAction/Actor/XXNodeDomActor.js';
import {XXPosition} from 'XXFundation/Type/XXPosition.js';
// import xxvLog from 'XXTool/LogTool.js';

import Vue from 'vue';
import hello from './js/hello.vue';

import XXActionMoveTo from 'XXAction/Action/XXActionMoveTo.js';

require('./css/hello.css');

new Vue({
  el: '.mount-point-for-vue-js',
  template: '<hello></hello>',
  components: {
    hello: hello,
  },
});

let nodeDomActor = new XXNodeDomActor('.animation-test-object1-js');
let moveToAction = new XXActionMoveTo(new XXPosition(100, 500, 0), 5000);

nodeDomActor.runAction(moveToAction);
