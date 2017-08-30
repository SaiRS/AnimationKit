// @flow

import XXActionInstant from '../XXActionInstant.js';

/**
 * 表示显示的动画
 */
class XXActionShow extends XXActionInstant {

  /**
   * @inheritdoc
   */
  update(process: number) {
    let target = this.getTarget();
    if (target) {
      target.show();
    }
  }

  /**
   * @inheritdoc
   */
  className(): string {
    return 'XXActionShow';
  }
}


export default XXActionShow;
