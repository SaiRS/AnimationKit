import XXObject from 'XXFoundation/XXObject.js';
/**
 * 消息中心
 * 结构组织为
 * {
 *  name: {
 *    observer: [
 *      {
 *        sender: **,
 *        selector: ****
 *      }
 *    ]
 *  }
 * }
 */

// type SelectorStructorType = {
//   sender?: XXObject,
//   selector: string
// }
// type ObserverStructorItemType = Map<XXObject, Array<SelectorStructorType>>;
// type NotificationType = Map<string, ObserverStructorItemType>;


/**
 * 消息中心
 */
class XXNotificationCenter extends XXObject {
  _observers;

  /**
   * 构造函数
   */
  constructor() {
    super();

    this._init();
  }
  /**
   * 添加监听者
   * @param {XXObject} observer 监听者
   * @param {string} selector 执行方法名
   * @param {string} name     通知名
   * @param {XXObject} sender   通知的发送者
   */
  addObserver(observer,
              selector,
              name,
              sender) {
    let notification = this._getObserverStructor(name);
    if (notification) {
      this._addNewObserverStructor(notification, observer, selector, sender);
    } else {
      this._addNewNotificationStructor(name, observer, selector, sender);
    }
  }

  /**
   * 发送通知
   * @param  {string} name     通知的名称
   * @param  {[XXObject, null]} sender   通知的发送者
   * @param  {[XXObject, null]} userInfo 额外参数
   */
  postNotification(name,
    sender,
    userInfo) {
    // find observer
    let observerStructor = this._getObserverStructor(name);
    if (observerStructor) { // 有记录
      // 遍历
      for (let [observer, selectors] of observerStructor.entries()) {
        for (let i = 0; i< selectors.length; i++) {
          let selector = selectors[i];

          let registerSelector =
           this._getSelectorFromSelectorStructor(selector);
          let registerSender = this._getSenderFromSelectorStructor(selector);

          //
          if (registerSender) { // 监听特定的sender
            if (sender && registerSender.isEqualTo(sender)) {
              let func = observer[registerSelector];

              func(userInfo);
            }
          } else { // 监听所有sender
            let func = observer[registerSelector];
            func(userInfo);
          }
        }
      }
    }
  }

  /**
   * 移除监听者
   * @param  {XXObject} observer 观察者
   */
  removeObserver(observer) {
    // 遍历所有的notificationName
    for (let [name, observerStructor] of this._observers.entries()) {
      // 遍历notificationName对应的所有observer
      for (let registerObserver of observerStructor.keys()) {
        console.log(registerObserver);
        if (registerObserver.isEqualTo(observer)) {
          observerStructor.delete(registerObserver);
        }
      }

      // 清空name
      if (!observerStructor.size) {
        this._observers.delete(name);
      }
    }
  }

  /**
   * 移除特定消息的监听者
   * @param  {XXObject} observer 观察者
   * @param  {string} name     通知名称
   * @param  {[XXObject, null]} sender   通知发送者
   */
  removeObserverWithNameSender(observer,
                               name,
                               sender) {
    let observerStructor = this._getObserverStructor(name);
    if (observerStructor) {
      for (let [registerObserver, selectorStructor] of
         observerStructor.entries()) {
        // 查找相同的observer
        if (registerObserver.isEqualTo(observer)) {
          if (sender) { // 删除特定
            for (let i = selectorStructor.length-1; i>= 0; i--) {
              let selector = selectorStructor[i];
              let registerSender =
               this._getSenderFromSelectorStructor(selector);

              if (sender.isEqualTo(registerSender)) {
                selectorStructor.splice(i, 1);
              }
            }

            // TODO:判断一下是不是observer所有的selector都已经没有了。
            if (!observerStructor.values().length) {
              observerStructor.delete(registerObserver);
            }
          } else { // 删除全部
            observerStructor.delete(registerObserver);
            break;
          }
        }
      }

      // 判断一下，是否name已经空了
      if (!observerStructor.size) {
        this._observers.delete(name);
      }
    }
  }


  /** ********************
  * 辅助方法
  ************************/

  /**
   * 初始化
   */
  _init() {
    this._observers = new Map();
  }

  /**
   * 获得记录的observer
   * @param  {[type]} notificationName [description]
   * @return {[type]}                  [description]
   */
  _getObserverStructor(
    notificationName) {
    let result = this._observers.get(notificationName);
    if (result) {
      return result;
    } else {
      return null;
    }
  }

  /**
   * 添加一个通知消息类型
   * @param {string} notificationName 通知消息
   * @param {XXObject} observer 监听者
   * @param {string} selector 方法名
   * @param {[XXObject, null]} sender 消息发送者
   */
  _addNewNotificationStructor(notificationName,
                          observer,
                          selector,
                          sender) {
    let newObserverItemStructor = new Map();
    this._observers.set(notificationName, newObserverItemStructor);

    this._addNewObserverStructor(newObserverItemStructor,
                                 observer,
                                 selector,
                                 sender);
  }

  /**
   * 给notificationStructor新添一个observer结构
   * @param {ObserverStructorItemType} observerStructor
   * @param {XXObject} observer 监听者
   * @param {string} selector 方法名
   * @param {[XXObject, null]} sender 消息发送者
   */
  _addNewObserverStructor(observerStructor,
                          observer,
                          selector,
                          sender) {
    let selectorStructors = observerStructor.get(observer);
    if (!selectorStructors) {
      selectorStructors = [];
      observerStructor.set(observer, selectorStructors);
    }

    this._addNewSelectorStructor(selectorStructors, selector, sender);
  }

  /**
   * 创建一个新的selector type结构的对象
   * @param {Array} selectorStructor
   * @param {string} selector 方法名
   * @param {[XXObject, null]} sender 消息发送者
   */
  _addNewSelectorStructor(selectorStructor,
                          selector,
                          sender) {
    let result = {};
    if (sender) {
      result = {
        selector: selector,
        sender: sender,
      };
    } else {
      result = {
        selector: selector,
      };
    }

    selectorStructor.push(result);
  }

  /**
   * 从selector structor中获得selector
   * @param {SelectorStructorType} selectorStructor
   * @return {string}
   */
  _getSelectorFromSelectorStructor(
    selectorStructor) {
    return selectorStructor['selector'];
  }

  /**
  * 从selector structor中获得selector
  * @param {SelectorStructorType} selectorStructor
  * @return {[XXObject, null]}
   */
  _getSenderFromSelectorStructor(
    selectorStructor) {
    let sender = selectorStructor['sender'];
    if (sender) {
      return sender;
    } else {
      return null;
    }
  }
}


let xxvNotificationCenter = new XXNotificationCenter();

export default xxvNotificationCenter;
export {
  xxvNotificationCenter,
};
