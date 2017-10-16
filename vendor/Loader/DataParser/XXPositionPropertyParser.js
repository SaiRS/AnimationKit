import {XXLoaderPropertyType} from '../XXLoaderConstant.js';
import XXPropertyParser from './XXPropertyParser.js';

/**
 * 位置属性解析
 */
class XXPositionPropertyParser {
  /**
   * 获取位置信息
   * @param  {Object} property [description]
   * @return {Object}           {x: 0, y:0, z: 0}
   */
  static getPosition(property) {
    if (XXPropertyParser.getPropertyType(property) ==
       XXLoaderPropertyType.PointType) {
      // 属性的值
      let value = XXPropertyParser.getPropertyValue(property);
      return {
        x: value['x'],
        y: value['y'],
        z: value['z'],
      };
    } else {
      return null;
    }
  }
}

export {XXPositionPropertyParser};
