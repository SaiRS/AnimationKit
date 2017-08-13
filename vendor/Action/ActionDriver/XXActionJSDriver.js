// @flow

import XXActionDriver from './XXActionDriver.js';
// import xxvLog from '../Tool/LogTool.js';
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
   * @param  {float} timestamp 当前时间距离开始触发 requestAnimationFrame 的回调的时间,这个时间一直增加的
   */
  play(timestamp: float) {
    // 计算deltaTIme
    let deltaTime = this.calculateDeltaTime();

    // xxvLog.info(`_activeTargets.length = ${this._activeTargets.length}`);
    for (let target of this._activeTargets.values()) {
      // target 需要支持step方法
      target.step(deltaTime);
    }

    // 清除

    // 循环调用
    this.mainLoop();
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


//
let xxvJSDriver = new XXActionJSDriver();
xxvJSDriver.startMainLoop();

export default xxvJSDriver;
