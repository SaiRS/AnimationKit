// @flow
//

import XXObject from '../Foundation/XXObject.js';

/**
 * Action的驱动器，将Action加入到ActionDriver中后，Action便开始执行
 * 同时ActionDriver也可以控制所有动画的执行，暂停和继续，移除执行完成的Action的任务。
 */
class XXActionDriver extends XXObject {

  /**
   * 正在执行的Action集合
   * @type {[null, Map]}
   */
  _activeActions: null;

  /**
   * 暂停的Action集合
   * @type {[null, Map]}
   */
  _stoppedActions: null;

  /**
   * [constructor description]
   */
  constructor() {
    super();
    this.__initActionActionIfNeeded();
  }

  /**
   * 驱动器的循环方法
   */
  mainLoop() {
    // 子类实现
  }

  /**
   * 开始执行驱动的循环程序
   */
  startMainLoop() {
    // 由子类实现
  }

  /**
   * 将action添加到驱动的执行队列中
   * 在下一次循环时action将得到执行
   * @param {XXAction} action 动作对象
   * @param {XXActionTarget} target 执行动作的对象
   */
  addAction(action: XXAction, target: XXActionTarget) {
    if (!this.isActionExistInActiveSequence(action)) {
      action.startWithTarget(target);
      // 加入执行队列
      this._activeActions.set(action.UUID, action);
    }
  }

  /**
   * 暂停action
   * @param  {[type]} action [description]
   * @return {[type]}        [description]
   */
  stopAction(action: XXAction) {
    if (this._activeActions && action) {
      let oldAction = this._activeActions.delete(action.UUID);
      if (oldAction) {
        this._stoppedActions.set(oldAction.UUID, oldAction);
      }
      return false;
    }

    return false;
  }


  /**
   * [removeAction description]
   * @param  {[type]} action [description]
   * @return {[type]}        [description]
   */
  removeAction(action: XXAction) {
    if (this._activeActions && action) {
      this._activeActions.delete(action.getUUID);
      return true;
    }
    return false;
  }

  /**
   * 删除所有位于活动队列中的action
   */
  removeAllActions() {
    if (this._activeActions) {
      this._activeActions.clear();
    }
  }

  /**
   * action是否已经存在于活动队列中
   * @param  {[XXAction]}  action [action对象]
   * @return {Boolean}        [存在于活动队列，返回true，否则返回false]
   */
  isActionExistInActiveSequence(action: XXAction) {
    if (this._activeActions && action) {
      return this._activeActions.has(action.UUID);
    }

    return false;
  }
  /**
   * 内部函数
   * 初始化_activeActions, 如果已经初始化过了，则不做任何操作
   */
  __initActionActionIfNeeded() {
    if (!this._activeActions) {
      this._activeActions = new Map();
    }
  }
}

export default XXActionDriver;
