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
  static getPropertyType(property): string {
    return property && property['type'];
  }

  /**
   * 获得属性的值
   * @param {Object} property 属性结构
   * @return {[undefined, mixed]}          [description]
   */
  static getPropertyValue(property): mixed {
    return property && property['value'];
  }

  /**
   * 获得属性的名字
   * @param {Object} property 属性结构
   * @return {[undefined, string]}          [description]
   */
  static getPropertyName(property): string {
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
  static modifyPropertyValue(property, newValue): void {
    if (property) {
      property['value'] = newValue;
    }
  }

  /**
   * [assignPropertyValue description]
   * @param  {[type]} property [description]
   * @param  {[type]} newValue [description]
   */
  static assignPropertyValue(property, newValue): void {
    if (property) {
      property['value'] = Object.assign(property['value'], newValue);
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


  /** ************************************************************
   *  实例方法
   ***************************************************************/


   /** ********************
    *  解析部分
    **********************/
  /**
   * [getPropertyType description]
   * @param  {[type]} property [description]
   * @return {[type]}          [description]
   */
  getPropertyType(property: XXProperty) {
    return property && property['type'];
  }

  /**
   * [getPropertyName description]
   * @param  {[type]} property [description]
   * @return {[type]}          [description]
   */
  getPropertyName(property: XXProperty) {
    return property && property['name'];
  }

  /**
   * [getTypeValue description]
   * @param  {[type]} property [description]
   * @return {[type]}          [description]
   */
  getTypeValue(property: XXProperty) {
    return property && property['value'];
  }

  /** ********************
   *  创建部分
   **********************/

  /**
   * [createNewProperty description]
   * @param  {String} [type='']  [description]
   * @param  {String} [value=''] [description]
   * @param  {String} [name='']  [description]
   * @return {[type]}            [description]
   */
  createNewProperty(type: string = '', value: string = '', name: string = ''): XXProperty {
    return {
      type: type,
      name: name,
      value: value,
    };
  }

  /** ********************
   *  修改部分
   **********************/

  /**
   * [modifyPropertyName description]
   * @param  {[type]} property [description]
   * @param  {[type]} newName  [description]
   */
  modifyPropertyName(property: XXProperty, newName: string) {
    if (property) {
      property['name'] = newName;
    }
  }

  /**
   * [modifyPropertyType description]
   * @param  {[type]} property [description]
   * @param  {[type]} newType  [description]
   */
  modifyPropertyType(property: XXProperty, newType: string) {
    if (property) {
      property['type'] = newType;
    }
  }

  /**
   * [modifyPropertyValue description]
   * @param  {[type]} property [description]
   * @param  {[type]} newValue [description]
   */
  modifyPropertyValue(property: XXProperty, newValue: mixed) {
    if (property) {
      property['value'] = newValue;
    }
  }
}


export default XXPropertyParser;
