// @flow

import XXObject from 'XXFoundation/XXObject.js';
import type {XXTimeFunctionInterface} from './XXTimeFunction.js';

/**
 * [xxfEaseInOutBack description]
 * @param  {number} t current time
 * @param  {number} b begin value
 * @param  {number} c change
 * @param  {number} d duration
 * @param  {number} s
 * @return {number}   [description]
 */
function xxfEaseInOutBack(t: number,
                          b: number,
                          c: number,
                          d: number,
                          s: number = 1.70158): number {
  if ((t/=d/2) < 1) {
    return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
  } else {
    return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
  }
}

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
   * @return {number} 当前elaspseTime的值
   */
  easeFunction(elapseTime: number,
                   begin: number,
                   change: number,
                   duration: number): number {
    // y = c*(t/=d)*t*((s+1)*t - s) + b;
    // https://github.com/danro/jquery-easing/blob/master/jquery.easing.js
    return xxfEaseInOutBack(elapseTime, begin, change, duration);
  }
}

export default XXTimeFunctionEaseInOutBack;
