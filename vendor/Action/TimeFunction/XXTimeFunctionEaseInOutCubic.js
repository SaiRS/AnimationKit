// @flow

import XXObject from 'XXFoundation/XXObject.js';
import type {XXTimeFunctionInterface} from './XXTimeFunction.js';


/**
 * [xxfEaseInOutCubic description]
 * @param  {number} t current time
 * @param  {number} b begin value
 * @param  {number} c change
 * @param  {number} d duration
 * @return {number}   [description]
 */
function xxfEaseInOutCubic(t: number, b: number, c: number, d: number): number {
  if ((t/=d/2) < 1) {
    return c/2*t*t*t + b;
  } else {
    return c/2*((t-=2)*t*t + 2) + b;
  }
}


/**
 * 用来表示ease in out cubic的time function
 * http://easings.net/zh-cn
 */
class XXTimeFunctionEaseInOutCubic extends XXObject
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
    //	if ((t/=d/2) < 1) return c/2*t*t*t + b;
		// return c/2*((t-=2)*t*t + 2) + b;
    // https://github.com/danro/jquery-easing/blob/master/jquery.easing.js
    return xxfEaseInOutCubic(elapseTime, begin, change, duration);
  }
}

export default XXTimeFunctionEaseInOutCubic;
