// @flow

import XXObject from 'XXFoundation/XXObject.js';
import type {XXTimeFunctionInterface} from './XXTimeFunction.js';

/**
 * [xxfEaseInQuadratic description]
 * @param  {number} t current time
 * @param  {number} b begin value
 * @param  {number} c change
 * @param  {number} d duration
 * @return {number}   [description]
 */
function xxfEaseInQuadratic(t: number,
                            b: number,
                            c: number,
                            d: number): number {
  return c*(t/=d)*t + b;
}


/**
 * 用来表示ease in quadratic的time function
 * http://easings.net/zh-cn
 */
class XXTimeFunctionEaseInQuadratic extends XXObject
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
    // y = c*(t/=d)*t + b
    // https://github.com/danro/jquery-easing/blob/master/jquery.easing.js
    return xxfEaseInQuadratic(elapseTime, begin, change, duration);
  }
}

export default XXTimeFunctionEaseInQuadratic;
