import {XXPropertyTypeEnum} from '../Constant/XXPropertyTypeConstant.js';
import XXPropertyParser from './XXPropertyParser.js';

/**
 * String属性解析
 */
class XXStringPropertyParser extends XXPropertyParser {
  /**
   * 获取尺寸信息
   * @param  {Object} property [description]
   * @return {String}
   */
  static getStringValue(property) {
    if (XXPropertyParser.getPropertyType(property) == XXPropertyTypeEnum.StringType) {
      // 属性的值
      let result = XXPropertyParser.getPropertyValue(property);
      if (typeof result === 'string') {
        return result;
      } else {
        return null;
      }
    } else {
      return null;
    }
  }

  /**
   * [getPropertyValue description]
   * @param  {[type]} stringProperty [description]
   * @return {[type]}                [description]
   */
  getStringValue(stringProperty) {
    return XXStringPropertyParser.getStringValue(stringProperty);
  }
}

export {XXStringPropertyParser};
