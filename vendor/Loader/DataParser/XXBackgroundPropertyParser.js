import {XXPropertyTypeEnum} from '../Constant/XXPropertyTypeConstant.js';
import XXPropertyParser from './XXPropertyParser.js';
import {XXBackgroundImagePropertyParser} from './XXBackgroundImagePropertyParser.js';

// import * as ValueTool from 'XXTool/ValueTool.js';
/**
 * 位置属性解析
 */
class XXBackgroundPropertyParser {
  /** **************************
   * 读取部分
   ****************************/

  /**
   * []
   * @param  {Object} property [description]
   * @return {Object}           {x: 0, y:0, z: 0}
   */
  static getBackgroundSize(property) {
    if (XXPropertyParser.getPropertyType(property) == XXPropertyTypeEnum.BackgroundType) {
      // 属性的值
      let value = XXPropertyParser.getPropertyValue(property);
      let size = value['background-size'] || {};
      return {
        width: size['width'],
        height: size['height'],
      };
    } else {
      return null;
    }
  }

  /**
   * [getBackgroundImage description]
   * @param  {[type]} property [description]
   * @return {[type]}          [description]
   */
  static getBackgroundImage(property) {
    if (XXPropertyParser.getPropertyType(property) == XXPropertyTypeEnum.BackgroundType) {
      // 属性的值
      let value = XXPropertyParser.getPropertyValue(property);

      let backgroundimage = value['background-image'];
      return backgroundimage;
    } else {
      return null;
    }
  }

  /**
   * background image是不是图片
   * @param  {[type]}  property [description]
   * @return {Boolean}          [description]
   */
  static isBackgroundImageGradientMode(property) {
    let backgroundImage = XXBackgroundPropertyParser.getBackgroundImage(property);
    if (!backgroundImage) {
      return false;
    } else {
      return XXBackgroundImagePropertyParser.isBackgroundImageGradientMode(backgroundImage);
    }
  }

  /**
   * background image 是不是渐变
   * @param  {[type]}  property [description]
   * @return {Boolean}          [description]
   */
  static isBackgroundImageImageMode(property) {
    let backgroundImage = XXBackgroundPropertyParser.getBackgroundImage(property);
    if (!backgroundImage) {
      return false;
    } else {
      return XXBackgroundImagePropertyParser.isBackgroundImageImageMode(backgroundImage);
    }
  }

  /**
   * [getBackgroundPosition description]
   * @param  {[type]} property [description]
   * @return {[type]}          [description]
   */
  static getBackgroundPosition(property) {
    if (XXPropertyParser.getPropertyType(property) == XXPropertyTypeEnum.BackgroundType) {
      // 属性的值
      let value = XXPropertyParser.getPropertyValue(property);
      let pos = value['background-position'] || {};
      return {
        x: pos['x'],
        y: pos['y'],
      };
    } else {
      return null;
    }
  }

  /**
   * [getBackgroundColor description]
   * @param  {[type]} property [description]
   * @return {[type]}          [description]
   */
  static getBackgroundColor(property) {
    if (XXPropertyParser.getPropertyType(property) == XXPropertyTypeEnum.BackgroundType) {
      // 属性的值
      let value = XXPropertyParser.getPropertyValue(property);
      return value['background-color'];
    } else {
      return null;
    }
  }

  /**
   * [getBackgroundRepeatMode description]
   * @param  {[type]} property [description]
   * @return {[type]}          [description]
   */
  static getBackgroundRepeatMode(property) {
    if (XXPropertyParser.getPropertyType(property) == XXPropertyTypeEnum.BackgroundType) {
      // 属性的值
      let value = XXPropertyParser.getPropertyValue(property);
      let repeat = value['background-repeat'] || {};
      return {
        repeatX: repeat['repeatX'],
        repeatY: repeat['repeatY'],
      };
    } else {
      return null;
    }
  }

  /**
   * [backgroundGradientStartColor description]
   * @param  {[type]} property [description]
   * @return {[type]}          [description]
   */
  static backgroundGradientStartColor(property) {
    if (XXPropertyParser.getPropertyType(property) == XXPropertyTypeEnum.BackgroundType) {
      let value = XXPropertyParser.getPropertyValue(property);
      return XXBackgroundImagePropertyParser.backgroundGradientStartColor(value['background-image']);
    }
  }

  /**
   * [backgroundGradientEndColor description]
   * @param  {[type]} property [description]
   * @return {[type]}          [description]
   */
  static backgroundGradientEndColor(property) {
    if (XXPropertyParser.getPropertyType(property) == XXPropertyTypeEnum.BackgroundType) {
      let value = XXPropertyParser.getPropertyValue(property);
      return XXBackgroundImagePropertyParser.backgroundGradientEndColor(value['background-image']);
    }
  }

  /**
   * [backgroundGradientAngle description]
   * @param  {[type]} property [description]
   * @return {[type]}          [description]
   */
  static backgroundGradientAngle(property) {
    if (XXPropertyParser.getPropertyType(property) == XXPropertyTypeEnum.BackgroundType) {
      let value = XXPropertyParser.getPropertyValue(property);
      return XXBackgroundImagePropertyParser.backgroundGradientAngle(value['background-image']);
    }
  }

  /**
   * [getValidBackgroundImageCSSSyntax description]
   * @param  {[type]} property [description]
   * @return {[type]}          [description]
   */
  static getValidBackgroundImageCSSSyntax(property) {
    let backgroundImage = XXBackgroundPropertyParser.getBackgroundImage(property);
    return XXBackgroundImagePropertyParser.parseToValidCSSSyntax(backgroundImage);
  }

  /** **************************
   * 修改部分
   ****************************/

  /**
   * [createBackgroundValue description]
   * @return {[type]} [description]
   */
  static createBackgroundValue() {
    return {
      'background-color': undefined,
    };
  }

  /**
   * [createNewProperty description]
   * @param  {[type]} name [description]
   * @return {[type]}      [description]
   */
  static createNewProperty(name) {
    return XXPropertyParser.createNewProperty(
      XXPropertyTypeEnum.BackgroundType,
      name,
      {}
    );
  }

  /**
   * [setBackgroundColor description]
   * @param {[type]} property        [description]
   * @param {[type]} backgroundcolor [description]
   */
  static setBackgroundColor(property, backgroundcolor) {
    if (XXPropertyParser.getPropertyType(property) == XXPropertyTypeEnum.BackgroundType) {
      let value = XXPropertyParser.getPropertyValue(property);
      value['background-color'] = backgroundcolor;
    }
  }

  /**
   * [setBackgroundLineGradient description]
   * @param {[type]} property          [description]
   * @param {String} [angle='0deg']    [description]
   * @param {String} [start='rgba(255, 255, 255, 1)'] [description]
   * @param {String} [end='rgba(0, 0, 0, 1)'] [description]
   */
  static setBackgroundLineGradient(property, angle = '0deg', start = 'rgba(255, 255, 255, 1)', end = 'rgba(0, 0, 0, 1)') {
    if (XXPropertyParser.getPropertyType(property) == XXPropertyTypeEnum.BackgroundType) {
      let value = XXPropertyParser.getPropertyValue(property);

      value['background-image'] = {};
      XXBackgroundImagePropertyParser.setBackgroundLineGradient(value['background-image'], angle, start, end);
      // let backgroundImage = value['background-image'];
      // if (backgroundImage) {
      //   XXBackgroundImagePropertyParser.setBackgroundLineGradient(backgroundImage, angle, start, end);
      // } else {
      //   value['background-image'] = {};
      //   XXBackgroundImagePropertyParser.setBackgroundLineGradient(value['background-image'], angle, start, end);
      // }
    }
  }
}

export {XXBackgroundPropertyParser};
