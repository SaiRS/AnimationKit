import {XXLoaderPropertyType} from '../XXLoaderConstant.js';
import XXPropertyParser from './XXPropertyParser.js';

/**
 * 旋转属性解析
 */
class XXRotationPropertyParser {
  /**
   * 获取缩放信息
   * @param  {Object} property [description]
   * @return {Object}           {scaleX: 0, scaleY:0, scaleZ: 0}
   */
  static getRotation(property) {
    if (XXPropertyParser.getPropertyType(property) ==
       XXLoaderPropertyType.RotationType) {
      // 属性的值
      let value = XXPropertyParser.getPropertyValue(property);
      return {
        rotationX: value['rotationX'],
        rotationY: value['rotationY'],
        rotationZ: value['rotationZ'],
      };
    } else {
      return null;
    }
  }
}

export {XXRotationPropertyParser};
