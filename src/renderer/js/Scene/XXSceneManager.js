import XXRectangleNodeActorJson from './XXRectangleNodeActor.json';
import XXRootNodeActorJson from './XXRootNodeActor.json';
import XXActionConfigJson from './XXActionConfig.json';

import {xxfGeneratorUUID} from 'XXTool/GeneratorTool.js';

import XXRectangleTestNodeActorJson from './XXRectangleTestNodeActor.json';
import XXActionTestConfigJson from './XXActionTestConfig.json';
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
    // FIXME: 暂时不覆盖actionId
    // let defaultActionId = xxfGeneratorUUID();
    return Object.assign(JSON.parse(JSON.stringify(XXActionConfigJson)), {
      // 'actionId': defaultActionId,
    });
  }

  /**
   * [createNewNode description]
   * @return {[type]} [description]
   */
  static createNewNode() {
    return Object.assign(JSON.parse(JSON.stringify(XXRootNodeActorJson)),
      {
        uuid: xxfGeneratorUUID(),
      });
  }

  /**
   * [createNewRectangleNode description]
   * @return {[type]} [description]
   */
  static createNewRectangleNode() {
    return Object.assign(JSON.parse(JSON.stringify(XXRectangleNodeActorJson)),
      {
        uuid: xxfGeneratorUUID(),
      });
  }


  /**
   * 测试
   */

  /**
   * 测试动画运行的rectangle
   * @return {[type]} [description]
   */
  static createTestNewRectangleNode() {
    return Object.assign(JSON.parse(JSON.stringify(XXRectangleTestNodeActorJson)),
      {
        uuid: xxfGeneratorUUID(),
      });
  }

  /**
   * 测试动画的配置
   * @return {[type]} [description]
   */
  static createNewActionTestConfig() {
    // 不覆盖actionId
    // let defaultActionId = xxfGeneratorUUID();
    return Object.assign(JSON.parse(JSON.stringify(XXActionTestConfigJson)), {
      // 'actionId': defaultActionId,
    });
  }
}

export {
  XXSceneManager,
};
