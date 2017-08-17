// @flow

import XXObject from 'XXFoundation/XXObject.js';

/**
 * 缓动动画基类
 */
class XXTimeFunction extends XXObject {
  _time: number;
  _change: number;
  _start: mixed;
  _duration: number;

  /**
   * 构造函数
   */
  constructor() {
    super();
  }
}

export default XXTimeFunction;
