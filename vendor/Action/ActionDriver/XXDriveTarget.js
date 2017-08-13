// @flow
//
import XXObject from 'XXFoundation/XXObject.js';

/**
 * 驱动程序驱动的对象
 * 本来应该是接口形式出现的，但因为js中没有接口, 暂时按照类来做
 * @class
 * @virtual
 */
class XXDriveTarget extends XXObject {
  /**
   * 构造函数
   */
  constructor() {
    super();
  }

  /**
   * @override
   * 驱动对象的所执行的具体操作，需要重写
   * @param  {float} deltaTime 距离上次回调的时间增量
   */
  step(deltaTime: float) {
    // override by subclass
  }
}

export default XXDriveTarget;
