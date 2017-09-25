// @flow
//

import XXNodeDomActor from 'XXActionAlias/Actor/XXNodeDomActor.js';
import XXEventType from 'XXVendor/Event/XXEventType.js';
/**
 * 用来表示可编辑元素的基类
 */
class XXNodeDomEditActor extends XXNodeDomActor {

  /** ******************************
  * 事件
  **********************************/

  /**
   * @inheritdoc
   */
  handleEvent(event: Event) {
    switch (event.type) {
      case XXEventType.FocusType:
        this.dealWithFocusEvent(event);
        break;

      case XXEventType.BlurType:
        this.dealWithBlurEvent(event);
        break;
    }
  }

  /**
   * 聚焦事件处理
   * @param  {[Event]} event [description]
   */
  dealWithFocusEvent(event: Event) {

  }

  /**
   * 失去焦点处理
   * @param  {[type]} event [description]
   */
  dealWithBlurEvent(event: Event) {

  }

  /**
   * @inheritdoc
   */
  initEvent() {

  }
}

export default XXNodeDomEditActor;
export {
  XXNodeDomEditActor,
};
