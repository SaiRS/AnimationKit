// @flow
//
import {isDevelopMode} from 'WebpackToolConfig/webpack.environment.js';
/**
 * log工具，用来调试使用
 * @type {XXLog}
 */
class XXLog {

  /**
   * 构造函数
   */
  constructor() {

  }

  /**
   * 输出info信息
   * @param  {[type]} args 可变参数
   */
  info(...args: Array<mixed>) {
    if (isDevelopMode()) {
      console.log(args);
    }
  }

  /**
   * 输出warn信息
   * @param  {[type]} args 可变参数
   */
  warn(...args: Array<mixed>) {
    console.warn(args);
  }

  /**
   * 输出debug信息
   * @param  {[type]} args 可变参数
   */
  debug(...args: Array<mixed>) {
    if (isDevelopMode()) {
      console.debug(args);
    }
  }

  /**
   * 输出error信息
   * @param  {[type]} args 可变参数
   */
  error(...args: Array<mixed>) {
    console.error(args);
  }
}

let xxvLog = new XXLog();
export default xxvLog;
