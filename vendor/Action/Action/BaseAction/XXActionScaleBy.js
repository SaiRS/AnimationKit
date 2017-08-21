// @flow
//
import XXActionInterval from '../XXActionInterval.js';
import XXScale from 'XXFoundation/Type/XXScale.js';

/**
 * 针对当前状态进行缩放的action
 */
class XXActionScaleBy extends XXActionInterval {

  _scaleFactor: XXScale | null;
  _startScale: XXScale | null;

  /**
   * 构造函数
   * @param  {XXScale} scaleFactor 缩放因子
   * @param  {number} duration    动画时长
   */
  constructor(scaleFactor: XXScale, duration: number = 1000) {
    super(duration);

    this._scaleFactor = scaleFactor;
  }

  /**
   * @inheritdoc
   */
  startWithTarget(actionTarget: XXActor) {
    super.startWithTarget(actionTarget);

    this._startScale = actionTarget.scale();
  }

  /**
   * @inheritdoc
   */
  update(process: number) {
    if (this._scaleFactor) {
      let scaleFactorFlow = this._scaleFactor;

      let scaleXFactor = (scaleFactorFlow.scaleX() - 1) * process + 1;
      let scaleYFactor = (scaleFactorFlow.scaleY() - 1) * process + 1;
      let scaleZFactor = (scaleFactorFlow.scaleZ() - 1) * process + 1;

      // 不更新模型树
      this._target && this._target.scaleTo(
          new XXScale(scaleXFactor,
                      scaleYFactor,
                      scaleZFactor), false);
    }
  }
}


export default XXActionScaleBy;
