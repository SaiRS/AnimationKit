// @flow
//

import XXActionInterval from './XXActionInterval.js';

/**
 * 用来表示瞬间动作
 */
class XXActionInstant extends XXActionInterval {

  /**
   * 构造函数
   */
  constructor() {
    let duration = Number.EPSILON;
    super(duration);
  }

  /**
   * @inheritdoc
   */
  initWithDuration() {
    throw new Error('This method is not avaliable for [XXActionInstant]');
  }

  /**
   * @inheritdoc
   */
  className(): string {
    return 'XXActionInstant';
  }
}

export default XXActionInstant;
