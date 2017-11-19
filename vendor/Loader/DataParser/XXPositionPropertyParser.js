import {XXPropertyTypeEnum} from '../Constant/XXPropertyTypeConstant.js';
import XXPropertyParser from './XXPropertyParser.js';

import * as ValueTool from 'XXTool/ValueTool.js';


/**
 * 位置属性解析
 */
class XXPositionPropertyParser extends XXPropertyParser {
  /** **************************
   * 读取部分
   ****************************/

  /**
   * 获取位置信息
   * @param  {Object} property [description]
   * @return {Object}           {x: 0, y:0, z: 0}
   */
  static getPosition(property) {
    if (XXPropertyParser.getPropertyType(property) ==
       XXPropertyTypeEnum.PointType) {
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

  /** **************************
   * 修改部分
   ****************************/

  /**
   * [setPosition description]
   * @param {[type]} property [description]
   * @param {Number} [x=0]    [description]
   * @param {Number} [y=0]    [description]
   * @param {Number} [z=0]    [description]
   */
  static setPosition(property, x = '0', y = '0', z = '0') {
    if (XXPropertyParser.getPropertyType(property) == XXPropertyTypeEnum.PointType) {
      // 属性的值
      let value = XXPropertyParser.getPropertyValue(property);

      // 值，单位
      let xunit = ValueTool.xxfExtractUnitFromStringValue(value['x']);
      if (!ValueTool.xxfIsValidUnitOfPosition(xunit)) {
        xunit = ValueTool.xxfDefaultUnitOfPosition();
      }

      let yunit = ValueTool.xxfExtractUnitFromStringValue(value['y']);
      if (!ValueTool.xxfIsValidUnitOfPosition(yunit)) {
        yunit = ValueTool.xxfDefaultUnitOfPosition();
      }

      let zunit = ValueTool.xxfExtractUnitFromStringValue(value['z']);
      if (!ValueTool.xxfIsValidUnitOfPosition(zunit)) {
        zunit = ValueTool.xxfDefaultUnitOfPosition();
      }
      value['x'] = ValueTool.xxfExtractNumberValueFromStringValue(x) + xunit;
      value['y'] = ValueTool.xxfExtractNumberValueFromStringValue(y) + yunit;
      value['z'] = ValueTool.xxfExtractNumberValueFromStringValue(z) + zunit;
    }
  }

  /**
   * [setPositionByOffset description]
   * @param {[type]} property [description]
   * @param {Number} [offsetX=0] [description]
   * @param {Number} [offsetY=0] [description]
   * @param {Number} [offsetZ=0] [description]
   */
  static setPositionByOffset(property, offsetX = '0', offsetY = '0', offsetZ = '0') {
    if (XXPropertyParser.getPropertyType(property) == XXPropertyTypeEnum.PointType) {
      // 属性的值
      let value = XXPropertyParser.getPropertyValue(property);

      let x = (ValueTool.xxfExtractNumberValueFromStringValue(value['x']) + offsetX);
      let xunit = ValueTool.xxfExtractUnitFromStringValue(value['x']);
      if (!ValueTool.xxfIsValidUnitOfPosition(xunit)) {
        xunit = ValueTool.xxfDefaultUnitOfPosition();
      }
      value['x'] = x + xunit;

      let y = (ValueTool.xxfExtractNumberValueFromStringValue(value['y']) + offsetY);
      let yunit = ValueTool.xxfExtractUnitFromStringValue(value['y']);
      if (!ValueTool.xxfIsValidUnitOfPosition(yunit)) {
        yunit = ValueTool.xxfDefaultUnitOfPosition();
      }
      value['y'] = y + yunit;

      let z = (ValueTool.xxfExtractNumberValueFromStringValue(value['z']) + offsetZ);
      let zunit = ValueTool.xxfExtractUnitFromStringValue(value['z']);
      if (!ValueTool.xxfIsValidUnitOfPosition(zunit)) {
        zunit = ValueTool.xxfDefaultUnitOfPosition();
      }
      value['z'] = z + zunit;
    }
  }


  /** ************************************************************
   *  实例方法
   ***************************************************************/

  /**
   * [createNewPositionProperty description]
   * @param  {XXPosition} value [description]
   * @param  {string} name  [description]
   * @return {[type]}       [description]
   */
  createNewPositionProperty(value, name) {
    return super.createNewProperty(
      XXPropertyTypeEnum.PointType,
      name,
      value,
    );
  }
}

export {XXPositionPropertyParser};
