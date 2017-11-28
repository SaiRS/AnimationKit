import {XXPropertyTypeEnum} from '../Constant/XXPropertyTypeConstant.js';
import XXPropertyParser from './XXPropertyParser.js';

import * as ValueTool from 'XXTool/ValueTool.js';
/**
 * [XXPaddingPropertyParser description]
 */
class XXPaddingPropertyParser {
  /**
   * 上内边距
   * @param  {[type]} property [description]
   * @return {[type]}          [description]
   */
  static getTopPaddingWidth(property) {
    return XXPaddingPropertyParser._getPaddingWidth(property, 'paddingTopWidth');
  }

  /**
   * [getBottomPaddingWidth description]
   * @param  {[type]} property [description]
   * @return {[type]}          [description]
   */
  static getBottomPaddingWidth(property) {
    return XXPaddingPropertyParser._getPaddingWidth(property, 'paddingBottomWidth');
  }

  /**
   * [getLeftPaddingWidth description]
   * @param  {[type]} property [description]
   * @return {[type]}          [description]
   */
  static getLeftPaddingWidth(property) {
    return XXPaddingPropertyParser._getPaddingWidth(property, 'paddingLeftWidth');
  }

  /**
   * [getRightPaddingWidth description]
   * @param  {[type]} property [description]
   * @return {[type]}          [description]
   */
  static getRightPaddingWidth(property) {
    return XXPaddingPropertyParser._getPaddingWidth(property, 'paddingRightWidth');
  }

  /**
   * [_getPaddingWidth description]
   * @param  {[type]} property     [description]
   * @param  {[type]} propertyName [description]
   * @return {[type]}              [description]
   */
  static _getPaddingWidth(property, propertyName) {
    if (XXPropertyParser.getPropertyType(property) == XXPropertyTypeEnum.PaddingType) {
      // 属性的值
      let value = XXPropertyParser.getPropertyValue(property);
      let size = value[propertyName];
      return size ? size : '';
    } else {
      return '';
    }
  }

  /**
   * [setTopPaddingWidth description]
   * @param {[type]} property      [description]
   * @param {String} [width='1px'] [description]
   */
  static setTopPaddingWidth(property, width = '1px') {
    XXPaddingPropertyParser._setPaddingWidth(property, width, 'paddingTopWidth');
  }

  /**
   * [setBottomPaddingWidth description]
   * @param {[type]} property      [description]
   * @param {String} [width='1px'] [description]
   */
  static setBottomPaddingWidth(property, width = '1px') {
    XXPaddingPropertyParser._setPaddingWidth(property, width, 'paddingBottomWidth');
  }

  /**
   * [setLeftPaddingWidth description]
   * @param {[type]} property      [description]
   * @param {String} [width='1px'] [description]
   */
  static setLeftPaddingWidth(property, width = '1px') {
    XXPaddingPropertyParser._setPaddingWidth(property, width, 'paddingLeftWidth');
  }

  /**
   * [setRightPaddingWidth description]
   * @param {[type]} property      [description]
   * @param {String} [width='1px'] [description]
   */
  static setRightPaddingWidth(property, width = '1px') {
    XXPaddingPropertyParser._setPaddingWidth(property, width, 'paddingRightWidth');
  }

  /**
   * [_setPaddingWidth description]
   * @param {[type]} property     [description]
   * @param {[type]} width        [description]
   * @param {[type]} propertyName [description]
   */
  static _setPaddingWidth(property, width, propertyName) {
    if (XXPropertyParser.getPropertyType(property) == XXPropertyTypeEnum.PaddingType) {
      let value = XXPropertyParser.getPropertyValue(property);

      // 值，单位
      let widthunit = ValueTool.xxfExtractUnitFromStringValue(value[propertyName]);
      if (!ValueTool.xxfIsValidUnitOfLength(widthunit)) {
        widthunit = ValueTool.xxfDefaultUnitOfLength();
      }

      value[propertyName] = ValueTool.xxfExtractNumberValueFromStringValue(width) + widthunit;
    }
  }

  /**
   * [createPaddingValue description]
   * @return {[type]} [description]
   */
  static createPaddingValue() {
    return {
      paddingTopWidth: '0px', // 带单位
      paddingBottomWidth: '0px', // 带单位
      paddingLeftWidth: '0px', // 带单位
      paddingRightWidth: '0px', // 带单位
    };
  }
}

export {
  XXPaddingPropertyParser,
};
