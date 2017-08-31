// @flow

import XXActionInstant from '../XXActionInstant.js';
import XXActionShow from './XXActionShow.js';
/**
 * 表示隐藏的动画
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

  /**
   * @inheritdoc
   */
  reverse(): XXActionShow {
    return new XXActionShow();
  }
}


export default XXActionHide;
