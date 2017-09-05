// @flow


/**
 * [actionEventCallBack description]
 * @param  {[type]} uuid  [description]
 * @param  {[type]} event [description]
 */
type XXActionEventCallBackFunction =
    (event: string, action: XXAction, actor: XXActor | null) => void;


import XXObject from 'XXFoundation/XXObject.js';
import XXActionEvent from './XXActionEvent.js';
import xxvActionManager from 'XXActionAlias/ActionManager/XXActionManager.js';

import xxvNotificationCenter from 'XXVendor/Notification/NotificationCenter.js';

/**
 * 动作的基类，表示执行某项操作
 */
class XXAction extends XXObject {

  /**
   * 执行动作的对象
   * @private
   * @type {XXActor}
   */
  _target: XXActor | null;

  _eventCallback: XXActionEventCallBackFunction | null;

  /**
   * 动画的基类
   * @param  {[string]} uuid [唯一标识符]
   */
  constructor(uuid: ?string = undefined) {
    super(uuid);
  }

  /**
   * 设置执行动作的对象，一般来说表明准备开始执行动作了,初始化动画开始的状态
   * 子类一般需要重写这个方法
   * 注：不要直接调用action的这个方法，而是使用XXActor的runAction方法
   * @param  {[type]} actionTarget [description]
   */
  startWithTarget(actionTarget: XXActor) {
    this._target = actionTarget;
  }

  /**
   * 在驱动器的每次循环中都会调用一次，用来驱动动作的执行
   * @abstract
   * @param  {[float]} process [表示动画进行的进度，0表示尚未开始，1表示已经完成]
   */
  update(process: number) {
    throw new Error('Implement the function [update] of your Action class');
  }

  /**
   * 在驱动器的每次循环中都会调用一次，用来驱动动作的执行
   * @abstract
   * @param  {[float]} deltaTime [这次调用距离上次调用过去的时间，单位ms]
   */
  step(deltaTime: number) {
    throw new Error('Implement the function [step] of your Action class');
  }

  /**
   * 动作是否完成
   * @abstract
   * @return {Boolean} [true表明动作已经完成]
   */
  isDone(): boolean {
    // 子类继承
    return true;
  }


  /** **********************
  *  action control
  * ***********************/

  /**
   * 重置action的状态
   * @abstract
   */
  resetActionState() {

  }

  /**
   * 继续执行action
   */
  start() {
    xxvActionManager.startAction(this);
  }

  /**
   * 暂停action
   */
  pause() {
    xxvActionManager.pauseAction(this);
  }

  /**
   * 重新执行action
   */
  restart() {
    xxvActionManager.restartAction(this);
  }

  /**
   * 获得跟当前相反的一个动作
   * @abstract
   * @return {[type]} [description]
   */
  reverse(): XXAction {
    throw new Error('Implement the function [reverse] of your Action class');
  }

  /**
   * 返回当前的actor
   * @return {XXActor} 执行当前动作的actor对象
   */
  getTarget(): XXActor | null {
    return this._target;
  }

  /** *****************
  * action event call back
  * ******************/

  /**
   * 动画start的回调，不管是调用actor.runAction(action, true)
   * 还是单独执行action.start()
   * 都会触发这个事件
   * 不过需要真正的触发action start，比如说action在start的状态中是不会触发这个事件的
   */
  doStartTask() {
    console.log(`${this.className()} started`);

    // 发送通知
    xxvNotificationCenter.postNotification(
      XXActionEvent.ActionStartEvet,
      this);
  }

  /**
  * 动画restart的回调，执行action.restart()会触发这个事件
  * 不过需要真正的触发action restart，比如说action在start的状态中是不会触发这个事件的
  */
  doRestartTask() {
    console.log(`${this.className()} restarted`);

    // 发送通知
    xxvNotificationCenter.postNotification(
      XXActionEvent.ActionRestartEvent,
      this);
  }

  /**
  * 动画pause的回调，执行action.pause()会触发这个事件
  * 不过需要真正的触发action pause，比如说action在非start的状态中是不会触发这个事件的
   */
  doPauseTask() {
    console.log(`${this.className()} paused`);

    // 发送通知
    xxvNotificationCenter.postNotification(
      XXActionEvent.ActionPausedEvent,
      this);
  }

  /**
   * 执行action完成时的任务(回调)
   */
  doDoneTask() {
    console.log(`${this.className()} finished`);

    // 发送通知
    xxvNotificationCenter.postNotification(
      XXActionEvent.ActionFinishedEvent,
      this);

    // 调用
    let actor = this.getTarget();
    if (this._eventCallback) {
      this._eventCallback('actionFinished', this, actor);
    }
  }

  /**
   * 执行action repeat时的回调
   */
  doRepeatedTask() {
    // 发送通知
    xxvNotificationCenter.postNotification(
      XXActionEvent.ActionRepeatEvent,
      this);
  }

  /**
   * action的事件传递
   * @param {XXActionEventCallBackFunction} callback action的uuid
   */
  then(callback: XXActionEventCallBackFunction) {
    this._eventCallback = callback;
  }

  /**
   * @inheritdoc
   */
  toString() {
    return `[className = ${this.className()}]`;
  }

  /**
   * 获得className
   * @return {string} 类名
   */
  className(): string {
    return 'XXAction';
  }
}

export default XXAction;
