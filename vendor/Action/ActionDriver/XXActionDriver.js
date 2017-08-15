// @flow
//

import XXObject from '../Foundation/XXObject.js';
/**
 * Action的驱动器，将Action加入到ActionDriver中后，Action便开始执行
 * 同时ActionDriver也可以控制所有动画的执行，暂停和继续，移除执行完成的Action的任务。
 */
class XXActionDriver extends XXObject {

  /**
   * 正在执行的Targets集合
   * @type {[null, Map]}
   */
  _activeTargets: null | Map;

  /**
   * 暂停的Targets集合
   * @type {[null, Map]}
   */
  _stoppedTargets: null | Map;

  /**
   * 构造函数
   */
  constructor() {
    super();
    this.__initDriverTargetsIfNeeded();
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
   * @param {XXDriveTargetInterface} target 执行动作的对象
   */
  addTarget(target: XXDriveTargetInterface) {
    if (target && !this.isTargetExistInActiveSequence(target)) {
      // 加入执行队列
      this._activeTargets.set(target.UUID, target);
    }
  }

  /**
   * 暂停action
   * @param  {XXDriveTargetInterface} target [description]
   * @return {[type]}        [description]
   */
  stopTarget(target: XXDriveTargetInterface) {
    if (this._activeTargets && target) {
      let oldTarget = this._activeTargets.delete(target.UUID);
      if (oldTarget) {
        this._stoppedTargets.set(target.UUID, target);
      }
      return false;
    }

    return false;
  }


  /**
   * [removeTarget description]
   * @param  {[type]} target [description]
   * @return {[type]}        [description]
   */
  removeTarget(target: XXDriveTargetInterface) {
    if (this._activeTargets && target) {
      this._activeTargets.delete(target.getUUID);
      return true;
    }
    return false;
  }

  /**
   * 删除所有位于活动队列中的action
   */
  removeAllTargets() {
    if (this._activeTargets) {
      this._activeTargets.clear();
    }
  }

  /**
   * action是否已经存在于活动队列中
   * @param  {[XXAction]}  target [action对象]
   * @return {Boolean}        [存在于活动队列，返回true，否则返回false]
   */
  isTargetExistInActiveSequence(target: XXDriveTargetInterface) {
    if (this._activeTargets && target) {
      return this._activeTargets.has(target.UUID);
    }

    return false;
  }
  /**
   * 内部函数
   * 初始化_activeTargets, 如果已经初始化过了，则不做任何操作
   */
  __initDriverTargetsIfNeeded() {
    if (!this._activeTargets) {
      this._activeTargets = new Map();
    }
  }
}

export default XXActionDriver;
