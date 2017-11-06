import {XXNodeGraphParser,
  XXPositionPropertyParser,
  XXSizePropertyParser,
  XXStringPropertyParser,
  XXScalePropertyParser,
  XXRotationPropertyParser,
  XXAnchorPropertyParser} from 'XXLoader/DataParser/XXDataParser.js';

const state = {
  currentSelectedActor: null,  // 数据对象
};


const getters = {
  isTheCurrentActorByUUID: (state) => {
    return (uuid) => {
      return (state.currentSelectedActor && state.currentSelectedActor.uuid &&
      uuid && state.currentSelectedActor.uuid === uuid) ? true : false;
    };
  },

  /**
   * 是否是当前选择的对象，actor为nodeGraph数据
   * @param  {[type]}  state [description]
   * @return {Boolean}       [description]
   */
  isTheCurrentActorByActor: (state) => (actor) => {
    return (state.currentSelectedActor && actor &&
        state.currentSelectedActor.uuid && actor.uuid && state.currentSelectedActor.uuid === actor.uuid) ? true : false;
  },

  /** ************************************
  * 读取部分
  ****************************************/

  currentActorPosition(state) {
    let positionProp = XXNodeGraphParser.getPositionProperty(state.currentSelectedActor);
    if (positionProp) {
      return XXPositionPropertyParser.getPosition(positionProp);
    } else {
      return null;
    }
  },

  currentActorSize(state) {
    let sizeProp = XXNodeGraphParser.getSizeProperty(state.currentSelectedActor);
    if (sizeProp) {
      return XXSizePropertyParser.getSize(sizeProp);
    } else {
      return null;
    }
  },

  currentActorOverflow(state) {
    let overflowProp = XXNodeGraphParser.getOverflowProperty(state.currentSelectedActor);
    if (overflowProp) {
      return XXStringPropertyParser.getString(overflowProp);
    } else {
      return null;
    }
  },

  currentActorScale(state) {
    let scale = XXNodeGraphParser.getScaleProperty(state.currentSelectedActor);
    if (scale) {
      return XXScalePropertyParser.getScale(scale);
    } else {
      return null;
    }
  },

  currentActorRotation(state) {
    let rotation = XXNodeGraphParser.getRotationProperty(state.currentSelectedActor);

    if (rotation) {
      return XXRotationPropertyParser.getRotation(rotation);
    } else {
      return null;
    }
  },

  currentActorAnchorPoint(state) {
    let anchor = XXNodeGraphParser.getAnchorProperty(state.currentSelectedActor);
    if (anchor) {
      return XXAnchorPropertyParser.getAnchor(anchor);
    } else {
      return null;
    }
  },
};

const mutations = {
  /**
   * 取消选择当前的元素
   * @param {[type]} state [description]
   */
  resetCurrentSelectedActor(state) {
    state.currentSelectedActor = null;
  },
  /**
   * 设置当前选中的元素
   * @param {[type]} state         [description]
   * @param {[type]} selectedActor nodeGraph数据
   */
  setCurrentSelectedActor(state, selectedActor) {
    state.currentSelectedActor = selectedActor;
  },

  /**
   * 增加选中的元素
   * @param {[type]} state [description]
   * @param {[type]} actor nodeGraph数据
   */
  addSelectedActor(state, actor) {

  },

  /** ************************************
  * 修改部分
  ****************************************/

  /**
   * [moveCurrentActorByOffset description]
   * @param {[type]} state  [description]
   * @param {[type]} offset [description]
   */
  moveCurrentActorByOffset(state, offset) {
    let offsetX = offset && offset.x || 0;
    let offsetY = offset && offset.y || 0;

    if (state.currentSelectedActor) {
      XXNodeGraphParser.setPositionByOffset(state.currentSelectedActor, offsetX, offsetY, 0);
    }
  },

  setCurrentSelectedActorPosition(state, position) {
    let x = position && position.x || 0;
    let y = position && position.y || 0;
    let z = 0;

    if (state.currentSelectedActor) {
      XXNodeGraphParser.setPosition(state.currentSelectedActor, x, y, z);
    }
  },

  modifyCurrentActorOverflowProp(state, newoverflow) {
    // 过滤
    let validoverflow = ['visible', 'hidden', 'scroll', 'auto'];
    if (validoverflow.includes(newoverflow) && state.currentSelectedActor) {
      XXNodeGraphParser.setOverflowProp(state.currentSelectedActor, newoverflow);
    }
  },

  setCurrentSelectedActorSize(state, size) {
    let width = size && size['width'] || '0px';
    let height = size && size['height'] || '0px';
    if (state.currentSelectedActor) {
      XXNodeGraphParser.setSize(state.currentSelectedActor, width, height);
    }
  },

  setCurrentSelectedActorScale(state, scale) {
    let scaleX = scale && scale['scaleX'] || 1;
    let scaleY = scale && scale['scaleY'] || 1;
    if (state.currentSelectedActor) {
      XXNodeGraphParser.setScale(state.currentSelectedActor, scaleX, scaleY, 1);
    }
  },
};

export default {
  state,
  getters,
  mutations,
};
