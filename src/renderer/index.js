// Only use require("babel-polyfill"); once in your whole app.
// Multiple imports or requires of babel-polyfill will throw an error
// since it can cause global collisions and other issues that are hard to trace.
// We recommend creating a single entry file
// that only contains the require statement
// https://github.com/babel/babel-preset-env
import 'babel-polyfill';


import XXNodeDomActor from
 'XXActionAlias/Actor/XXNodeDomActor.js';
import XXPosition from 'XXFoundation/Type/XXPosition.js';
import XXScale from 'XXFoundation/Type/XXScale.js';
import XXRotation from 'XXFoundation/Type/XXRotation.js';
// import xxvLog from 'XXTool/LogTool.js';
//
import XXNodeActorState from 'XXActionAlias/Actor/XXNodeActorState.js';

import Vue from 'vue';

import XXActionKitEditApp from 'XXAppUI/XXActionKitEditApp.vue';

import XXActionMoveBy from 'XXActionAlias/Action/BaseAction/XXActionMoveBy.js';
import XXActionRotateBy from
 'XXActionAlias/Action/BaseAction/XXActionRotateBy.js';
import XXActionScaleBy from
  'XXActionAlias/Action/BaseAction/XXActionScaleBy.js';

import XXActionSpeed from 'XXActionAlias/Action/XXActionSpeed.js';
import XXActionDelay from 'XXActionAlias/Action/BaseAction/XXActionDelay.js';
import XXActionSequence from 'XXActionAlias/Action/XXActionSequence.js';
import XXActionSpawn from 'XXActionAlias/Action/XXActionSpawn.js';

import XXActionShow from 'XXActionAlias/Action/BaseAction/XXActionShow.js';
import XXActionHide from 'XXActionAlias/Action/BaseAction/XXActionHide.js';


import XXActionRepeatForever from
 'XXActionAlias/Action/BaseAction/XXActionRepeatForever.js';

// time function
import XXTimeFunctionEaseOutSine from
  'XXActionAlias/TimeFunction/XXTimeFunctionEaseOutSine.js';

// import xxvNotificationCenter from
//  'XXVendor/Notification/NotificationCenter.js';
// import XXObject from 'XXFoundation/XXObject.js';
require('./css/hello.css');

// vue inject
import iView from 'iview';
import 'iview/dist/styles/iview.css';    // 使用 CSS
Vue.use(iView);

import XXStaticTipView from './js/VueInject/XXStaticTipView.js';
Vue.use(XXStaticTipView);

import XXToastView from './js/VueInject/XXToastView.js';
Vue.use(XXToastView);

import XXNoticeView from './js/VueInject/XXNoticeView.js';
Vue.use(XXNoticeView);

import XXAlertView from './js/VueInject/XXAlertView.js';
Vue.use(XXAlertView);

import XXConfirmView from './js/VueInject/XXConfirmView.js';
Vue.use(XXConfirmView);


new Vue({
  el: '.mount-point-for-vue-js',
  template: '<XXActionKitEditApp></XXActionKitEditApp>',
  components: {
    XXActionKitEditApp: XXActionKitEditApp,
  },
});

setTimeout(() => {
  let option = new XXNodeActorState(33, 2, 5, 200, 300);

  let nodeDomActor =
  new XXNodeDomActor('.animation-test-object1-js');

  nodeDomActor.restoreState(option);

  let moveToAction = new XXActionMoveBy(new XXPosition(100, 200, 0), 2000);
  let scaleToAction = new XXActionScaleBy(new XXScale(1, 2), 1000);

  let rotationAction = new XXActionRotateBy(new XXRotation(90), 5000);
  scaleToAction;
  moveToAction.setTimeFunction(new XXTimeFunctionEaseOutSine());
  rotationAction;
  nodeDomActor;
  let speedAction = new XXActionSpeed(rotationAction, 20);
  speedAction;
  let delayAction = new XXActionDelay(5000);
  delayAction;

  let showAction = new XXActionShow();
  let hideAction = new XXActionHide();

  let actionSequence =
    new XXActionSequence(moveToAction.reverse(),
                        hideAction,

                        showAction,
                        scaleToAction.reverse(),
                        rotationAction.reverse()
                      );

  let actionSpawn = new XXActionSpawn(
    moveToAction,
    scaleToAction,
    rotationAction
  );
  actionSpawn;
  let actionFinishedCallBack = function(event, action, actor) {
    console.log(
      'outter call back, uuid = ' + action.UUID + ' , event = ' + event);
  };
  actionFinishedCallBack;
  actionSequence;


  let repeatAction = new XXActionRepeatForever(moveToAction);
  repeatAction;

  // nodeDomActor.runAction(actionSequence, false);
  //
  // setTimeout(() => {
  //   actionSequence.start();
  // }, 1630);
  //
  // setTimeout(() => {
  //   actionSequence.pause();
  // }, 3000);
  //
  // setTimeout(() => {
  //   actionSequence.restart();
  // }, 4500);


  // nodeDomActor.moveTo(new XXPosition(100, 500, 0));
}, 2000);


/**
 * promise object
 */
class XXPromiseInheritObject {

  _promise;
  /**
   * [_testFunction description]
   */
  _testFunction() {

  }

  /**
   * [constructor description]
   */
  constructor() {
    this._promise = Promise.resolve();
  }

  /**
   * [_then description]
   * @param  {[type]} resolve [description]
   * @param  {[type]} reject  [description]
   * @return {[type]}         [description]
   */
  _then(resolve, reject) {
    this._promise = this._promise.then(resolve, reject);
    return this;
  }

  /**
   * [first description]
   * @return {[type]} [description]
   */
  first() {
    return this._then(function() {
      return new Promise(function(resolve, reject) {
        setTimeout(() => {
          console.log('first 1000 delay');
          resolve();
        }, 1000);
      });
    });
  }

  /**
   * [second description]
   * @return {[type]} [description]
   */
  second() {
    return this._then(function() {
      return new Promise(function(resolve, reject) {
        setTimeout(() => {
          console.log('second 2000 delay');
          resolve();
        }, 2000);
      });
    });
  }

  /**
   * [third description]
   * @return {[type]} [description]
   */
  third() {
    return this._then(function() {
      return new Promise(function(resolve, reject) {
        setTimeout(() => {
          console.log('third 500 delay');
          resolve();
        }, 500);
      });
    });
  }
}

let inheritedPromise = new XXPromiseInheritObject();
console.log(inheritedPromise);

inheritedPromise.first().second().third();
