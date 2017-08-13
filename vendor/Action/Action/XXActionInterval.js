// @flow
//

import XXAction from './XXAction.js';

/**
 * 用来表示持续性动作
 */
class XXActionInterval extends XXAction {
  /** 动画总的持续时间*/
  _duration: 0;
  /** 已执行动画的时间*/
  _elapsed: 0;

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
  step(deltaTime: float) {
    this._elapsed += deltaTime;

    let process = this._elapsed / this._duration;
    process = Math.min(1, Math.max(0, process));

    this.update(process);
  }

  /**
   * @inheritdoc
   */
  isDone() {
    return this._elapsed >= this._duration;
  }
}

export default XXActionInterval;
