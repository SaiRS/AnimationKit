import {XXLoaderPropertyType} from '../XXLoaderConstant.js';
import XXPropertyParser from './XXPropertyParser.js';

/**
 * 位置属性解析
 */
class XXStringPropertyParser {
  /**
   * 获取尺寸信息
   * @param  {Object} property [description]
   * @return {String}
   */
  static getString(property) {
    if (XXPropertyParser.getPropertyType(property) ==
       XXLoaderPropertyType.StringType) {
      // 属性的值
      return XXPropertyParser.getPropertyValue(property);
    } else {
      return null;
    }
  }
}

export {XXStringPropertyParser};
