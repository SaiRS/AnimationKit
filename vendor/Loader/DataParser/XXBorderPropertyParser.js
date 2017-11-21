import {XXPropertyTypeEnum} from '../Constant/XXPropertyTypeConstant.js';
import XXPropertyParser from './XXPropertyParser.js';

import * as ValueTool from 'XXTool/ValueTool.js';

/**
 *
 */
class XXBorderPropertyParser {
  /**
   * 上边框的宽度
   * @param  {[type]} property [description]
   * @return {[type]}          [description]
   */
  static getTopBorderWidth(property) {
    if (XXPropertyParser.getPropertyType(property) == XXPropertyTypeEnum.BorderType) {
      // 属性的值
      let value = XXPropertyParser.getPropertyValue(property);
      let size = value['borderTopWidth'];
      return size ? size : '';
    } else {
      return '';
    }
  }

  /**
   * [getTopBorderStyle description]
   * @param  {[type]} property [description]
   * @return {[type]}          [description]
   */
  static getTopBorderStyle(property) {
    if (XXPropertyParser.getPropertyType(property) == XXPropertyTypeEnum.BorderType) {
      // 属性的值
      let value = XXPropertyParser.getPropertyValue(property);
      let size = value['borderTopStyle'];
      return size ? size : '';
    } else {
      return '';
    }
  }

  /**
   * [getTopBorderStyle description]
   * @param  {[type]} property [description]
   * @return {[type]}          [description]
   */
  static getTopBorderColor(property) {
    if (XXPropertyParser.getPropertyType(property) == XXPropertyTypeEnum.BorderType) {
      // 属性的值
      let value = XXPropertyParser.getPropertyValue(property);
      let size = value['borderTopColor'];
      return size ? size : '';
    } else {
      return '';
    }
  }


  /**
   * 下边框的宽度
   * @param  {[type]} property [description]
   * @return {[type]}          [description]
   */
  static getBottomBorderWidth(property) {
    if (XXPropertyParser.getPropertyType(property) == XXPropertyTypeEnum.BorderType) {
      // 属性的值
      let value = XXPropertyParser.getPropertyValue(property);
      let size = value['borderBottomWidth'];
      return size ? size : '';
    } else {
      return '';
    }
  }

  /**
   * [getBottomBorderStyle description]
   * @param  {[type]} property [description]
   * @return {[type]}          [description]
   */
  static getBottomBorderStyle(property) {
    if (XXPropertyParser.getPropertyType(property) == XXPropertyTypeEnum.BorderType) {
      // 属性的值
      let value = XXPropertyParser.getPropertyValue(property);
      let size = value['borderBottomStyle'];
      return size ? size : '';
    } else {
      return '';
    }
  }

  /**
   * [getBottomBorderColor description]
   * @param  {[type]} property [description]
   * @return {[type]}          [description]
   */
  static getBottomBorderColor(property) {
    if (XXPropertyParser.getPropertyType(property) == XXPropertyTypeEnum.BorderType) {
      // 属性的值
      let value = XXPropertyParser.getPropertyValue(property);
      let size = value['borderBottomColor'];
      return size ? size : '';
    } else {
      return '';
    }
  }

  /**
   * 左边框的宽度
   * @param  {[type]} property [description]
   * @return {[type]}          [description]
   */
  static getLeftBorderWidth(property) {
    if (XXPropertyParser.getPropertyType(property) == XXPropertyTypeEnum.BorderType) {
      // 属性的值
      let value = XXPropertyParser.getPropertyValue(property);
      let size = value['borderLeftWidth'];
      return size ? size : '';
    } else {
      return '';
    }
  }

  /**
   * [getLeftBorderStyle description]
   * @param  {[type]} property [description]
   * @return {[type]}          [description]
   */
  static getLeftBorderStyle(property) {
    if (XXPropertyParser.getPropertyType(property) == XXPropertyTypeEnum.BorderType) {
      // 属性的值
      let value = XXPropertyParser.getPropertyValue(property);
      let size = value['borderLeftStyle'];
      return size ? size : '';
    } else {
      return '';
    }
  }

  /**
   * [getLeftBorderColor description]
   * @param  {[type]} property [description]
   * @return {[type]}          [description]
   */
  static getLeftBorderColor(property) {
    if (XXPropertyParser.getPropertyType(property) == XXPropertyTypeEnum.BorderType) {
      // 属性的值
      let value = XXPropertyParser.getPropertyValue(property);
      let size = value['borderLeftColor'];
      return size ? size : '';
    } else {
      return '';
    }
  }

  /**
   * 右边框的宽度
   * @param  {[type]} property [description]
   * @return {[type]}          [description]
   */
  static getRightBorderWidth(property) {
    if (XXPropertyParser.getPropertyType(property) == XXPropertyTypeEnum.BorderType) {
      // 属性的值
      let value = XXPropertyParser.getPropertyValue(property);
      let size = value['borderRightWidth'];
      return size ? size : '';
    } else {
      return '';
    }
  }

  /**
   * [getRightBorderStyle description]
   * @param  {[type]} property [description]
   * @return {[type]}          [description]
   */
  static getRightBorderStyle(property) {
    if (XXPropertyParser.getPropertyType(property) == XXPropertyTypeEnum.BorderType) {
      // 属性的值
      let value = XXPropertyParser.getPropertyValue(property);
      let size = value['borderRightStyle'];
      return size ? size : '';
    } else {
      return '';
    }
  }

  /**
   * [getRightBorderColor description]
   * @param  {[type]} property [description]
   * @return {[type]}          [description]
   */
  static getRightBorderColor(property) {
    if (XXPropertyParser.getPropertyType(property) == XXPropertyTypeEnum.BorderType) {
      // 属性的值
      let value = XXPropertyParser.getPropertyValue(property);
      let size = value['borderRightColor'];
      return size ? size : '';
    } else {
      return '';
    }
  }

  /**
   * 右上半径
   * @param  {[type]} property [description]
   * @return {[type]}          [description]
   */
  static getTopRightRadius(property) {
    if (XXPropertyParser.getPropertyType(property) == XXPropertyTypeEnum.BorderType) {
      // 属性的值
      let value = XXPropertyParser.getPropertyValue(property);
      let size = value['borderTopRightRadius'];
      return size ? size : '';
    } else {
      return '';
    }
  }

  /**
   * 左上
   * @param  {[type]} property [description]
   * @return {[type]}          [description]
   */
  static getTopLeftRadius(property) {
    if (XXPropertyParser.getPropertyType(property) == XXPropertyTypeEnum.BorderType) {
      // 属性的值
      let value = XXPropertyParser.getPropertyValue(property);
      let size = value['borderTopLeftRadius'];
      return size ? size : '';
    } else {
      return '';
    }
  }

  /**
   * 左下
   * @param  {[type]} property [description]
   * @return {[type]}          [description]
   */
  static getBottomLeftRadius(property) {
    if (XXPropertyParser.getPropertyType(property) == XXPropertyTypeEnum.BorderType) {
      // 属性的值
      let value = XXPropertyParser.getPropertyValue(property);
      let size = value['borderBottomLeftRadius'];
      return size ? size : '';
    } else {
      return '';
    }
  }

  /**
   * [getBottomRightRadius description]
   * @param  {[type]} property [description]
   * @return {[type]}          [description]
   */
  static getBottomRightRadius(property) {
    if (XXPropertyParser.getPropertyType(property) == XXPropertyTypeEnum.BorderType) {
      // 属性的值
      let value = XXPropertyParser.getPropertyValue(property);
      let size = value['borderBottomRightRadius'];
      return size ? size : '';
    } else {
      return '';
    }
  }


  /** **************
  * 修改
  ******************/

  /**
   * [setTopBorderWidth description]
   * @param {[type]} property      [description]
   * @param {String} [width='1px'] [description]
   */
  static setBorderTopWidth(property, width = '1px') {
    XXBorderPropertyParser._setBorderWidth(property, 'borderTopWidth', width);
  }

  /**
   * [setBorderBottomWidth description]
   * @param {[type]} property      [description]
   * @param {String} [width='1px'] [description]
   */
  static setBorderBottomWidth(property, width = '1px') {
    XXBorderPropertyParser._setBorderWidth(property, 'borderBottomWidth', width);
  }

  /**
   * [setBorderLeftWidth description]
   * @param {[type]} property      [description]
   * @param {String} [width='1px'] [description]
   */
  static setBorderLeftWidth(property, width = '1px') {
    XXBorderPropertyParser._setBorderWidth(property, 'borderLeftWidth', width);
  }

  /**
   * [setBorderRightWidth description]
   * @param {[type]} property      [description]
   * @param {String} [width='1px'] [description]
   */
  static setBorderRightWidth(property, width = '1px') {
    XXBorderPropertyParser._setBorderWidth(property, 'borderRightWidth', width);
  }

  /**
   * [_setBorderWidth description]
   * @param {[type]} property      [description]
   * @param {[type]} border        [description]
   * @param {String} [width='1px'] [description]
   */
  static _setBorderWidth(property, border, width ='1px') {
    if (XXPropertyParser.getPropertyType(property) == XXPropertyTypeEnum.BorderType) {
      let value = XXPropertyParser.getPropertyValue(property);

      // 值，单位
      let widthunit = ValueTool.xxfExtractUnitFromStringValue(value['borderTopWidth']);
      if (!ValueTool.xxfIsValidUnitOfLength(widthunit)) {
        widthunit = ValueTool.xxfDefaultUnitOfLength();
      }

      value[border] = ValueTool.xxfExtractNumberValueFromStringValue(width) + widthunit;
    }
  }

  /**
   * [createBorderValue description]
   * @return {[type]} [description]
   */
  static createBorderValue() {
    return {
      borderTopWidth: '1px', // 带单位
      borderTopColor: {
        red: 0,
        green: 0,
        blue: 0,
        alpha: 1,
      },
      borderTopStyle: String,

      borderBottomWidth: '1px', // 带单位
      borderBottomColor: {
        red: 0,
        green: 0,
        blue: 0,
        alpha: 1,
      },
      borderBottomStyle: 'solid',

      borderLeftWidth: '1px', // 带单位
      borderLeftColor: {
        red: 0,
        green: 0,
        blue: 0,
        alpha: 1,
      },
      borderLeftStyle: 'solid',

      borderRightWidth: '1px', // 带单位
      borderRightColor: {
        red: 0,
        green: 0,
        blue: 0,
        alpha: 1,
      },
      borderRightStyle: 'solid',

      borderTopLeftRadius: '0px', // 带单位
      borderTopRightRadius: '0px', // 带单位
      borderBottomLeftRadius: '0px', // 带单位
      borderBottomRightRadius: '0px', // 带单位
    };
  }
}

export {
  XXBorderPropertyParser,
};
