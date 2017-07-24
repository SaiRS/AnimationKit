// @ flow

import XXActionDriver from './XXActionDriver.js';

/**
 * 用js实现的的驱动器
 */
class XXActionCSSAnimationDriver extends XXActionDriver {

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

  }

  /**
   * @inheritdoc
   */
  mainLoop() {
    // do nothing
  }
}

export default XXActionCSSAnimationDriver;
