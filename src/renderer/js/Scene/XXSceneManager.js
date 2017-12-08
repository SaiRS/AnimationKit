import XXRectangleNodeActorJson from './XXRectangleNodeActor.json';
import XXRootNodeActorJson from './XXRootNodeActor.json';
import XXActionConfigJson from './XXActionConfig.json';

import {xxfGeneratorUUID} from 'XXTool/GeneratorTool.js';
/**
 * 场景管理
 */
class XXSceneManager {
  /**
   * 创建一个新场景
   * @return {[type]} [description]
   */
  static createNewScene() {
    let defaultActionConfig = this.createNewActionConfig();
    let defaultRootNode = this.createNewNode();

    let newScene = {
      rootNode: defaultRootNode,
      actionConfig: {
        [defaultActionConfig['actionId']]: defaultActionConfig,
      },
    };

    return newScene;
  }

  /**
   * [createNewActionConfig description]
   * @return {[type]} [description]
   */
  static createNewActionConfig() {
    let defaultActionId = xxfGeneratorUUID();
    return Object.assign(XXActionConfigJson, {
      'actionId': defaultActionId,
    });
  }

  /**
   * [createNewNode description]
   * @return {[type]} [description]
   */
  static createNewNode() {
    return Object.assign(XXRootNodeActorJson,
      {
        uuid: xxfGeneratorUUID(),
      });
  }

  /**
   * [createNewRectangleNode description]
   * @return {[type]} [description]
   */
  static createNewRectangleNode() {
    return Object.assign(XXRectangleNodeActorJson,
      {
        uuid: xxfGeneratorUUID(),
      });
  }
}

export {
  XXSceneManager,
};
