// @flow
//

import XXObject from 'XXFoundation/XXObject.js';
/**
 * Action的驱动器，将Action加入到ActionDriver中后，Action便开始执行
 * 同时ActionDriver也可以控制所有动画的执行，暂停和继续，移除执行完成的Action的任务。
 */
class XXActionDriver extends XXObject {

  /**
   * 正在执行的Targets集合
   * @type {[null, Map]}
   */
  _activeTargets: Map<string, XXDriveTargetInterface>;

  /**
   * 暂停的Targets集合
   * @type {[null, Map]}
   */
  _stoppedTargets: Map<string, XXDriveTargetInterface>;

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
   * @private
   * 将action添加到驱动的队列中
   * 在下一次循环时action将得到执行
   * @param {XXDriveTargetInterface} target 执行动作的对象
   * @param {boolean} startDefault 是否默认执行
   */
  _addTarget(target: XXDriveTargetInterface, startDefault: boolean = true) {
    if (target) {
      if (startDefault) {
        this._addTargetToActiveQuence(target);
      } else {
        this._addTargetToUnActiveQuence(target);
      }
    }
  }

  /**
   * 如果target不存在记录中，则将target将入到记录，并开始执行target
   * 如果target已经存在暂停队列中，则恢复target的活动状态
   * 如果target已经存在活动队列中，则不做任何操作
   * @param  {[type]} target [description]
   */
  startTarget(target: XXDriveTargetInterface) {
    if (this.isTargetExistInActiveSequence(target)) {
      // do nothing
    } else if (this.isTargetExistInUnActiveSequence(target)) {
      this._removeTargetFromUnActiveQuence(target);
      this._addTargetToActiveQuence(target);
    } else {
      this._addTarget(target, true);
    }
  }

  /**
   * 暂停action
   * @param  {XXDriveTargetInterface} target [description]
   */
  pauseTarget(target: XXDriveTargetInterface) {
    if (target) {
      if (this.isTargetExistInUnActiveSequence(target)) {
        // do nothing
      } else if (this.isTargetExistInActiveSequence(target)) {
        this._removeTargetFromActiveQuence(target);
        this._addTargetToUnActiveQuence(target);
      } else {
        // do nothing
      }
    }
  }


  /**
   * [removeTarget description]
   * @param  {[type]} target [description]
   */
  removeTarget(target: XXDriveTargetInterface) {
    if (target) {
      if (this.isTargetExistInActiveSequence(target)) {
        this._removeTargetFromActiveQuence(target);
      } else if (this.isTargetExistInUnActiveSequence(target)) {
        this._removeTargetFromUnActiveQuence(target);
      }
    }
  }

  /**
   * 删除所有位于活动队列中的action
   */
  removeAllTargets() {
    this._activeTargets.clear();

    this._stoppedTargets.clear();
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
   * target是否位于暂停队列中
   * @param  {XXDriveTargetInterface}  target 实现XXDriveTargetInterface接口的对象
   * @return {Boolean}        true表示target位于暂停队列中
   */
  isTargetExistInUnActiveSequence(target: XXDriveTargetInterface) {
    if (this._stoppedTargets && target) {
      return this._stoppedTargets.has(target.UUID);
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

    if (!this._stoppedTargets) {
      this._stoppedTargets = new Map();
    }
  }

  /**
   * 将target加入到活动队列
   * @param  {XXDriveTargetInterface} target [description]
   */
  _addTargetToActiveQuence(target: XXDriveTargetInterface) {
    if (target) {
      this._activeTargets.set(target.UUID, target);
    }
  }

  /**
   * 将target从活动队列中移除
   * @param  {XXDriveTargetInterface} target [description]
   */
  _removeTargetFromActiveQuence(target: XXDriveTargetInterface) {
    if (target) {
      this._activeTargets.delete(target.UUID);
    }
  }

  /**
   * 将target加入到非活动队列
   * @param  {XXDriveTargetInterface} target [description]
   */
  _addTargetToUnActiveQuence(target: XXDriveTargetInterface) {
    if (target) {
      this._stoppedTargets.set(target.UUID, target);
    }
  }

  /**
   * 将target从活动队列中移除
   * @param  {XXDriveTargetInterface} target [description]
   */
  _removeTargetFromUnActiveQuence(target: XXDriveTargetInterface) {
    if (target) {
      this._stoppedTargets.delete(target.UUID);
    }
  }
}

export default XXActionDriver;
