// @flow

import XXObject from 'XXFoundation/XXObject.js';
import type {XXTimeFunctionInterface} from './XXTimeFunction.js';

/**
 * [xxfEaseOutElastic description]
 * @param  {number} t current time
 * @param  {number} b begin value
 * @param  {number} c change
 * @param  {number} d duration
 * @return {number}   [description]
 */
function xxfEaseOutElastic(t: number,
                          b: number,
                          c: number,
                          d: number): number {
  let s=1.70158;
  let p=0;
  let a=c;

  if (t==0) {
    return b;
  }

  if ((t/=d)==1) {
    return b+c;
  }

  if (!p) {
    p=d*.3;
  }

  if (a < Math.abs(c)) {
    a=c;
    s=p/4;
  } else {
    s = p/(2*Math.PI) * Math.asin(c/a);
  }

  return a*Math.pow(2, -10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
}

/**
 * 用来表示ease out elastic的time function
 * http://easings.net/zh-cn
 */
class XXTimeFunctionEaseOutElastic extends XXObject
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
    // https://github.com/danro/jquery-easing/blob/master/jquery.easing.js
    return xxfEaseOutElastic(elapseTime, begin, change, duration);
  }
}

export default XXTimeFunctionEaseOutElastic;
