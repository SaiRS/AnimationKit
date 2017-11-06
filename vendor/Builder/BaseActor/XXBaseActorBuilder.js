// import ActorConfig from './XXBaseActor.json';

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
      'uuid': xxfGeneratorUUID(),
      'name': 'Actor',
      'className': 'TODO: Actor',
      'parentClassName': 'XXNodeDomActor',
      'properties': [
        {
          'type': 'Point',
          'value': {
            'x': '50%',
            'y': '50%',
            'z': '50%',
          },
          'name': 'anchorPoint',
        },
        {
          'type': 'Point',
          'value': {
            'x': '0px',
            'y': '0px',
            'z': '0px',
          },
          'name': 'position',
        },
        {
          'type': 'Size',
          'value': {
            'width': '55px',
            'height': '55px',
          },
          'name': 'size',
        },
        {
          'type': 'String',
          'value': 'auto',
          'name': 'overflow',
        },
        {
          'type': 'Scale',
          'value': {
            'scaleX': '1',
            'scaleY': '1',
            'lock': false,
          },
          'name': 'scale',
        },
        {
          'type': 'Rotation',
          'value': {
            'rotationX': '0deg',
            'rotationY': '0deg',
            'rotationZ': '0deg',
          },
          'name': 'rotation',
        },
        {
          'type': 'Check',
          'value': true,
          'name': 'visible',
        },
      ],
      'children': [],
      'actions': [],
    };
  }
}

export default XXBaseActorBuilder;
