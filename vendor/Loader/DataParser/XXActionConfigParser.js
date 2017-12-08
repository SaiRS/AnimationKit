// 解析action配置, 相见flow-typed/XXActionControlProperty.js

/**
 * [XXActionConfigParser description]
 */
class XXActionConfigParser {
  /**
   * [getActionId description]
   * @param  {[type]} actionConfigInfo [description]
   * @return {[type]}                  [description]
   */
  static getActionId(actionConfigInfo) {
    return actionConfigInfo && actionConfigInfo['actionId'];
  }

  /**
   * 名字
   * @param  {[type]} actionConfigInfo [description]
   * @return {[type]}                  [description]
   */
  static getActionName(actionConfigInfo) {
    return actionConfigInfo && actionConfigInfo['actionName'];
  }

  /**
   * [getActionDuration description]
   * @param  {[type]} actionConfigInfo [description]
   * @return {[type]}                  [description]
   */
  static getActionDuration(actionConfigInfo) {
    return actionConfigInfo && actionConfigInfo['actionDuration'];
  }

  /**
   * [getActionIterationCount description]
   * @param  {[type]} actionConfigInfo [description]
   * @return {[type]}                  [description]
   */
  static getActionIterationCount(actionConfigInfo) {
    return actionConfigInfo && actionConfigInfo['actionIterationCount'];
  }

  /**
   * [getActionDelay description]
   * @param  {[type]} actionConfigInfo [description]
   * @return {[type]}                  [description]
   */
  static getActionDelay(actionConfigInfo) {
    return actionConfigInfo && actionConfigInfo['actionDelay'];
  }

  /** *******************
  *  修改部分
  * *********************/

  /**
   * [setActionName description]
   * @param {[type]} actionConfigInfo [description]
   * @param {[type]} name             [description]
   */
  static setActionName(actionConfigInfo, name) {
    if (actionConfigInfo) {
      actionConfigInfo['actionName'] = name;
    }
  }

  /**
   * [setActionDuration description]
   * @param {[type]} actionConfigInfo [description]
   * @param {[type]} duration         [description]
   */
  static setActionDuration(actionConfigInfo, duration) {
    if (actionConfigInfo) {
      actionConfigInfo['actionDuration'] = duration;
    }
  }

  /**
   * [setActionIterationCount description]
   * @param {[type]} actionConfigInfo [description]
   * @param {[type]} iterationCount   [description]
   */
  static setActionIterationCount(actionConfigInfo, iterationCount) {
    if (actionConfigInfo) {
      actionConfigInfo['actionIterationCount'] = iterationCount;
    }
  }

  /**
   * [setActionDelay description]
   * @param {[type]} actionConfigInfo [description]
   * @param {[type]} delay            [description]
   */
  static setActionDelay(actionConfigInfo, delay) {
    if (actionConfigInfo) {
      actionConfigInfo['actionDelay'] = delay;
    }
  }
}

export {
  XXActionConfigParser,
};
