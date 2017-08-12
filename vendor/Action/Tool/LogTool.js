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
  info(...args) {
    console.log(args);
  }

  /**
   * 输出warn信息
   * @param  {[type]} args 可变参数
   */
  warn(...args) {
    console.warn(args);
  }

  /**
   * 输出debug信息
   * @param  {[type]} args 可变参数
   */
  debug(...args) {
    console.debug(args);
  }

  /**
   * 输出error信息
   * @param  {[type]} args 可变参数
   */
  error(...args) {
    console.error(args);
  }
}

let xxvLog = new XXLog();
export default xxvLog;
