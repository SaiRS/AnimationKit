// @flow

import XXActionInterval from '../XXActionInterval.js';
import XXRotation from 'XXFoundation/Type/XXRotation.js';

/**
 * 旋转到某个角度的action
 */
class XXActionRotationTo extends XXActionInterval {

  _destinationRotation: null | XXRotation;
  _deltaRotate: number;

  /**
   * [constructor description]
   * @param  {[type]} rotation [description]
   * @param  {[type]} duration [description]
   */
  constructor(rotation: XXRotation, duration: number = 1000) {
    super(duration);

    this._destinationRotation = rotation;
  }

  /**
   * @inheritdoc
   */
  startWithTarget(actionTarget: XXActor) {
    super.startWithTarget(actionTarget);

    if (this._destinationRotation) {
      // NOTE: 忽略旋转轴信息
      this._deltaRotate =
        this._destinationRotation.getRotateAngle()
        - actionTarget.getRotateAngle().getRotateAngle();
    }
  }

  /**
   * @inheritdoc
   */
  update(process: number) {
    // 更新target位置
    let deltaRotate: number = this._deltaRotate * (process - 1);

    if (this._destinationRotation && this._target) {
      let rotationFlow = this._destinationRotation;
      let targetFlow = this._target;

      let rotation: number = rotationFlow.getRotateAngle() + deltaRotate;

      // NOTE: 忽略旋转轴信息
      targetFlow.rotateTo(new XXRotation(rotation), false);
    }
  }
}

export default XXActionRotationTo;
