// @flow

import XXObject from 'XXFoundation/XXObject.js';
import type {XXTimeFunctionInterface} from './XXTimeFunction.js';


/**
 * [xxfEaseInOutExponential description]
 * @param  {number} t current time
 * @param  {number} b begin value
 * @param  {number} c change
 * @param  {number} d duration
 * @return {number}   [description]
 */
function xxfEaseInOutExponential(t: number,
                             b: number,
                             c: number,
                             d: number): number {
  if (t==0) {
    return b;
  }

  if (t==d) {
    return b+c;
  }

  if ((t/=d/2) < 1) {
    return c/2 * Math.pow(2, 10 * (t - 1)) + b;
  } else {
    return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
  }
}


/**
 * 用来表示ease in out exponential的time function
 * http://easings.net/zh-cn
 */
class XXTimeFunctionEaseInOutExponential extends XXObject
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
    //		if (t==0) return b;
		// if (t==d) return b+c;
		// if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		// return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
    // https://github.com/danro/jquery-easing/blob/master/jquery.easing.js
    return xxfEaseInOutExponential(elapseTime, begin, change, duration);
  }
}

export default XXTimeFunctionEaseInOutExponential;
