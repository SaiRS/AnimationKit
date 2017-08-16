// @flow

import XXActionInterval from '../XXActionInterval.js';
import XXRotation from 'XXFoundation/Type/XXRotation.js';

/**
 * 旋转到某个角度的action
 */
class XXActionRotationTo extends XXActionInterval {

  _destinationRotation: null;
  _deltaRotate = 0;

  /**
   * [constructor description]
   * @param  {[type]} rotation [description]
   * @param  {[type]} duration [description]
   */
  constructor(rotation: XXRotation, duration: number = 1000) {
    super(duration);

    this.__destinationRotation = rotation;
  }

  /**
   * @inheritdoc
   */
  startWithTarget(actionTarget: XXActor) {
    super.startWithTarget(actionTarget);

    // NOTE: 忽略旋转轴信息
    this._deltaRotate =
      this._destinationRotation.getRotateAngle()
      - actionTarget.getRotateAngle().getRotateAngle();
  }

  /**
   * @inheritdoc
   */
  update(process: float) {
    // 更新target位置
    let deltaRotate = this._deltaRotate * (process - 1);

    let rotation = this._destinationRotation.getRotateAngle() + deltaRotate;

    // NOTE: 忽略旋转轴信息
    this._target.rotateTo(
      new XXRotation(rotation, new XXRotation(0, 0, 1)));
  }
}

export default XXActionRotationTo;
