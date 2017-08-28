// @flow

import XXObject from 'XXFoundation/XXObject.js';
import type {XXTimeFunctionInterface} from './XXTimeFunction.js';


/**
 * [xxfEaseOutBounce description]
 * @param  {number} t [description]
 * @param  {number} b [description]
 * @param  {number} c [description]
 * @param  {number} d [description]
 * @return {number}   [description]
 */
function xxfEaseOutBounce(t: number, b: number, c: number, d: number): number {
  if ((t/=d) < (1/2.75)) {
    return c*(7.5625*t*t) + b;
  } else if (t < (2/2.75)) {
    return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
  } else if (t < (2.5/2.75)) {
    return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
  } else {
    return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
  }
}

/**
 * 用来表示ease in bounce的time function
 * http://easings.net/zh-cn
 */
class XXTimeFunctionEaseOutBounce extends XXObject
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
                   duration: number): number {
    // y = c*(t/=d)*t*((s+1)*t - s) + b;
    // https://github.com/danro/jquery-easing/blob/master/jquery.easing.js
    return xxfEaseOutBounce(elapseTime, begin, change, duration);
  }
}

export default XXTimeFunctionEaseOutBounce;
export {xxfEaseOutBounce};
