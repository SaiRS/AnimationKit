// @flow

import XXObject from 'XXFoundation/XXObject.js';

/**
 * 缓动动画基类
 */
class XXTimeFunction extends XXObject {
  _time: 0;
  _change: 0;
  _start: null;
  _duration: 0;

  /**
   * 构造函数
   */
  constructor() {
    super();
  }
}

export default XXTimeFunction;
