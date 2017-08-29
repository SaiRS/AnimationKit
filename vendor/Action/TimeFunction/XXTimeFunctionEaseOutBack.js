// @flow

import XXObject from 'XXFoundation/XXObject.js';
import type {XXTimeFunctionInterface} from './XXTimeFunction.js';

/**
 * [xxfEaseOutBack description]
 * @param  {number} t current time
 * @param  {number} b begin value
 * @param  {number} c change
 * @param  {number} d duration
 * @param  {number} s
 * @return {number}   [description]
 */
function xxfEaseOutBack(t: number,
                        b: number,
                        c: number,
                        d: number,
                        s: number = 1.70158): number {
  return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
}

/**
 * 用来表示ease out back的time function
 * http://easings.net/zh-cn
 */
class XXTimeFunctionEaseOutBack extends XXObject
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
    // y = c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
    // https://github.com/danro/jquery-easing/blob/master/jquery.easing.js
    return xxfEaseOutBack(elapseTime, begin, change, duration);
  }
}

export default XXTimeFunctionEaseOutBack;
