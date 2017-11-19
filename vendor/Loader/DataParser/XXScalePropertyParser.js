import {XXPropertyTypeEnum} from '../Constant/XXPropertyTypeConstant.js';
import XXPropertyParser from './XXPropertyParser.js';

/**
 * 缩放属性解析
 */
class XXScalePropertyParser extends XXPropertyParser {
  /**
   * 获取缩放信息
   * @param  {Object} property [description]
   * @return {Object}           {scaleX: 0, scaleY:0, scaleZ: 0}
   */
  static getScaleValue(property) {
    if (XXPropertyParser.getPropertyType(property) ==
       XXPropertyTypeEnum.ScaleType) {
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

  /** **************************
   * 修改部分
   ****************************/

  /**
   * [setScale description]
   * @param {[type]} property   [description]
   * @param {Number} [scaleX=1] [description]
   * @param {Number} [scaleY=1] [description]
   * @param {Number} [scaleZ=1] [description]
   */
  static setScale(property, scaleX = 1, scaleY = 1, scaleZ = 1) {
    if (XXPropertyParser.getPropertyType(property) == XXPropertyTypeEnum.ScaleType) {
      let value = XXPropertyParser.getPropertyValue(property);
      value['scaleX'] = scaleX;
      value['scaleY'] = scaleY;
      value['scaleZ'] = scaleZ;
    }
  }
}

export {XXScalePropertyParser};
