// @flow
//

// 属性基本结构
// {
//   type: '',
//   value: '',
//   name: '',
// }

/**
 * 用来进行属性解析的类
 */
class XXPropertyParser {

  /**
   * 获得属性的类型
   * @param {Object} property 属性结构
   * @return {[undefined, string]} [description]
   */
  static getPropertyType(property) {
    return property && property['type'];
  }

  /**
   * 获得属性的值
   * @param {Object} property 属性结构
   * @return {[undefined, mixed]}          [description]
   */
  static getPropertyValue(property) {
    return property && property['value'];
  }

  /**
   * 获得属性的名字
   * @param {Object} property 属性结构
   * @return {[undefined, string]}          [description]
   */
  static getPropertyName(property) {
    return property && property['name'];
  }

  /** ****************
  * 修改部分
  ********************/

  /**
   * [modifyPropertyValue description]
   * @param  {[type]} property [description]
   * @param  {[type]} newValue [description]
   */
  static modifyPropertyValue(property, newValue) {
    if (property) {
      property['value'] = newValue;
    }
  }

  /** **************************
   * 增加部分
   ****************************/

  /**
   * [createNewProperty description]
   * @param  {[type]} type  [description]
   * @param  {[type]} name  [description]
   * @param  {[type]} value [description]
   * @return {[type]}       [description]
   */
  static createNewProperty(type, name, value) {
    return {
      type: type,
      value: value,
      name: name,
    };
  }
}


export default XXPropertyParser;
