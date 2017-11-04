import ActorConfig from './XXBaseActor.json';

import {xxfGeneratorUUID} from 'XXTool/GeneratorTool.js';
/**
 * 用于创建Actor的
 */
class XXBaseActorBuilder {

  /**
   * [buildInitActor description]
   * @return {[type]} [description]
   */
  static buildInitActor() {
    return {
      ...ActorConfig['initNodeGraph'],
      ...{
        uuid: xxfGeneratorUUID(),
      },
    };
  }
}

export default XXBaseActorBuilder;
