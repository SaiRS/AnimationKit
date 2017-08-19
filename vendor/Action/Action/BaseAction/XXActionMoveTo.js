// @flow
//
import XXActionInterval from '../XXActionInterval.js';
import XXPosition from 'XXFoundation/Type/XXPosition.js';
import xxvLog from 'XXTool/LogTool.js';

/**
 * 表示移动位置的动画
 */
class XXActionMoveTo extends XXActionInterval {

  /**
   * 目标位置
   * @type {XXPosition}
   */
  _destinationPos: null | XXPosition;

  _deltaX: number;
  _deltaY: number;
  _deltaZ: number;

  /**
   * 构造函数
   * @param  {[type]} position [description]
   * @param  {[type]} duration [description]
   */
  constructor(position: XXPosition, duration: number = 1000) {
    super(duration);

    this._destinationPos = position;
  }

  /**
   * @inheritdoc
   */
  startWithTarget(actionTarget: XXNodeActor) {
    super.startWithTarget(actionTarget);

    if (this._destinationPos) {
      let posFlow = this._destinationPos;

      this._deltaX = posFlow.posX() - actionTarget.position().posX();
      this._deltaY = posFlow.posY() - actionTarget.position().posY();
      this._deltaZ = 0;
    }
  }

  /**
   * @inheritdoc
   */
  update(process: number) {
    // 更新target位置
    let deltaX = this._deltaX * (process - 1);
    let deltaY = this._deltaY * (process - 1);
    let deltaZ = this._deltaZ * (process - 1);

    if (this._destinationPos && this._target) {
      let posFlow = this._destinationPos;
      let targetFlow = this._target;

      let x = posFlow.posX() + deltaX;
      let y = posFlow.posY() + deltaY;
      let z = posFlow.posZ() + deltaZ;

      targetFlow.moveTo(
        new XXPosition(x, y, z), false);
    } else {
      xxvLog.warn('[moveTo] update with invalid parameter');
    }
  }

  /**
   * @inheritdoc
   */
  doDoneTask() {

  }
}

export default XXActionMoveTo;
