// @flow

import XXActionDriver from './XXActionDriver.js';

/**
 * 用js实现的的驱动器
 */
class XXActionJSDriver extends XXActionDriver {

  _lastUpdateTime: number;
  _animationFrameId: number | null;

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
   * @inheritdoc
   */
  mainLoop() {
    this._animationFrameId = window.requestAnimationFrame((timestamp) => {
      this.play(timestamp);
    });
  }

  /**
   * 驱动器循环调用的方法
   * @param  {float} timestamp 当前时间距离开始触发 requestAnimationFrame 的回调的时间,这个时间一直增加的
   */
  play(timestamp: number) {
    // 计算deltaTIme
    let deltaTime = this.calculateDeltaTime();

    // xxvLog.info(`_activeTargets.length = ${this._activeTargets.length}`);
    if (this._activeTargets) {
      // 防止flow报错
      let targets = this._activeTargets;
      for (let target of targets.values()) {
        // target 需要支持step方法
        target.step(deltaTime);
      }

      // 清除

      // 循环调用
      this.mainLoop();
    }
  }

  /**
   * 获得本次更新距离上次更新的时间，单位ms
   * @return {[float]} [description]
   */
  calculateDeltaTime(): number {
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


//
let xxvJSDriver = new XXActionJSDriver();
xxvJSDriver.startMainLoop();

export default xxvJSDriver;
