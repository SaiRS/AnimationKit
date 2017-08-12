// @flow

import XXActor from './XXActor.js';

/**
 * 需要传递dom对象的动画宿主对象
 */
class XXNodeActor extends XXActor {

  /**
   * @inheritdoc
   * @param  {[string]} uuid 对象的唯一标识符
   */
  constructor(uuid: string) {
    super(uuid);
  }


  /** **************************
  * 获取对象状态的方法
  *****************************/

  /**
   * @override
   * 获得对象当前坐标
   * @return {XXPosition} 当前物体的坐标
   */
  position(): XXPosition {
    return null;
  }

  /**
   * @override
   * 获得对象当前的缩放信息
   * @return {XXScale}  当前对象的缩放信息
   */
  scale(): XXScale {
    return null;
  }

  /**
   * @override
   * 获得对象当前的旋转信息
   * @return {XXRotation}  对象当前的旋转信息
   */
  rotation(): XXRotation {
    return null;
  }

  /** *************************
   * 修改对象状态的方法
   ****************************/

  /**
   * @inherit
   * 修改当前物体的坐标
   * @param  {XXPosition} postion 坐标信息
   */
  moveTo(postion: XXPosition): void {
    // inherit by subclass
  }

  /**
   * @inherit
   * 修改当前对象的缩放
   * @param  {XXScale} scale 缩放信息
   */
  scaleTo(scale: XXScale): void {
    // inheirt by subclass
  }

  /**
   * @inherit
   * 修改当前对象的旋转角度
   * @param  {XXRotation} rotaion 旋转信息
   */
  rotateTo(rotaion: XXRotation): void {
    // inheirt by subclass
  }
}

export default XXNodeActor;
