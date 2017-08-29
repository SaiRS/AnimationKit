// @flow
//

import XXAction from './XXAction.js';
import XXTimeFunctionLinear from
 'XXActionAlias/TimeFunction/XXTimeFunctionLinear.js';

export type XXActionDirectionType =
  'normal' | 'reverse' | 'alternate' | 'alternate-reverse';


/**
 * 用来表示持续性动作
 */
class XXActionInterval extends XXAction {
  /** 动画总的持续时间*/
  _duration: number;
  /** 已执行动画的时间*/
  _elapsed: number;

  _timeFunction: XXTimeFunctionInterface;

  /**
   * 构造函数
   * @param  {number} duration 动画时长,单位毫秒
   */
  constructor(duration: ?number) {
    super();

    if (duration) {
      this.initWithDuration(duration);
    } else {
      this.initWithDuration(0);
    }
  }

  /**
   * 初始化action时长
   * @param  {number} duration action时长, 单位ms
   */
  initWithDuration(duration: number) {
    this._duration = duration;
    this._elapsed = 0;
    this._timeFunction = new XXTimeFunctionLinear();
  }

  /**
   * @inheritdoc
   */
  step(deltaTime: number) {
    this._elapsed += deltaTime;

    let process = this._elapsed / this._duration;
    process = Math.min(1, Math.max(0, process));

    this.update(process);

    if (this.isDone()) {
      this.doDoneTask();
    }
  }

  /**
   * 设置action的time function
   * @param {XXTimeFunctionInterface} timeFunction
   * 实现了XXTimeFunctionInterface接口的对象
   */
  setTimeFunction(timeFunction: XXTimeFunctionInterface) {
    this._timeFunction = timeFunction;
  }

  /**
   * @inheritdoc
   * 子类需重写
   */
  update(process: number) {

  }

  /**
   * @inheritdoc
   */
  isDone() {
    return this._elapsed >= this._duration;
  }

  /**
   * 获得action的时长，单位ms
   * @return {number} action的时长，单位ms
   */
  getDuration(): number {
    return this._duration;
  }

  /**
   * @inheritdoc
   */
  className(): string {
    return 'XXActionInterval';
  }
}

export default XXActionInterval;
