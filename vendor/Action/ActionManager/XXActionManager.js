// @flow
//
import XXDriveTarget from 'XXAction/ActionDriver/XXDriveTarget.js';

import xxvJSDriver from '../ActionDriver/XXActionJSDriver.js';

import XXAction from '../Action/XXAction.js';

// import XXActor from '../Actor/XXActor.js';

// import xxvLog from 'XXTool/LogTool.js';

/**
 * 动作的管理类
 * 执行动作的运行，暂停，继续等操作
 * 通过封装各种不同的驱动器来实现消除对驱动器这一层的感知
 * @class
 * @type {XXActionManager}
 */
class XXActionManager extends XXDriveTarget {

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

    this._jsDriver = xxvJSDriver;
  }

  /**
   * @inheritdoc
   */
  reset() {
    this._activeActions = new Map();
  }

  /**
   * 添加新的动作并执行
   * @param {[XXAction]} action 动作对象
   * @param {[XXActor]} target 执行动作的对象
   */
  addAction(action: XXAction) {
    if (action) {
      this._activeActions.set(action.UUID, action);
    }
  }

  /**
   * 暂停动作
   * @param  {[type]} action [description]
   * @return {[type]}        [description]
   */
  stopAction(action: XXAction) {
    return true;
  }

  /**
   * 移除动作
   * @param  {[type]} action [description]
   * @return {[type]}        [description]
   */
  removeAction(action: XXAction) {
    return true;
  }

  /**
   * 继续执行动作
   * @param  {[type]} action [description]
   * @return {[type]}        [description]
   */
  startAction(action: XXAction) {
    return true;
  }

  /**
   * 重新开始执行动作
   * @param  {[type]} action [description]
   * @return {[type]}        [description]
   */
  restartAction(action: XXAction) {
    return true;
  }

  /**
   * [stopAllActions description]
   * @return {[type]} [description]
   */
  stopAllActions() {
    return true;
  }

  /**
   * [pause description]
   * @return {[type]} [description]
   */
  pause() {
    return true;
  }

  /**
   * [stop description]
   * @return {[type]} [description]
   */
  stop() {
    return true;
  }

  /**
   * 实现驱动对象的方法，在驱动器循环中会调用这个方法
   * @param  {[type]} deltaTime [description]
   */
  step(deltaTime: float) {
    for (let action of this._activeActions.values()) {
      // target 需要支持step方法
      action.step(deltaTime);
    }
  }
}

let xxvActionManager = new XXActionManager();
xxvJSDriver.addTarget(xxvActionManager);
export default xxvActionManager;
