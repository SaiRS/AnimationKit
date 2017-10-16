import {XXLoaderPropertyType} from '../XXLoaderConstant.js';
import XXPropertyParser from './XXPropertyParser.js';

/**
 * 锚点属性解析
 */
class XXAnchorPropertyParser {
  /**
   * 获取锚点信息
   * @param  {Object} property [description]
   * @return {Object}           {x: 0, y:0, z: 0}
   */
  static getAnchor(property) {
    if (XXPropertyParser.getPropertyType(property) ==
       XXLoaderPropertyType.PointType) {
      // 属性的值
      let value = XXPropertyParser.getPropertyValue(property);
      return {
        anchorX: value['x'] * 100 + '%',
        anchorY: value['y'] * 100 + '%',
      };
    } else {
      return null;
    }
  }
}

export {XXAnchorPropertyParser};
