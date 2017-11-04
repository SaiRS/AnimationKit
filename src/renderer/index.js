// Only use require("babel-polyfill"); once in your whole app.
// Multiple imports or requires of babel-polyfill will throw an error
// since it can cause global collisions and other issues that are hard to trace.
// We recommend creating a single entry file
// that only contains the require statement
// https://github.com/babel/babel-preset-env
import 'babel-polyfill';

//
// import XXNodeDomActor from
// 'XXActionAlias/Actor/XXNodeDomActor.js';
// import XXNodeDomTextActor from 'XXActionAlias/Actor/XXNodeDomTextActor.js';
// import XXNodeDomImageActor from 'XXActionAlias/Actor/XXNodeDomImageActor.js';
//
// import XXPosition from 'XXFoundation/Type/XXPosition.js';
// import XXScale from 'XXFoundation/Type/XXScale.js';
// import XXRotation from 'XXFoundation/Type/XXRotation.js';
// import xxvLog from 'XXTool/LogTool.js';
//
// import XXNodeActorState from 'XXActionAlias/Actor/XXNodeActorState.js';

import Vue from 'vue';

import Store from './store/index.js';

import XXActionKitEditApp from 'XXAppUI/XXActionKitEditApp.vue';
// import XXActionRotateBy from
//  'XXActionAlias/Action/BaseAction/XXActionRotateBy.js';
// import XXActionScaleBy from
//   'XXActionAlias/Action/BaseAction/XXActionScaleBy.js';
//
// import XXActionSpeed from 'XXActionAlias/Action/XXActionSpeed.js';
// import XXActionDelay from 'XXActionAlias/Action/BaseAction/XXActionDelay.js';
// import XXActionSequence from 'XXActionAlias/Action/XXActionSequence.js';
// import XXActionSpawn from 'XXActionAlias/Action/XXActionSpawn.js';
// //
//
//
// import XXActionRepeatForever from
//  'XXActionAlias/Action/BaseAction/XXActionRepeatForever.js';
//
// // time function
// import XXTimeFunctionEaseOutSine from
//   'XXActionAlias/TimeFunction/XXTimeFunctionEaseOutSine.js';

// import xxvNotificationCenter from
//  'XXVendor/Notification/NotificationCenter.js';
// import XXObject from 'XXFoundation/XXObject.js';


require('./css/reset.css');

// vue inject
import iView from 'iview';
import 'iview/dist/styles/iview.css';    // 使用 CSS
Vue.use(iView);

// 提示组件的插件
import XXStaticTipView from './plugins/components/XXStaticTipView.js';
Vue.use(XXStaticTipView);

import XXToastView from './plugins/components/XXToastView.js';
Vue.use(XXToastView);

import XXNoticeView from './plugins/components/XXNoticeView.js';
Vue.use(XXNoticeView);

import XXAlertView from './plugins/components/XXAlertView.js';
Vue.use(XXAlertView);

import XXConfirmView from './plugins/components/XXConfirmView.js';
Vue.use(XXConfirmView);

// TODO: 对象(不知道能不能用上)
import XXObjectLike from './plugins/dataStruct/XXObjectLike.js';
Vue.use(XXObjectLike);

// 数据解析插件
import {XXNodeGraphParserPlugin} from './plugins/dataParser/XXNodeGraphParserPlugin.js';
Vue.use(XXNodeGraphParserPlugin);

// import imgSrc from './img/mountain-top.jpg';
//
// 全局组件
import XXBasicActor from './js/ActorComponents/XXBasicActor.vue';
import XXTextActor from './js/ActorComponents/XXTextActor.vue';
import XXImageActor from './js/ActorComponents/XXImageActor.vue';
Vue.component('XXBasicActor', XXBasicActor);
Vue.component('XXTextActor', XXTextActor);
Vue.component('XXImageActor', XXImageActor);

// mixin
import XXEditStoreMixin from './mixin/xxEditStoreMixin.js';
// 全局 mixin
Vue.mixin(XXEditStoreMixin);


// 实例化
new Vue({
  el: '.mount-point-for-vue-js',
  template: '<XXActionKitEditApp></XXActionKitEditApp>',
  components: {
    XXActionKitEditApp: XXActionKitEditApp,
  },
  store: Store,
});


  // let option = new XXNodeActorState(33, 2, 5, 200, 300);

// let nodeDomActor = new XXNodeDomActor();
// nodeDomActor.modifyStyle('border', '1px solid #000');
// nodeDomActor.showInParent('.animation-test-object1-js');
//
// let textActor = new XXNodeDomTextActor();
// textActor.addText('Hello World', {'color': '#f00'});
// textActor.addText('I love you', {'color': '#00ffff'});
// textActor.insertText(10, ' insertText ', {'background-color': '#f44336'});
// nodeDomActor.addChild(textActor);
//
// let imageActor = new XXNodeDomImageActor();
//
// nodeDomActor.addChild(imageActor);
// imageActor.setImageSrc(imgSrc);
//   // nodeDomActor.removeFromParentTree();
//   // nodeDomActor.restoreState(option);
//
// let moveToAction = new XXActionMoveBy(new XXPosition(100, 200, 0), 2000);
// let scaleToAction = new XXActionScaleBy(new XXScale(10, 20), 1000);
//
// let rotationAction = new XXActionRotateBy(new XXRotation(90), 5000);
// scaleToAction;
// moveToAction.setTimeFunction(new XXTimeFunctionEaseOutSine());
// rotationAction;
//
// let speedAction = new XXActionSpeed(rotationAction, 20);
// speedAction;
// let delayAction = new XXActionDelay(5000);
// delayAction;
//
//   // let showAction = new XXActionShow();
//   // let hideAction = new XXActionHide();
//
// let actionSequence =
//     new XXActionSequence(
//                       // moveToAction.reverse(),
//                       //   hideAction,
//                       //
//                       //   showAction,
//                         scaleToAction.reverse(),
//                         rotationAction.reverse()
//                       );
//
// let actionSpawn = new XXActionSpawn(
//     moveToAction,
//     scaleToAction,
//     rotationAction
//   );
// actionSpawn;
// let actionFinishedCallBack = function(event, action, actor) {
//   console.log(
//       'outter call back, uuid = ' + action.UUID + ' , event = ' + event);
// };
// actionFinishedCallBack;
// actionSequence;
//
//
// let repeatAction = new XXActionRepeatForever(moveToAction);
// repeatAction;

  // nodeDomActor.runAction(actionSequence);
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


/**
 * promise object
 */
// class XXPromiseInheritObject {
//
//   _promise;
//   /**
//    * [_testFunction description]
//    */
//   _testFunction() {
//
//   }
//
//   /**
//    * [constructor description]
//    */
//   constructor() {
//     this._promise = Promise.resolve();
//   }
//
//   /**
//    * [_then description]
//    * @param  {[type]} resolve [description]
//    * @param  {[type]} reject  [description]
//    * @return {[type]}         [description]
//    */
//   _then(resolve, reject) {
//     this._promise = this._promise.then(resolve, reject);
//     return this;
//   }
//
//   /**
//    * [first description]
//    * @return {[type]} [description]
//    */
//   first() {
//     return this._then(function() {
//       return new Promise(function(resolve, reject) {
//         setTimeout(() => {
//           console.log('first 1000 delay');
//           resolve();
//         }, 1000);
//       });
//     });
//   }
//
//   /**
//    * [second description]
//    * @return {[type]} [description]
//    */
//   second() {
//     return this._then(function() {
//       return new Promise(function(resolve, reject) {
//         setTimeout(() => {
//           console.log('second 2000 delay');
//           resolve();
//         }, 2000);
//       });
//     });
//   }
//
//   /**
//    * [third description]
//    * @return {[type]} [description]
//    */
//   third() {
//     return this._then(function() {
//       return new Promise(function(resolve, reject) {
//         setTimeout(() => {
//           console.log('third 500 delay');
//           resolve();
//         }, 500);
//       });
//     });
//   }
// }
//
// let inheritedPromise = new XXPromiseInheritObject();
// console.log(inheritedPromise);
//
// inheritedPromise.first().second().third();
