import {XXLoaderPropertyType} from '../XXLoaderConstant.js';
import XXPropertyParser from './XXPropertyParser.js';

import * as ValueTool from 'XXTool/ValueTool.js';

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

  /** **************************
   * 修改部分
   ****************************/

  /**
   * [setRotation description]
   * @param {[type]} property  [description]
   * @param {[type]} rotationZ [description]
   * @param {[type]} rotationX [description]
   * @param {[type]} rotationY [description]
   */
  static setRotation(property, rotationZ = '0deg', rotationX = '0deg', rotationY = '0deg') {
    if (XXPropertyParser.getPropertyType(property) == XXLoaderPropertyType.RotationType) {
      let value = XXPropertyParser.getPropertyValue(property);

      let zunit = ValueTool.xxfExtractUnitFromStringValue(rotationZ);
      if (!ValueTool.xxfIsValidUnitOfAngle(zunit)) {
        zunit = ValueTool.xxfDefaultUnitOfAngle();
      }

      let xunit = ValueTool.xxfExtractUnitFromStringValue(rotationX);
      if (!ValueTool.xxfIsValidUnitOfAngle(xunit)) {
        xunit = ValueTool.xxfDefaultUnitOfAngle();
      }

      let yunit = ValueTool.xxfExtractUnitFromStringValue(rotationY);
      if (!ValueTool.xxfIsValidUnitOfAngle(yunit)) {
        yunit = ValueTool.xxfDefaultUnitOfAngle();
      }

      value['rotationX'] = ValueTool.xxfExtractNumberValueFromStringValue(rotationX) + xunit;
      value['rotationY'] = ValueTool.xxfExtractNumberValueFromStringValue(rotationY) + yunit;
      value['rotationZ'] = ValueTool.xxfExtractNumberValueFromStringValue(rotationZ) + zunit;
    }
  }
}

export {XXRotationPropertyParser};
