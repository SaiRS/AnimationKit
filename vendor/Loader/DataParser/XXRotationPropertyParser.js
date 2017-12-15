import {XXPropertyTypeEnum} from '../Constant/XXPropertyTypeConstant.js';
import XXPropertyParser from './XXPropertyParser.js';

import * as ValueTool from 'XXTool/ValueTool.js';

import {XXKeyframePropertyParser} from './XXKeyFrameParser.js';
import XXActionRotationTo from 'XXActionAlias/Action/BaseAction/XXActionRotateTo.js';
import XXActionSetRotation from 'XXActionAlias/Action/BaseAction/XXActionSetRotation.js';
import XXRotation from 'XXFoundation/Type/XXRotation.js';
/**
 * 旋转属性解析
 */
class XXRotationPropertyParser extends XXPropertyParser {
  /**
   * 获取缩放信息
   * @param  {Object} property [description]
   * @return {Object}           {scaleX: 0, scaleY:0, scaleZ: 0}
   */
  static getRotation(property) {
    if (XXPropertyParser.getPropertyType(property) ==
       XXPropertyTypeEnum.RotationType) {
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
    if (XXPropertyParser.getPropertyType(property) == XXPropertyTypeEnum.RotationType) {
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
    if (type === XXPropertyTypeEnum.RotationType) {
      // 解析
      let value = XXKeyframePropertyParser.getKeyframeValue(keyframe);

      // TODO: 关于rotation的构造，需要认真的确定一下
      let rotation = new XXRotation(ValueTool.xxfExtractNumberValueFromStringValue(value['rotationZ']));

      if (isInstantAction) {
        return new XXActionSetRotation(rotation);
      } else {
        // TODO: easeFunction的使用
        return new XXActionRotationTo(rotation, duration);
      }
    } else {
      return undefined;
    }
  }
}

export {XXRotationPropertyParser};
