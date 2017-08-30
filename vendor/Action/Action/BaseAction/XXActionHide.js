// @flow

import XXActionInstant from '../XXActionInstant.js';

/**
 * 表示显示的动画
 */
class XXActionHide extends XXActionInstant {

  /**
   * @inheritdoc
   */
  update(process: number) {
    let target = this.getTarget();
    if (target) {
      target.hide();
    }
  }

  /**
   * @inheritdoc
   */
  className(): string {
    return 'XXActionHide';
  }
}


export default XXActionHide;
