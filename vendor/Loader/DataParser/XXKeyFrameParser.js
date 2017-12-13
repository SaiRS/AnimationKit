// 解析XXKeyframeProperty,关于XXKeyframeProperty，可以查看flow-typed/XXActionProperty.js
import XXPropertyParser from './XXPropertyParser.js';
/**
 * [XXKeyframePropertyParser description]
 */
class XXKeyframePropertyParser {
  /**
   * [getTime description]
   * @param  {[type]} keyframeProperty [description]
   * @return {[type]}                  [description]
   */
  static getTime(keyframeProperty) {
    return keyframeProperty && keyframeProperty['time'];
  }

  /**
   * [getTimeFunction description]
   * @param  {[type]} keyframeProperty [description]
   * @return {[type]}                  [description]
   */
  static getTimeFunction(keyframeProperty) {
    return keyframeProperty && keyframeProperty['timeFunction'];
  }

  /**
   * [getKeyframeType description]
   * @param  {[type]} keyframeProperty [description]
   * @return {[type]}                  [description]
   */
  static getKeyframeType(keyframeProperty) {
    return keyframeProperty && keyframeProperty['propertyType'] || '';
  }

  /**
   * [getKeyframeName description]
   * @param  {[type]} keyframeProperty [description]
   * @return {[type]}                  [description]
   */
  static getKeyframeName(keyframeProperty) {
    return keyframeProperty && keyframeProperty['propertyName'] || '';
  }

  /**
   * [getKeyframeValue description]
   * @param  {[type]} keyframeProperty [description]
   * @return {[type]}                  [description]
   */
  static getKeyframeValue(keyframeProperty) {
    return keyframeProperty && keyframeProperty['propertyValue'];
  }

  /**
   * [getProperty description]
   * @param  {[type]} keyframeProperty [description]
   * @return {[type]}                  [description]
   */
  static getProperty(keyframeProperty) {
    if (keyframeProperty) {
      return XXPropertyParser.createNewProperty(keyframeProperty['propertyType'], keyframeProperty['propertyName'], keyframeProperty['propertyValue']);
    } else {
      return null;
    }
  }

  /**
   * [modifyProperty description]
   * @param  {[type]} keyframeProperty [description]
   * @param  {[type]} propertyType     [description]
   * @param  {[type]} propertyValue    [description]
   */
  static modifyProperty(keyframeProperty, propertyType, propertyValue) {
    // TODO: 验证type和value是否匹配
    if (keyframeProperty) {
      Reflect.set(keyframeProperty, propertyType, propertyValue);
    }
  }
}

export {
  XXKeyframePropertyParser,
};
