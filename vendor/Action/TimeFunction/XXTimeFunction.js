// @flow

/**
 * time function的接口
 */
export interface XXTimeFunctionInterface {
  /**
   * 需要实现的方法
   * @param {number} elapseTime 执行的时间
   * @param {number} begin 起始值
   * @param {number} change 终点值 - 起始值 = totalChanged
   * @param {number} duration 总共执行的时间
   * @return {number} 当前elaspseTime的值
   */
  easeFunction(elapseTime: number,
              begin: number,
              change: number,
              duration: number): number;
}
