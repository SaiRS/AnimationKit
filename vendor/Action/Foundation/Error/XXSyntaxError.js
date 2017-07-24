// @flow

/**
 * 自定义的语法错误
 */
class XXSyntaxError extends Error {

  /**
   * [语法错误]
   * @param  {[string]} message [错误信息]
   */
  constructor(message: string) {
    super(message);
  }
}

export default XXSyntaxError;
