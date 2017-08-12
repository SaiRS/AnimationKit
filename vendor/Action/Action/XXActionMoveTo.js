// @flow
//
import XXActionInterval from './XXActionInterval.js';
import XXPosition from '../Foundation/Type/XXPosition.js';

/**
 * 表示移动位置的动画
 */
class XXActionMoveTo extends XXActionInterval {

  /**
   * 目标位置
   * @type {XXPosition}
   */
  _destinationPos: null;

  _deltaX: 0;
  _deltaY: 0;
  _deltaZ: 0;

  /**
   * 构造函数
   * @param  {[type]} position [description]
   */
  constructor(position: XXPosition) {
    super();

    this._destinationPos = position;
  }

  /**
   * @inheritdoc
   */
  startWithTarget(actionTarget) {
    super(actionTarget);

    this._deltaX = this._destinationPos.posX() - actionTarget.position().posX();
    this._deltaY = this._destinationPos.posY() - actionTarget.position().posY();
    this._deltaZ = 0;
  }

  /**
   * @inheritdoc
   */
  update(process: float) {
    // 更新target位置
    let deltaX = this._deltaX * process;
    let deltaY = this._deltaY * process;
    let deltaZ = this._deltaZ * process;

    this._actionTarget.setPosition();
  }
}

export default XXActionMoveTo;