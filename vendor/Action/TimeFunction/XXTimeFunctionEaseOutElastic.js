// @flow

import XXObject from 'XXFoundation/XXObject.js';
import type {XXTimeFunctionInterface} from './XXTimeFunction.js';

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
    /**
    var s=1.70158;var p=0;var a=c;
  		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
  		if (a < Math.abs(c)) { a=c; var s=p/4; }
  		else var s = p/(2*Math.PI) * Math.asin (c/a);
  		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) *
      Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
  		return a*Math.pow(2,-10*(t-=1)) *
      Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
     */
    // https://github.com/danro/jquery-easing/blob/master/jquery.easing.js
    let s = 1.70158;
    let p = 0;
    let a = change;

    if (0 == elapseTime) {
      return begin;
    }

    if (duration == elapseTime) {
      return begin + change;
    }

    let t = elapseTime / duration;

    if (!p) {
      p = duration * 0.3;
    }

    if (a < Math.abs(change)) {
      a = change;
      s = p /4;
    } else {
      s = p / (2*Math.PI) * Math.asin(change/a);
    }

    return a*Math.pow(2, -10*t) *
          Math.sin( (t*duration-s)*(2*Math.PI)/p ) + change + begin;
  }
}

export default XXTimeFunctionEaseOutElastic;
