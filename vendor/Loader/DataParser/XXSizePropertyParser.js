import {XXLoaderPropertyType} from '../XXLoaderConstant.js';
import XXPropertyParser from './XXPropertyParser.js';

/**
 * 位置属性解析
 */
class XXSizePropertyParser {
  /**
   * 获取位置信息
   * @param  {Object} property [description]
   * @return {Object}           {width: 0, height:0}
   */
  static getSize(property) {
    if (XXPropertyParser.getPropertyType(property) ==
       XXLoaderPropertyType.SizeType) {
      // 属性的值
      let value = XXPropertyParser.getPropertyValue(property);
      return {
        width: value['width'],
        height: value['height'],
      };
    } else {
      return null;
    }
  }
}

export {XXSizePropertyParser};
