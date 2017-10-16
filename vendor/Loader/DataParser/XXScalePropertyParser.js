import {XXLoaderPropertyType} from '../XXLoaderConstant.js';
import XXPropertyParser from './XXPropertyParser.js';

/**
 * 位置属性解析
 */
class XXScalePropertyParser {
  /**
   * 获取缩放信息
   * @param  {Object} property [description]
   * @return {Object}           {scaleX: 0, scaleY:0, scaleZ: 0}
   */
  static getScale(property) {
    if (XXPropertyParser.getPropertyType(property) ==
       XXLoaderPropertyType.ScaleType) {
      // 属性的值
      let value = XXPropertyParser.getPropertyValue(property);
      return {
        scaleX: value['scaleX'],
        scaleY: value['scaleY'],
        scaleZ: value['scaleZ'],
      };
    } else {
      return null;
    }
  }
}

export {XXScalePropertyParser};
