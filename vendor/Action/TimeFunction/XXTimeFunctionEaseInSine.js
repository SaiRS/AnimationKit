// @flow

import XXObject from 'XXFoundation/XXObject.js';
import type {XXTimeFunctionInterface} from './XXTimeFunction.js';

/**
 * [xxfEaseInSine description]
 * @param  {number} t current time
 * @param  {number} b begin value
 * @param  {number} c change
 * @param  {number} d duration
 * @return {number}   [description]
 */
function xxfEaseInSine(t: number,
                       b: number,
                       c: number,
                       d: number): number {
  return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
}

/**
 * 用来表示ease in sine的time function
 * http://easings.net/zh-cn
 */
class XXTimeFunctionEaseInSine extends XXObject
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
    // y = c*( 1 - cos(t/d * (pi/2)) ) + b
    // https://github.com/danro/jquery-easing/blob/master/jquery.easing.js
    return xxfEaseInSine(elapseTime, begin, change, duration);
  }
}

export default XXTimeFunctionEaseInSine;
