// @flow

import XXObject from 'XXFoundation/XXObject.js';
import type {XXTimeFunctionInterface} from './XXTimeFunction.js';

/**
 * 用来表示ease in out circle的time function
 * http://easings.net/zh-cn
 */
class XXTimeFunctionEaseInOutCircle extends XXObject
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
    // 	if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		// return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
    // https://github.com/danro/jquery-easing/blob/master/jquery.easing.js
    let t = elapseTime / (duration / 2);
    if (t < 1) {
      return -change * (Math.sqrt(1 - t*t)) / 2 + begin;
    } else {
      t -= 2;
      return change * (Math.sqrt(1- t*t) + 1) / 2 + begin;
    }
  }
}

export default XXTimeFunctionEaseInOutCircle;
