import {XXLoaderPropertyType} from '../XXLoaderConstant.js';
import XXPropertyParser from './XXPropertyParser.js';

import * as ValueTool from 'XXTool/ValueTool.js';
/**
 * 位置属性解析
 */
class XXPositionPropertyParser {
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
  static setPosition(property, x = 0, y = 0, z = 0) {
    if (XXPropertyParser.getPropertyType(property) == XXLoaderPropertyType.PointType) {
      // 属性的值
      let value = XXPropertyParser.getPropertyValue(property);

      // 值，单位
      value['x'] = x + ValueTool.xxfExtractUnitFromStringValue(value['x']);
      value['y'] = y + ValueTool.xxfExtractUnitFromStringValue(value['y']);
      value['z'] = z + ValueTool.xxfExtractUnitFromStringValue(value['z']);
    }
  }

  /**
   * [setPositionByOffset description]
   * @param {[type]} property [description]
   * @param {Number} [offsetX=0] [description]
   * @param {Number} [offsetY=0] [description]
   * @param {Number} [offsetZ=0] [description]
   */
  static setPositionByOffset(property, offsetX = 0, offsetY = 0, offsetZ = 0) {
    if (XXPropertyParser.getPropertyType(property) == XXLoaderPropertyType.PointType) {
      // 属性的值
      let value = XXPropertyParser.getPropertyValue(property);
      // console.log('================== Start');
      // console.log(`pre value[x] = ${value['x']}`);
      // console.log(`pre value[y] = ${value['y']}`);
      // console.log(`pre value[z] = ${value['z']}`);

      let x = (ValueTool.xxfExtractNumberValueFromStringValue(value['x']) + offsetX);
      value['x'] = x + ValueTool.xxfExtractUnitFromStringValue(value['x']);

      let y = (ValueTool.xxfExtractNumberValueFromStringValue(value['y']) + offsetY);
      value['y'] = y + ValueTool.xxfExtractUnitFromStringValue(value['y']);

      let z = (ValueTool.xxfExtractNumberValueFromStringValue(value['z']) + offsetZ);
      value['z'] = z + ValueTool.xxfExtractUnitFromStringValue(value['z']);
      // console.log(`offsetX = ${offsetX}`);
      // console.log(`offsetY = ${offsetY}`);
      // console.log(`offsetZ = ${offsetZ}`);
      // console.log(`x = ${x}`);
      // console.log(`y = ${y}`);
      // console.log(`z = ${z}`);
      // console.log(`value[x] = ${value['x']}`);
      // console.log(`value[y] = ${value['y']}`);
      // console.log(`value[z] = ${value['z']}`);
      // console.log('================== End');
    }
  }
}

export {XXPositionPropertyParser};
