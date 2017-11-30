import {initNodeGraph as InitNodeGraph} from './XXBaseActor.json';

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
    return Object.assign(
      JSON.parse(JSON.stringify(InitNodeGraph)), {
        'uuid': xxfGeneratorUUID(),
      });
  }
}

export default XXBaseActorBuilder;
