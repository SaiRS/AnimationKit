
/**
 * [XXActionPropertyParser description]
 */
class XXActionPropertyParser {
  /**
   * [getActionItemProperty description]
   * @param  {[type]} actionProperty [description]
   * @param  {[type]} propertyName   [description]
   * @return {[type]}                [description]
   */
  static getActionItemProperty(actionProperty, propertyName) {
    return Reflect.get(actionProperty, propertyName);
  }

  /**
   * [addActionProperty description]
   * @param {[type]} actionProperty     [description]
   * @param {[type]} propertyName       [description]
   * @param {[type]} actionItemProperty [description]
   */
  static addActionItemProperty(actionProperty, propertyName, actionItemProperty) {
    Reflect.set(actionProperty, propertyName, actionItemProperty);
  }

  /**
   * [removeActionItemProperty description]
   * @param  {[type]} actionProperty [description]
   * @param  {[type]} propertyName   [description]
   */
  static removeActionItemProperty(actionProperty, propertyName) {
    Reflect.deleteProperty(actionProperty, propertyName);
  }

  // modify
}


export {
  XXActionPropertyParser,
};
