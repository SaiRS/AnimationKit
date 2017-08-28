// @flow

import XXObject from 'XXFoundation/XXObject.js';
import type {XXTimeFunctionInterface} from './XXTimeFunction.js';

/**
 * 用来表示ease out exponential的time function
 * http://easings.net/zh-cn
 */
class XXTimeFunctionEaseOutExponential extends XXObject
    implements XXTimeFunctionInterface {

  /**
   * @implements {XXTimeFunctionInterface}
   * @param {number} elapseTime 执行的时间
   * @param {number} begin 起始值
   * @param {number} change 终点值 - 起始值 = totalChanged
   * @param {number} duration 总共执行的时间
   * @return {number} 当前elaspseTime的值
   */
  easeFunction(elapseTime: number,
                   begin: number,
                   change: number,
                   duration: number): number {
    //	(t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
    // https://github.com/danro/jquery-easing/blob/master/jquery.easing.js
    if (duration == elapseTime) {
      return begin + change;
    } else {
      return change * (-Math.pow(2, 10 * (elapseTime / duration)) + 1) + begin;
    }
  }
}

export default XXTimeFunctionEaseOutExponential;
