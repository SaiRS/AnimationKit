// @flow
//
// import XXObject from 'XXFoundation/XXObject.js';
import XXDriveTargetInterface from '../ActionDriver/XXDriveTarget.js';

import xxvJSDriver from '../ActionDriver/XXActionJSDriver.js';

import XXAction from '../Action/XXAction.js';

import xxvTypeVerify from 'XXTool/TypeVerify.js';

// import XXActor from '../Actor/XXActor.js';

import xxvLog from 'XXTool/LogTool.js';

/**
 * 动作的管理类
 * 执行动作的运行，暂停，继续等操作
 * 通过封装各种不同的驱动器来实现消除对驱动器这一层的感知
 * @class
 * @type {XXActionManager}
 */
class XXActionManager extends XXDriveTargetInterface {

  /** ********动作队列****************/
  _activeActions: null | Map<string, XXAction>;  // 活动队列
  _stoppedActions: null | Map<string, XXAction>; // 暂停队列
  /** ******************************/

  /** **********动作驱动器*************/
  _jsDriver: null | XXActionDriver;   // js驱动器
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
    this._stoppedActions = new Map();
  }

  /**
   * 添加新的动作并执行
   * @param {[XXAction]} action 动作对象
   * @param {[XXActor]} target 执行动作的对象
   */
  addAction(action: XXAction) {
    if (action && xxvTypeVerify.isType(action, XXAction)) {
      // 排除重复添加情况
      if (this.isUniqueAction(action)) {
        this._activeActions && this._activeActions.set(action.UUID, action);
      } else {
        xxvLog.warn('[XXActionManager] addAction with same action parameter');
      }
    } else {
      xxvLog.warn('[XXActionManager] addAction with invalid action parameter');
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
   * @override
   * 实现驱动对象的方法，在驱动器循环中会调用这个方法
   * @param  {[type]} deltaTime [description]
   */
  step(deltaTime: number) {
    if (this._activeActions) {
      let actions = this._activeActions;

      for (let action of actions.values()) {
        // target 需要支持step方法
        action.step(deltaTime);
      }

      // 删除那些已经完成的action
      for (let [key, action] of actions.entries()) {
        if (action.isDone()) {
          actions.delete(key);
        }
      }
    }
  }


  /** ********************
   * 辅助方法
   ***********************/

  /**
   * [isUniqueAction description]
   * @param  {XXAction}  action action对象
   * @return {Boolean}        [description]
   */
  isUniqueAction(action: XXAction): boolean {
    if (action && xxvTypeVerify.isType(action, XXAction) ) {
      // 当前队列中是否存在action和target同时相同的情况
      if (this._activeActions &&
          !this._activeActions.has(action.UUID) &&
          this._stoppedActions &&
          !this._stoppedActions.has(action.UUID)) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  /**
   * 将action从活动队列中移除
   * @param  {XXAction} action action对象
   */
  removeActionInActiveQueue(action: XXAction) {
    if (action && this._activeActions && this._activeActions.has(action.UUID)) {
      this._activeActions.delete(action.UUID);
    }
  }
}

let xxvActionManager = new XXActionManager();
xxvJSDriver.addTarget(xxvActionManager);

export default xxvActionManager;
