import {XXLoaderPropertyType} from '../XXLoaderConstant.js';
import XXPropertyParser from './XXPropertyParser.js';

import * as ValueTool from 'XXTool/ValueTool.js';
/**
 * 尺寸属性解析
 */
class XXSizePropertyParser {
  /**
   * 获取尺寸信息
   * @param  {Object} property [description]
   * @return {Object}           {width: 0, height:0}
   */
  static getSize(property) {
    if (XXPropertyParser.getPropertyType(property) ==
       XXLoaderPropertyType.SizeType) {
      // 属性的值
      let value = XXPropertyParser.getPropertyValue(property);
      return {
        width: value['width'],
        height: value['height'],
      };
    } else {
      return null;
    }
  }

  /** **************************
   * 修改部分
   ****************************/

  /**
   * [setSize description]
   * @param {[type]} property       [description]
   * @param {String} [width='0px']  [description]
   * @param {String} [height='0px'] [description]
   */
  static setSize(property, width = '0px', height = '0px') {
    if (XXPropertyParser.getPropertyType(property) == XXLoaderPropertyType.SizeType) {
      let value = XXPropertyParser.getPropertyValue(property);

      // 值，单位
      let widthunit = ValueTool.xxfExtractUnitFromStringValue(value['width']);
      if (!ValueTool.xxfIsValidUnitOfSize(widthunit)) {
        widthunit = ValueTool.xxfDefaultUnitOfSize();
      }

      let heightunit = ValueTool.xxfExtractUnitFromStringValue(value['height']);
      if (!ValueTool.xxfIsValidUnitOfSize(heightunit)) {
        heightunit = ValueTool.xxfDefaultUnitOfSize();
      }

      value['width'] = ValueTool.xxfExtractNumberValueFromStringValue(width) + widthunit;
      value['height'] = ValueTool.xxfExtractNumberValueFromStringValue(height) + heightunit;
    }
  }
}

export {XXSizePropertyParser};
