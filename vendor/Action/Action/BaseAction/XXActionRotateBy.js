// @flow
//
import XXActionInterval from '../XXActionInterval.js';
import XXRotation from 'XXFoundation/Type/XXRotation.js';

/**
 * 相对于当前
 */
class XXActionRotateBy extends XXActionInterval {

  _offsetRotation: XXRotation | null;
  _startRotation: XXRotation | null;
  /**
   * 构造函数
   * @param  {offsetRotation} offsetRotation 相对于当前的旋转角度
   * @param  {number} duration       [description]
   */
  constructor(offsetRotation: XXRotation, duration: number = 1000) {
    super(duration);

    this._offsetRotation = offsetRotation;
  }

  /**
   * @inheritdoc
   */
  startWithTarget(actor: XXActor) {
    super.startWithTarget(actor);

    this._startRotation = actor.rotation();
  }

  /**
   * @inheritdoc
   */
  update(process: number) {
    if (this._offsetRotation) {
      let deltaRotate = this._offsetRotation.getRotateAngle() * process;

      if (this._startRotation) {
        this._target && this._target.rotateTo(
          new XXRotation(this._startRotation.getRotateAngle() + deltaRotate));
      }
    }
  }

  /**
   * @inheritdoc
   */
  className(): string {
    return 'XXActionRoteBy';
  }

  /**
   * @inheritdoc
   */
  doDoneTask() {
    // 同步模型树和呈现树
  }
}

export default XXActionRotateBy;