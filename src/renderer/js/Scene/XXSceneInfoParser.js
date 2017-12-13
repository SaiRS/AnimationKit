/**
 * 场景解析
 */
import {XXActionConfigParser} from 'XXVendor/Loader/DataParser/XXActionConfigParser.js';

/**
 * [XXSceneInfoParser description]
 */
class XXSceneInfoParser {

  /**
   * [getSceneRootNode description]
   * @param  {[type]} sceneInfo [description]
   * @return {[type]}           [description]
   */
  static getSceneRootNode(sceneInfo) {
    return sceneInfo && sceneInfo['rootNode'];
  }

  /**
   * [getActionConfig description]
   * @param  {[type]} sceneInfo [description]
   * @return {[type]}           [description]
   */
  static getActionConfigs(sceneInfo) {
    return sceneInfo && sceneInfo['actionConfig'];
  }

  /**
   * [addActionConfig description]
   * @param {[type]} sceneInfo    [description]
   * @param {[type]} actionConfig [description]
   */
  static addActionConfig(sceneInfo, actionConfig) {
    let actionConfigId = XXActionConfigParser.getActionId(actionConfig);
    if (sceneInfo) {
      sceneInfo['actionConfig'][actionConfigId] = actionConfig;
    }
  }
}


export {
  XXSceneInfoParser,
};
