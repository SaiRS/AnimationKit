// @flow
//
// import XXObject from 'XXFoundation/XXObject.js';
import XXDriveTargetInterface from '../ActionDriver/XXDriveTarget.js';

import xxvJSDriver from '../ActionDriver/XXActionJSDriver.js';

import XXAction from '../Action/XXAction.js';

import xxvTypeVerify from 'XXTool/TypeVerify.js';

import xxvLog from 'XXTool/LogTool.js';

/**
 * 动作的管理类
 * 执行动作的运行，暂停，继续等操作
 * 通过封装各种不同的驱动器来实现消除对驱动器这一层的感知
 * @class
 * @type {XXActionManager}
 */
class XXActionManager extends XXDriveTargetInterface {

  _speed: number;

  /** ********动作队列****************/
  _activeActions: Map<string, XXAction>;  // 活动队列
  _stoppedActions: Map<string, XXAction>; // 暂停队列
  /** ******************************/

  /**
   * 构造函数
   */
  constructor() {
    super();

    this.reset();
  }

  /**
   * @inheritdoc
   */
  reset() {
    this._activeActions = new Map();
    this._stoppedActions = new Map();

    this._speed = 1;
  }

  /**
   * 添加新的动作
   * @param {[XXAction]} action 动作对象
   * @param {boolean} isStartDefault = true 表示是否默认开始执行
   */
  addAction(action: XXAction, isStartDefault: boolean = true) {
    if (action && xxvTypeVerify.isType(action, XXAction)) {
      // 排除重复添加情况
      if (this._isActionExistInActiveQuence(action)) {
        if (isStartDefault) {
          // do nothing
          xxvLog.warn('[XXActionManager] addAction with same action parameter');
        } else {
          this._removeActionFromActiveQueue(action);
          this._addActionToUnActiveQuence(action);
        }
      } else if (this._isActionExistInUnactiveQuence(action)) {
        if (isStartDefault) {
          this._removeActionFromUnActiveQueue(action);
          this._addActionToActiveQuence(action);
        } else {
          // do nothing
          xxvLog.warn('[XXActionManager] addAction with same action parameter');
        }
      } else {
        if (isStartDefault) {
          this._addActionToActiveQuence(action);
        } else {
          this._addActionToUnActiveQuence(action);
        }
      }
    } else {
      xxvLog.warn('[XXActionManager] addAction with invalid action parameter');
    }
  }

  /**
   * 暂停动作
   * @param  {[type]} action [description]
   */
  pauseAction(action: XXAction) {
    if (action) {
      if (this._isActionExistInUnactiveQuence(action)) {
        // do nothing
      } else if (this._isActionExistInActiveQuence(action)) {
        this._removeActionFromActiveQueue(action);
        this._addActionToUnActiveQuence(action);
      }
    }
  }

  /**
   * 移除动作
   * @param  {[type]} action [description]
   */
  removeAction(action: XXAction) {
    if (action) {
      if (this._isActionExistInActiveQuence(action)) {
        this._removeActionFromActiveQueue(action);
      } else if (this._isActionExistInUnactiveQuence(action)) {
        this._removeActionFromUnActiveQueue(action);
      }
    }
  }

  /**
   * 重新执行动作
   * @param  {[type]} action [description]
   */
  startAction(action: XXAction) {
    action.resetActionState();
    console.log('start action =========');
    console.log(action);
    this.restartAction(action);
  }

  /**
   * 继续开始执行动作
   * @param  {[type]} action [description]
   */
  restartAction(action: XXAction) {
    if (this._isActionExistInActiveQuence(action)) {
      // do nothing
    } else if (this._isActionExistInUnactiveQuence(action)) {
      this._removeActionFromUnActiveQueue(action);
      this._addActionToActiveQuence(action);
    } else {
      this._addActionToActiveQuence(action);
    }
  }

  /**
   * 开始执行acttion
   */
  start() {
    xxvJSDriver.startTarget(this);
  }

  /**
   * [pause description]
   */
  pause() {
    xxvJSDriver.pauseTarget(this);
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
        action.step(deltaTime * this._speed);
      }

      // 删除那些已经完成的action
      for (let action of actions.values()) {
        if (action.isDone()) {
          this.removeAction(action);
        }
      }
    }
  }

  /**
   * 设置action运行的速度
   * @param {number} speed action运行速度，代表倍数的意思
   */
  setSpeed(speed: number) {
    this._speed = speed;
  }


  /** ********************
   * 辅助方法
   ***********************/

  /**
   * action是否没有在当前的活动队列和暂停队列中出现
   * @param  {XXAction}  action action对象
   * @return {Boolean}        [description]
   */
  isUniqueAction(action: XXAction): boolean {
    return !this._isActionExistInActiveQuence(action) &&
        !this._isActionExistInUnactiveQuence(action);
  }

  /**
   * action是否已经存在活动队列中
   * @param  {[type]}  action [description]
   * @return {Boolean}        [description]
   */
  _isActionExistInActiveQuence(action: XXAction) {
    return action && this._activeActions.has(action.UUID);
  }

  /**
   * action是否存在非活动队列中
   * @param  {[type]}  action [description]
   * @return {Boolean}        [description]
   */
  _isActionExistInUnactiveQuence(action: XXAction) {
    return action && this._stoppedActions.has(action.UUID);
  }

  /**
   * 将action从活动队列中移除
   * @param  {XXAction} action action对象
   */
  _removeActionFromActiveQueue(action: XXAction) {
    if (action && this._activeActions.has(action.UUID)) {
      this._activeActions.delete(action.UUID);
    }
  }

  /**
   * 将action从活动队列中移除
   * @param  {XXAction} action action对象
   */
  _removeActionFromUnActiveQueue(action: XXAction) {
    if (action && this._stoppedActions.has(action.UUID)) {
      this._stoppedActions.delete(action.UUID);
    }
  }

  /**
   * 将action添加到活动队列中
   * @param {XXAction} action [description]
   */
  _addActionToActiveQuence(action: XXAction) {
    if (action) {
      this._activeActions.set(action.UUID, action);
    }
  }

  /**
   * 将action添加到非活动队列中
   * @param {XXAction} action [description]
   */
  _addActionToUnActiveQuence(action: XXAction) {
    if (action) {
      this._stoppedActions.set(action.UUID, action);
    }
  }
}

let xxvActionManager = new XXActionManager();
xxvActionManager.start();

export default xxvActionManager;
