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
import XXRotation from 'XXFoundation/Type/XXRotation.js';
// import xxvLog from 'XXTool/LogTool.js';

import Vue from 'vue';
import hello from './js/hello.vue';

import XXActionMoveTo from 'XXActionAlias/Action/BaseAction/XXActionMoveTo.js';
import XXActionRotateTo from
 'XXActionAlias/Action/BaseAction/XXActionRotateTo.js';
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
    [],
    23,
    10.9,
    20.3);

  let nodeDomActor =
  new XXNodeDomActor('.animation-test-object1-js', undefined, option);
  let moveToAction = new XXActionMoveTo(new XXPosition(100, 500, 0), 5000);
  let scaleToAction = new XXActionScaleTo(new XXScale(1, 2), 5000);

  let rotationAction = new XXActionRotateTo(new XXRotation(90), 5000);
  scaleToAction;
  moveToAction;
  rotationAction;

  setTimeout(() => {
    nodeDomActor.runAction(moveToAction);
  }, 1000);
}, 2000);
