// @flow

/**
 * 自定义事件对象
 */
class XXEvent extends CustomEvent {
  // 事件发送者
  _sender: Object;

  // 事件接收者
  _receiver: Object;

  /**
   * 构造函数
   * @param  {[Object]} sender 事件的发送方
   */
  constructor(sender: Object) {
    super('', {
      bubbles: false,
      cancelable: false,
      detail: {

      },
    });
  }
}


export default {XXEvent};
export {
  XXEvent,
};
