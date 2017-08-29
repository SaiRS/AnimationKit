// @flow

import XXObject from 'XXFoundation/XXObject.js';
import type {XXTimeFunctionInterface} from './XXTimeFunction.js';
import {xxfEaseOutBounce} from './XXTimeFunctionEaseOutBounce.js';
/**
 * 用来表示ease in bounce的time function
 * http://easings.net/zh-cn
 */
class XXTimeFunctionEaseInBounce extends XXObject
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
                   duration: number,
                   ): number {
    // y = c*(t/=d)*t*((s+1)*t - s) + b;
    // https://github.com/danro/jquery-easing/blob/master/jquery.easing.js
    return change -
      xxfEaseOutBounce(duration-elapseTime, 0, change, duration) + begin;
  }
}

export default XXTimeFunctionEaseInBounce;
