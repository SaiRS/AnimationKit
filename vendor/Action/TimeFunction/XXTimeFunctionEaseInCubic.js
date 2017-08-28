// @flow

import XXObject from 'XXFoundation/XXObject.js';
import type {XXTimeFunctionInterface} from './XXTimeFunction.js';

/**
 * 用来表示ease in cubic的time function
 * http://easings.net/zh-cn
 */
class XXTimeFunctionEaseInCubic extends XXObject
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
    // y = c*(t/=d)*t*t + b
    // https://github.com/danro/jquery-easing/blob/master/jquery.easing.js
    let t = elapseTime / duration;
    return change * t * t * t + begin;
  }
}

export default XXTimeFunctionEaseInCubic;
