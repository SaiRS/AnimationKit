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
import hello from './js/hello.vue';

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

import xxvActionManager from 'XXActionAlias/ActionManager/XXActionManager.js';

require('./css/hello.css');

new Vue({
  el: '.mount-point-for-vue-js',
  template: '<hello></hello>',
  components: {
    hello: hello,
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

  console.log(actionSequence);
  nodeDomActor.runAction(actionSequence.reverse());

  setTimeout(() => {
    xxvActionManager.pause();
  }, 1200);

  setTimeout(() => {
    xxvActionManager.start();
  }, 3200);

  // nodeDomActor.moveTo(new XXPosition(100, 500, 0));
}, 2000);


/**
 * promise object
 */
class XXPromiseInheritObject extends Promise {

  /**
   * [_testFunction description]
   */
  _testFunction() {

  }
  /**
   * [constructor description]
   * @param  {function} executor [description]
   */
  constructor(executor) {
    super((resolve, reject) => {
      // before
      return executor(resolve, reject);
    });

    /**
     * [first description]
     * @return {Promise}
     */
    this.first = () => {
      return super.then(() => {
        return new XXPromiseInheritObject((resolve, reject) => {
          setTimeout(() => {
            console.log('first 1000');
            resolve();
          }, 1000);
        });
      });
    };

    /**
     * [first description]
     * @return {Promise}
     */
    this.second = function() {
      return this.then(() => {
        return new XXPromiseInheritObject((resolve, reject) => {
          setTimeout(() => {
            console.log('second 2000');
            resolve();
          }, 2000);
        });
      });
    };

    /**
     * [first description]
     * @return {Promise}
     */
    this.third = function() {
      return this.then(() => {
        return new XXPromiseInheritObject((resolve, reject) => {
          setTimeout(() => {
            console.log('third 3000');
            resolve();
          }, 3000);
        });
      });
    };

    /**
     * [then description]
     * @param  {[type]} onFulfilled [description]
     * @param  {[type]} onRejected  [description]
     * @return {[type]}             [description]
     */
    this.then = (onFulfilled, onRejected) => {
      // before
      super.then(onFulfilled, onRejected);
      // after
      return new XXPromiseInheritObject((resolve, reject) => {
        resolve();
      });
    };
  }


}

let inheritedPromise = new XXPromiseInheritObject(
  (resolve, reject) => {
    resolve();
  });
console.log(inheritedPromise);
inheritedPromise.first().second().third();
