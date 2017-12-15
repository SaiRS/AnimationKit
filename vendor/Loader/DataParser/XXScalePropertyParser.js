import {XXPropertyTypeEnum} from '../Constant/XXPropertyTypeConstant.js';
import XXPropertyParser from './XXPropertyParser.js';

import {XXKeyframePropertyParser} from './XXKeyFrameParser.js';
import XXActionScaleTo from 'XXActionAlias/Action/BaseAction/XXActionScaleTo.js';
import XXActionSetScale from 'XXActionAlias/Action/BaseAction/XXActionSetScale.js';
import XXScale from 'XXFoundation/Type/XXScale.js';

import * as ValueTool from 'XXTool/ValueTool.js';
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


  // 动画解析

  /**
   * @override
   * @param  {[type]} keyframe 关键帧
   * @param {Number} duration 持续时间
   * @param {Boolean} isInstantAction 是否为instant action(只有一帧，直接切换的那种)
   * @return {[type]}       [description]
   */
  static createNewActionFrom(keyframe, duration, isInstantAction) {
    let type = XXKeyframePropertyParser.getKeyframeType(keyframe);
    if (type === XXPropertyTypeEnum.ScaleType) {
      // 解析
      let value = XXKeyframePropertyParser.getKeyframeValue(keyframe);

      let scale = new XXScale(ValueTool.xxfExtractNumberValueFromStringValue(value['scaleX']),
        ValueTool.xxfExtractNumberValueFromStringValue(value['scaleY']),
        ValueTool.xxfExtractNumberValueFromStringValue(value['scaleZ']));

      if (isInstantAction) {
        return new XXActionSetScale(scale);
      } else {
        // TODO: easeFunction的使用
        return new XXActionScaleTo(scale, duration);
      }
    } else {
      return undefined;
    }
  }
}

export {XXScalePropertyParser};
