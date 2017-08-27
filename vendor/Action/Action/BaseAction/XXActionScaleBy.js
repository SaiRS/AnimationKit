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

      let deltaScaleX = scaleFactorFlow.scaleX() * process;
      let deltaScaleY = scaleFactorFlow.scaleY() * process;
      let deltaScaleZ = 0;

      if (this._startScale) {
        let startScaleFlow = this._startScale;
        // 不更新模型树
        this._target && this._target.scaleTo(
            new XXScale(startScaleFlow.scaleX() + deltaScaleX,
                        startScaleFlow.scaleY() + deltaScaleY,
                        startScaleFlow.scaleZ() + deltaScaleZ));
      }
    }
  }

  /**
   * @inheritdoc
   */
  className(): string {
    return 'XXActionScaleBy';
  }

  /**
   * @inheritdoc
   */
  doDoneTask() {
    // 同步模型树和呈现树
  }
}


export default XXActionScaleBy;
