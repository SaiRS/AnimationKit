// @flow

// Only use require("babel-polyfill"); once in your whole app.
// Multiple imports or requires of babel-polyfill will throw an error
// since it can cause global collisions and other issues that are hard to trace.
// We recommend creating a single entry file
// that only contains the require statement
// https://github.com/babel/babel-preset-env
import 'babel-polyfill';


import XXNodeDomActor, {XXNodeDomActorOption} from
 'XXActionAlias/Actor/XXNodeDomActor.js';
import XXPosition from 'XXFoundation/Type/XXPosition.js';
import XXScale from 'XXFoundation/Type/XXScale.js';
// import xxvLog from 'XXTool/LogTool.js';

import Vue from 'vue';
import hello from './js/hello.vue';

import XXActionMoveTo from 'XXActionAlias/Action/BaseAction/XXActionMoveTo.js';
import XXActionScaleTo from
  'XXActionAlias/Action/BaseAction/XXActionScaleTo.js';

require('./css/hello.css');

new Vue({
  el: '.mount-point-for-vue-js',
  template: '<hello></hello>',
  components: {
    hello: hello,
  },
});

setTimeout(() => {
  let option = new XXNodeDomActorOption(
    ['translate(20px, 14px)', 'scale(10.9, 20.3)', 'rotate(23deg)']);

  let nodeDomActor =
  new XXNodeDomActor('.animation-test-object1-js', undefined, option);
  let moveToAction = new XXActionMoveTo(new XXPosition(100, 500, 0), 5000);
  let scaleToAction = new XXActionScaleTo(new XXScale(3, 4), 5000);
  scaleToAction;
  moveToAction;

  setTimeout(() => {
    nodeDomActor.runAction(scaleToAction);
  }, 1000);
}, 2000);
