// 解析XXActionProperty的，关于XXActionProperty可以查看flow-typed/XXActionProperty.js

/**
 * [XXActionPropertyParser description]
 */
class XXActionsPropertyParser {
  /**
   * [getActionDetail description]
   * @param  {[type]} actionsProperty [description]
   * @param  {[type]} actionName     [description]
   * @return {[type]}                [description]
   */
  static getActionProperty(actionsProperty, actionName) {
    return actionsProperty && Reflect.get(actionsProperty, actionName);
  }

  /**
   * [addActionProperty description]
   * @param {[type]} actionsProperty [description]
   * @param {[type]} actionName      [description]
   * @param {[type]} actionProperty  [description]
   */
  static addActionProperty(actionsProperty, actionName, actionProperty) {
    if (actionsProperty) {
      Reflect.set(actionsProperty, actionName, actionProperty);
    }
  }

  /**
   * [removeActionProperty description]
   * @param  {[type]} actionsProperty [description]
   * @param  {[type]} actionName      [description]
   */
  static removeActionProperty(actionsProperty, actionName) {
    if (actionsProperty) {
      Reflect.deleteProperty(actionsProperty, actionName);
    }
  }

  // 修改
}

export {
  XXActionsPropertyParser,
};
