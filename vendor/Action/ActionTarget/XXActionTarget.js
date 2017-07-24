// @flow

import XXObject from '../Foundation/XXObject.js';
import XXAction from '../Action/XXAction.js';
import XXActionManager from '../ActionManager/XXActionManager.js';

/**
 * 动画作用的对象（动画宿主）
 * 可以执行一系列的动画
 * @class
 */
class XXActionTarget extends XXObject {
  /**
   * 构造函数
   * @param  {String} uuid 唯一标识符
   */
  constructor(uuid: string) {
    super(uuid);
  }

  /**
   * 执行动作
   * @param  {XXAction} actionObject 动画对象
   */
  runAction(actionObject: XXAction) {
    if (actionObject) {
      XXActionManager.addAction(actionObject, this);
    }
  }
}

export default XXActionTarget;
