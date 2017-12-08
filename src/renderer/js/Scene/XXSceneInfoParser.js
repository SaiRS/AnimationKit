/**
 * 场景解析
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
}


export {
  XXSceneInfoParser,
};
