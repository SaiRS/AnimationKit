import {XXPropertyTypeEnum} from '../Constant/XXPropertyTypeConstant.js';
import XXPropertyParser from './XXPropertyParser.js';

import {XXKeyframePropertyParser} from './XXKeyFrameParser.js';
import XXActionMoveTo from 'XXActionAlias/Action/BaseAction/XXActionMoveTo.js';
import * as ValueTool from 'XXTool/ValueTool.js';

import XXPosition from 'XXFoundation/Type/XXPosition.js';
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
   * @param  {Boolean} withUnit 是否带单位
   * @return {Object}           {x: 0, y:0, z: 0}
   */
  static getPosition(property, withUnit = true) {
    if (XXPropertyParser.getPropertyType(property) ==
       XXPropertyTypeEnum.PointType) {
      // 属性的值
      let value = XXPropertyParser.getPropertyValue(property);
      if (withUnit) {
        return {
          x: value['x'],
          y: value['y'],
          z: value['z'],
        };
      } else {
        return {
          x: ValueTool.xxfExtractNumberValueFromStringValue(value['x']),
          y: ValueTool.xxfExtractNumberValueFromStringValue(value['y']),
          z: ValueTool.xxfExtractNumberValueFromStringValue(value['z']),
        };
      }
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


  /**
   * @override
   * @param  {[type]} keyframe 关键帧
   * @return {[type]}       [description]
   */
  static createNewActionFrom(keyframe, duration) {
    let type = XXKeyframePropertyParser.getKeyframeType(keyframe);
    if (type === XXPropertyTypeEnum.PointType) {
      // 解析
      let value = XXKeyframePropertyParser.getKeyframeValue(keyframe);

      // TODO: easeFunction的使用
      return new XXActionMoveTo(new XXPosition(
        ValueTool.xxfExtractNumberValueFromStringValue(value['x']),
        ValueTool.xxfExtractNumberValueFromStringValue(value['y']),
        ValueTool.xxfExtractNumberValueFromStringValue(value['z'])), duration);
    } else {
      return undefined;
    }
  }
}

export {XXPositionPropertyParser};
