// @flow
//

/**
 * 用来对数据类型进行检验的辅助类
 */
class XXTypeVerify {

  /**
   * constructor
   */
  constructor() {

  }

  /** **************************
  *  build in type
  ******************************/

  /**
   * data是否为undefined
   * @param {[undefined, null, string, number...]} data 待检测的数据
   * @return {boolean} data为undefined返回true,否则返回false
   */
  isUndefined(data: mixed): boolean {
    return data === undefined;
  }

  /**
   * data是否为Null
   * @param {[undefined, null, string, number...]} data 待检测的数据
   * @return {boolean} data为Null返回true,否则返回false
   */
  isNull(data: mixed): boolean {
    return data === null;
  }

  /**
   * 是否是数字,排除了NaN
   * @param {[undefined, null, string, number...]} data 待检测的数据
   * @return {boolean} data为数字时返回true,否则返回false
   */
  isNumber(data: mixed): boolean {
    return data && typeof data === 'number';
  }

  /**
   * 是否是NaN,排除了undefined的情况
   * @param {[undefined, null, string, number...]} data 待检测的数据
   * @return {boolean} data为NaN返回true,否则返回false
   */
  isNaN(data: mixed): boolean {
    return data && isNaN(data);
  }

  /**
   * 是否是string
   * @param {[undefined, null, string, number...]} data 待检测的数据
   * @return {boolean} data为string返回true,否则返回false
   */
  isString(data: mixed): boolean {
    return data && typeof data === 'string';
  }

  /**
   * 是否是boolean
   * @param {[undefined, null, string, number...]} data 待检测的数据
   * @return {boolean} data为boolean返回true,否则返回false
   */
  isBoolean(data: mixed): boolean {
    return data && typeof data === 'boolean';
  }

  /**
   * 是否是symbol
   * @param {[undefined, null, string, number...]} data 待检测的数据
   * @return {boolean} data为symbol返回true,否则返回false
   */
  isSymbol(data: mixed): boolean {
    return data && typeof data === 'symbol';
  }

  /**
   * 是否是function
   * @param {[undefined, null, string, number...]} data 待检测的数据
   * @return {boolean} data为function返回true,否则返回false
   */
  isFunction(data: mixed): boolean {
    return data && typeof data === 'function';
  }

  /** **************************
  *  complex build in type
  ******************************/

  /**
   * 是否是function
   * @param {[undefined, null, string, number...]} data 待检测的数据
   * @return {boolean} data为function返回true,否则返回false
   */
  isReg(data: mixed): boolean {
    return data && data instanceof RegExp;
  }

  /**
   * 是否是object
   * @param {[undefined, null, string, number...]} data 待检测的数据
   * @return {boolean} data为object返回true,否则返回false
   */
  isObject(data: mixed): boolean {
    return data && data instanceof Object;
  }

  /**
   * 是否是array
   * @param {[undefined, null, string, number...]} data 待检测的数据
   * @return {boolean} data为array返回true,否则返回false
   */
  isArray(data: mixed): boolean {
    return data && data instanceof Array;
  }

  /** **************************
  *  custom type
  ******************************/

  /**
   * data是否是typele类型，用于自定义类型的判断
   * @param {[undefined, null, string, number...]} data 待检测的数据
   * @param {[undefined, null, string, number...]} type 待匹配的类型
   * @return {boolean} data为type类型返回true,否则返回false
   */
  isType(data: mixed, type: mixed): boolean {
    return data && type && data instanceof type;
  }
}

const xxvTypeVerify = new XXTypeVerify();
export default xxvTypeVerify;
