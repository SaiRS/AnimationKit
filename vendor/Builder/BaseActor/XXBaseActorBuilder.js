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
          'type': 'point',
          'value': {
            'x': '50%',
            'y': '50%',
            'z': '50%',
          },
          'name': 'anchorPoint',
        },
        {
          'type': 'point',
          'value': {
            'x': '0px',
            'y': '0px',
            'z': '0px',
          },
          'name': 'position',
        },
        {
          'type': 'size',
          'value': {
            'width': '55px',
            'height': '55px',
          },
          'name': 'size',
        },
        {
          'type': 'string',
          'value': 'auto',
          'name': 'overflow',
        },
        {
          'type': 'scale',
          'value': {
            'scaleX': '1',
            'scaleY': '1',
            'lock': false,
          },
          'name': 'scale',
        },
        {
          'type': 'rotation',
          'value': {
            'rotationX': '0deg',
            'rotationY': '0deg',
            'rotationZ': '0deg',
          },
          'name': 'rotation',
        },
        {
          'type': 'boolean',
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
