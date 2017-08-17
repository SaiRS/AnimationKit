// @flow

import XXObject from '../XXObject.js';
import XXVector, {xxcZAXIS} from './XXVector.js';

/**
 * [_angle description]
 * @class
 */
class XXRotation extends XXObject {

  // 旋转角度，单位deg
  _angle: number;
  // 旋转轴, 单位矢量
  _axis: XXVector;

  /**
   * 旋转角度的构造函数
   * @param  {number} angle 旋转角度，单位deg
   * @param  {XXVector} axis  旋转轴
   * @param  {Object} option  其他的控制参数
   */
  constructor(angle: number,
              axis: XXVector = xxcZAXIS,
              option: Object = {}) {
    super();

    this._angle = angle;
    this._axis = axis.normalize();
  }

  /**
   * 获得旋转角度（单位deg)
   * @return {number} 旋转角度
   */
  getRotateAngle(): number {
    return this._angle;
  }
}

export default XXRotation;
