// @flow

import XXObject from 'XXFoundation/XXObject.js';
import XXAction from 'XXActionAlias/Action/XXAction.js';
import xxvActionManager from 'XXActionAlias/ActionManager/XXActionManager.js';

import xxvTypeVerify from 'XXTool/TypeVerify.js';

/**
 * 动画作用的对象（动画宿主）
 * 可以执行一系列的动画
 * @class
 */
class XXActor extends XXObject {
  /**
   * 构造函数
   * @param  {String} uuid 唯一标识符
   */
  constructor(uuid: ?string = undefined) {
    super(uuid);
  }

  /**
   * 执行动作
   * @param  {XXAction} actionObject 动画对象
   * @param {boolean} startDefault = true 是否默认执行
   * @return {XXActor} 返回当前actor，用于链式执行
   */
  runAction(actionObject: XXAction, startDefault: boolean = true) {
    if (actionObject && xxvTypeVerify.isType(actionObject, XXAction)) {
      actionObject.startWithTarget(this);
      xxvActionManager.addAction(actionObject, startDefault);

      return this;
    } else {
      throw new Error('runAction with an non-action object');
    }
  }

  /**
   * [then description]
   */
  then() {

  }
}

export default XXActor;
