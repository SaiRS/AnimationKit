import {XXLoaderPropertyType} from '../XXLoaderConstant.js';
import XXPropertyParser from './XXPropertyParser.js';

import * as ValueTool from 'XXTool/ValueTool.js';
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
        anchorX: value['x'],
        anchorY: value['y'],
      };
    } else {
      return null;
    }
  }

  /** **************************
   * 修改部分
   ****************************/

  /**
   * [setAnchor description]
   * @param {[type]} property [description]
   * @param {[type]} anchorX  [description]
   * @param {[type]} anchorY  [description]
   */
  static setAnchor(property, anchorX, anchorY) {
    if (XXPropertyParser.getPropertyType(property) == XXLoaderPropertyType.PointType) {
      // 属性的值
      let value = XXPropertyParser.getPropertyValue(property);

      let anchorXUnit = ValueTool.xxfExtractUnitFromStringValue(anchorX);
      if (!ValueTool.xxfIsValidUnitOfAnchor(anchorXUnit)) {
        anchorXUnit = ValueTool.xxfDefaultUnitOfAnchor();
      }

      let anchorYUnit = ValueTool.xxfExtractUnitFromStringValue(anchorY);
      if (!ValueTool.xxfIsValidUnitOfAnchor(anchorYUnit)) {
        anchorYUnit = ValueTool.xxfDefaultUnitOfAnchor();
      }

      value['x'] = ValueTool.xxfExtractNumberValueFromStringValue(anchorX) + anchorXUnit;
      value['y'] = ValueTool.xxfExtractNumberValueFromStringValue(anchorY) + anchorYUnit;
    }
  }
}

export {XXAnchorPropertyParser};
