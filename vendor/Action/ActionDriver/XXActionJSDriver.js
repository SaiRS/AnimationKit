// @flow

import XXActionDriver from './XXActionDriver.js';

/**
 * 用js实现的的驱动器
 */
class XXActionJSDriver extends XXActionDriver {

  _lastUpdateTime: null;
  _animationFrameId: null;

  /**
   * 构造函数
   */
  constructor() {
    super();
  }

  /**
   * @inheritdoc
   */
  startMainLoop() {
    this.stopMainLoop();

    this.mainLoop();
  }

  /**
   * 结束驱动器的循环
   */
  stopMainLoop() {
    if (this._animationFrameId) {
      window.cancelAnimationFrame(this._animationFrameId);
      this._animationFrameId = null;
    }
  }

  /**
   * 驱动器循环调用的方法
   * @param  {float} timestamp 当前时间距离开始触发 requestAnimationFrame 的回调的时间
   */
  play(timestamp: float) {
    // 计算deltaTIme
    let deltaTIme = this.calculateDeltaTime();

    let length = this._activeActions.length;
    for (let i=0; i<length; i++) {
      let action = this._activeActions[i];
      action.step(deltaTIme);
    }

    // 循环调用
    this.mainLoop();
  }

  /**
   * @inheritdoc
   */
  mainLoop() {
    this._animationFrameId = window.requestAnimationFrame(this.play);
  }

  /**
   * 获得本次更新距离上次更新的时间，单位ms
   * @return {[float]} [description]
   */
  calculateDeltaTime(): float {
    let now = Date.now();
    if (this._lastUpdateTime) {
      let delta = now - this._lastUpdateTime;
      this._lastUpdateTime = now;
      return delta;
    } else {
      this._lastUpdateTime = now;
      return 0;
    }
  }
}

export default XXActionJSDriver;
