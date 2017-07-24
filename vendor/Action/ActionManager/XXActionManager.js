// @flow
//
import XXObject from '../Foundation/XXObject.js';

import XXActionJSDriver from '../ActionDriver/XXActionJSDriver.js';

import XXAction from '../Action/JSAction.js';

import XXActionTarget from '../ActionTarget/XXActionTarget.js';

/**
 * 动作的管理类
 * 执行动作的运行，暂停，继续等操作
 * 通过封装各种不同的驱动器来实现消除对驱动器这一层的感知
 * @class
 * @type {XXActionManager}
 */
class XXActionManager extends XXObject {

  /** ********动作队列****************/
  _activeActions: null;  // 活动队列
  _stoppedActions: null; // 暂停队列
  /** ******************************/

  /** **********动作驱动器*************/
  _jsDriver: null;   // js驱动器
  /** *******************************/

  /**
   * 构造函数
   */
  constructor() {
    super();

    this._jsDriver = new XXActionJSDriver();
    this._jsDriver.startMainLoop();
  }

  /**
   * 添加新的动作并执行
   * @param {[XXAction]} action 动作对象
   * @param {[XXActionTarget]} target 执行动作的对象
   */
  addAction(action: XXAction, target: XXActionTarget) {

  }

  /**
   * 暂停动作
   * @param  {[type]} action [description]
   * @return {[type]}        [description]
   */
  stopAction(action: XXAction) {

  }

  /**
   * 移除动作
   * @param  {[type]} action [description]
   * @return {[type]}        [description]
   */
  removeAction(action: XXAction) {

  }

  /**
   * 继续执行动作
   * @param  {[type]} action [description]
   * @return {[type]}        [description]
   */
  startAction(action: XXAction) {

  }

  /**
   * 重新开始执行动作
   * @param  {[type]} action [description]
   * @return {[type]}        [description]
   */
  restartAction(action: XXAction) {

  }

  stopAllActions() {

  }


  pause() {

  }

  stop() {

  }


}

let xxvActionManager = new XXActionManager();
export default xxvActionManager;
