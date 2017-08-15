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
  _destinationScale: null;

  _deltaScaleX: 0;
  _deltaScaleY: 0;
  _deltaScaleZ: 0;

  /**
   * 构造函数
   * @param  {[type]} scale [description]
   * @param  {[type]} duration [description]
   */
  constructor(scale: XXScale, duration = 1000) {
    super(duration);

    this._destinationScale = scale;
  }

  /**
   * @inheritdoc
   */
  startWithTarget(actionTarget) {
    super.startWithTarget(actionTarget);

    this._deltaScaleX =
      this._destinationScale.scaleX() - actionTarget.scale().scaleX();
    this._deltaScaleY =
      this._destinationScale.scaleY() - actionTarget.scale().scaleY();
    this._deltaScaleZ = 0;
  }

  /**
   * @inheritdoc
   */
  update(process: float) {
    // 更新target位置
    let deltaX = this._deltaScaleX * (process - 1);
    let deltaY = this._deltaScaleY * (process - 1);
    let deltaZ = this._deltaScaleZ * (process - 1);

    let x = this._destinationScale.scaleX() + deltaX;
    let y = this._destinationScale.scaleY() + deltaY;
    let z = this._destinationScale.scaleZ() + deltaZ;

    this._target.scaleTo(
      new XXScale(x, y, z));
  }

  /**
   * @inheritdoc
   */
  doDoneTask() {

  }
}

export default XXActionScaleTo;
