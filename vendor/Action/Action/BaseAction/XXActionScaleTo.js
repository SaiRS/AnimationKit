// @flow
//
import XXActionInterval from '../XXActionInterval.js';

import XXScale from 'XXFoundation/Type/XXScale.js';

/**
 * 用来表示缩放的action
 */
class XXActionScaleTo extends XXActionInterval {
  /**
   * 目标位置
   * @type {XXScale}
   */
  _destinationScale: null | XXScale;

  _deltaScaleX: number;
  _deltaScaleY: number;
  _deltaScaleZ: number;

  /**
   * 构造函数
   * @param  {[type]} scale [description]
   * @param  {[type]} duration [description]
   */
  constructor(scale: XXScale, duration: number = 1000) {
    super(duration);

    this._destinationScale = scale;
  }

  /**
   * @inheritdoc
   */
  startWithTarget(actionTarget: XXActor) {
    super.startWithTarget(actionTarget);

    if (this._destinationScale) {
      let scaleFlow = this._destinationScale;

      this._deltaScaleX =
        scaleFlow.scaleX() - actionTarget.scale().scaleX();
      this._deltaScaleY =
        scaleFlow.scaleY() - actionTarget.scale().scaleY();
      this._deltaScaleZ = 0;
    }
  }

  /**
   * @inheritdoc
   */
  update(process: number) {
    // 更新target位置
    let deltaX = this._deltaScaleX * (process - 1);
    let deltaY = this._deltaScaleY * (process - 1);
    let deltaZ = this._deltaScaleZ * (process - 1);

    if (this._destinationScale && this._target) {
      let scaleFlow = this._destinationScale;
      let targetFlow = this._target;

      let x = scaleFlow.scaleX() + deltaX;
      let y = scaleFlow.scaleY() + deltaY;
      let z = scaleFlow.scaleZ() + deltaZ;

      targetFlow.scaleTo(
        new XXScale(x, y, z));
    }
  }

  /**
   * @inheritdoc
   */
  doDoneTask() {

  }
}

export default XXActionScaleTo;
