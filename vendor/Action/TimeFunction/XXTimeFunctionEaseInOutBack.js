// @flow

import XXObject from 'XXFoundation/XXObject.js';
import type {XXTimeFunctionInterface} from './XXTimeFunction.js';

/**
 * 用来表示ease in out back的time function
 * http://easings.net/zh-cn
 */
class XXTimeFunctionEaseInOutBack extends XXObject
    implements XXTimeFunctionInterface {

  /**
   * @implements {XXTimeFunctionInterface}
   * @param {number} elapseTime 执行的时间
   * @param {number} begin 起始值
   * @param {number} change 终点值 - 起始值 = totalChanged
   * @param {number} duration 总共执行的时间
   * @param {number} s
   * @return {number} 当前elaspseTime的值
   */
  easeFunction(elapseTime: number,
                   begin: number,
                   change: number,
                   duration: number,
                   s: number = 1.70158): number {
    // y = c*(t/=d)*t*((s+1)*t - s) + b;
    // https://github.com/danro/jquery-easing/blob/master/jquery.easing.js
    let t = elapseTime / (duration/2);
    s *= 1.525;
    if (t < 1) {
      return change / 2 * (t*t*((s+1)*t - s)) + begin;
    } else {
      return change /2 * ((t-=2)*t*((s+1)*t + s) + 2) + begin;
    }
  }
}

export default XXTimeFunctionEaseInOutBack;
