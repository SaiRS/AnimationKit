// @flow
//

import XXAction from './XXAction.js';

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

  /**
   * 动画执行的方向，可选的参数为
   * normal, reverse, alternate, alternate-reverse
   * @type {string}
   */
  _directoion: string;

  /**
   * 动画重复次数, 默认为1，可以为小数
   * @type {number}
   */
  _iterationCount: number;

  /**
   * 动画执行后应该停留的状态, 与
   * @type {tring}
   */
  _fillMode: string;
  /**
   * 构造函数
   * @param  {number} duration 动画时长,单位毫秒
   */
  constructor(duration: number) {
    super();

    this._duration = duration;
    this._elapsed = 0;
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
   * @inheritdoc
   */
  isDone() {
    return this._elapsed >= this._duration;
  }
}

export default XXActionInterval;
