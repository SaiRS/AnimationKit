/**
 * Animationkit解析
 */
class XXAnimationKitParser {

  /** **************************
   * 读取部分
   ****************************/

  /**
   * 获取组件的动作信息
   * @param  {Object} animationKitJson animationkit的配置文件内容
   * @return {Array}                  [description]
   */
  static getActions(animationKitJson) {
    return animationKitJson && animationKitJson['actions'] || [];
  }

  /**
   * 获取组件的nodeGraph信息
   * @param  {Object} animationKitJson animationkit的配置文件内容
   * @return {Object}                  [description]
   */
  static getNodeGraph(animationKitJson) {
    return animationKitJson && animationKitJson['nodeGraph'] || {};
  }
}

export {
  XXAnimationKitParser,
};
