import {XXNodeGraphParser,
  XXPositionPropertyParser,
  XXSizePropertyParser,
  XXStringPropertyParser,
  XXScalePropertyParser,
  XXRotationPropertyParser,
  XXAnchorPropertyParser,
  XXBackgroundPropertyParser,
  XXBorderPropertyParser} from 'XXLoader/DataParser/XXDataParser.js';

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
      return XXSizePropertyParser.getSizeValue(sizeProp);
    } else {
      return null;
    }
  },

  currentActorOverflow(state) {
    let overflowProp = XXNodeGraphParser.getOverflowProperty(state.currentSelectedActor);
    if (overflowProp) {
      return XXStringPropertyParser.getStringValue(overflowProp);
    } else {
      return null;
    }
  },

  currentActorScale(state) {
    let scale = XXNodeGraphParser.getScaleProperty(state.currentSelectedActor);
    if (scale) {
      return XXScalePropertyParser.getScaleValue(scale);
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

  // background
  currentSelectedActorBackground(state) {
    let background = XXNodeGraphParser.getBackgroundProperty(state.currentSelectedActor);
    return background;
  },

  currentActorBackgroundColor(state, getters) {
    let background = getters.currentSelectedActorBackground;
    return XXBackgroundPropertyParser.getBackgroundColor(background);
  },

  currentActorBackgroundImage(state, getters) {
    let background = getters.currentSelectedActorBackground;
    return XXBackgroundPropertyParser.getBackgroundImage(background);
  },

  isCurrentActorBackgroundImageImageMode(state, getters) {
    let background = getters.currentSelectedActorBackground;
    return XXBackgroundPropertyParser.isBackgroundImageImageMode(background);
  },

  isCurrentActorBackgroundImageGradientMode(state, getters) {
    let background = getters.currentSelectedActorBackground;
    return XXBackgroundPropertyParser.isBackgroundImageGradientMode(background);
  },

  currentActorBackgroundGradientStartColor(state, getters) {
    let background = getters.currentSelectedActorBackground;
    return XXBackgroundPropertyParser.backgroundGradientStartColor(background);
  },

  currentActorBackgroundGradientEndColor(state, getters) {
    let background = getters.currentSelectedActorBackground;
    return XXBackgroundPropertyParser.backgroundGradientEndColor(background);
  },

  currentActorBackgroundGradientAngle(state, getters) {
    let background = getters.currentSelectedActorBackground;
    return XXBackgroundPropertyParser.backgroundGradientAngle(background);
  },

  // border
  currentSelectedActorBorder(state) {
    let border = XXNodeGraphParser.getBorderProperty(state.currentSelectedActor);
    return border;
  },

  currentActorBorderTopWidth(state, getters) {
    let border = getters.currentSelectedActorBorder;
    return XXBorderPropertyParser.getTopBorderWidth(border);
  },

  currentActorBorderBottomWidth(state, getters) {
    let border = getters.currentSelectedActorBorder;
    return XXBorderPropertyParser.getBottomBorderWidth(border);
  },

  currentActorBorderLeftWidth(state, getters) {
    let border = getters.currentSelectedActorBorder;
    return XXBorderPropertyParser.getLeftBorderWidth(border);
  },

  currentActorBorderRightWidth(state, getters) {
    let border = getters.currentSelectedActorBorder;
    return XXBorderPropertyParser.getRightBorderWidth(border);
  },


  currentActorBorderTopStyle(state, getters) {
    let border = getters.currentSelectedActorBorder;
    return XXBorderPropertyParser.getTopBorderStyle(border);
  },

  currentActorBorderBottomStyle(state, getters) {
    let border = getters.currentSelectedActorBorder;
    return XXBorderPropertyParser.getBottomBorderStyle(border);
  },

  currentActorBorderLeftStyle(state, getters) {
    let border = getters.currentSelectedActorBorder;
    return XXBorderPropertyParser.getLeftBorderStyle(border);
  },

  currentActorBorderRightStyle(state, getters) {
    let border = getters.currentSelectedActorBorder;
    return XXBorderPropertyParser.getRightBorderStyle(border);
  },

  currentActorBorderTopColor(state, getters) {
    let border = getters.currentSelectedActorBorder;
    return XXBorderPropertyParser.getTopBorderColor(border);
  },

  currentActorBorderBottomColor(state, getters) {
    let border = getters.currentSelectedActorBorder;
    return XXBorderPropertyParser.getBottomBorderColor(border);
  },

  currentActorBorderLeftColor(state, getters) {
    let border = getters.currentSelectedActorBorder;
    return XXBorderPropertyParser.getLeftBorderColor(border);
  },

  currentActorBorderRightColor(state, getters) {
    let border = getters.currentSelectedActorBorder;
    return XXBorderPropertyParser.getRightBorderColor(border);
  },

  currentActorBorderTopLeftRadius(state, getters) {
    let border = getters.currentSelectedActorBorder;
    return XXBorderPropertyParser.getTopLeftRadius(border);
  },

  currentActorBorderTopRightRadius(state, getters) {
    let border = getters.currentSelectedActorBorder;
    return XXBorderPropertyParser.getTopRightRadius(border);
  },

  currentActorBorderBottomLeftRadius(state, getters) {
    let border = getters.currentSelectedActorBorder;
    return XXBorderPropertyParser.getBottomLeftRadius(border);
  },

  currentActorBorderBottomRightRadius(state, getters) {
    let border = getters.currentSelectedActorBorder;
    return XXBorderPropertyParser.getBottomRightRadius(border);
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

  setCurrentSelectedActorRotation(state, rotation) {
    let rotationX = rotation && rotation['rotationX'] || '0deg';
    let rotationY = rotation && rotation['rotationY'] || '0deg';
    let rotationZ = rotation && rotation['rotationZ'] || '0deg';
    if (state.currentSelectedActor) {
      XXNodeGraphParser.setRotation(state.currentSelectedActor, rotationZ, rotationX, rotationY);
    }
  },

  setCurrentSelectedActorAnchor(state, anchor) {
    let anchorX = anchor && anchor['anchorX'] || '50%';
    let anchorY = anchor && anchor['anchorY'] || '50%';
    if (state.currentSelectedActor) {
      XXNodeGraphParser.setAnchor(state.currentSelectedActor, anchorX, anchorY);
    }
  },

  setCurrentSelectedActorBackgroundColor(state, backgroundcolor = 'rgba(0, 0, 0, 1)') {
    if (state.currentSelectedActor) {
      XXNodeGraphParser.setBackgroundColor(state.currentSelectedActor, backgroundcolor);
    }
  },

  setCurrentSelectedActorBackgroundGradientColor(state, gradient) {
    let angle = gradient && gradient['angle'] || '0deg';
    let start = gradient && gradient['start'] || 'rgba(255, 255, 255, 1)';
    let end = gradient && gradient['end'] || 'rgba(0, 0, 0, 1)';
    if (state.currentSelectedActor) {
      XXNodeGraphParser.setBackgroundLineGradient(state.currentSelectedActor, angle, start, end);
    }
  },

  deleteCurrentSelectedActorBackground(state) {
    if (state.currentSelectedActor) {
      XXNodeGraphParser.deleteBackground(state.currentSelectedActor);
    }
  },

  // border
  setCurrentSelectedActorBorderTopWidth(state, width = '1px') {
    if (state.currentSelectedActor) {
      XXNodeGraphParser.setBorderTopWidth(state.currentSelectedActor, width);
    }
  },

  setCurrentSelectedActorBorderBottomWidth(state, width = '1px') {
    if (state.currentSelectedActor) {
      XXNodeGraphParser.setBorderBottomWidth(state.currentSelectedActor, width);
    }
  },
  setCurrentSelectedActorBorderLeftWidth(state, width = '1px') {
    if (state.currentSelectedActor) {
      XXNodeGraphParser.setBorderLeftWidth(state.currentSelectedActor, width);
    }
  },
  setCurrentSelectedActorBorderRightWidth(state, width = '1px') {
    if (state.currentSelectedActor) {
      XXNodeGraphParser.setBorderRightWidth(state.currentSelectedActor, width);
    }
  },

  setCurrentSelectedActorBorderTopStyle(state, Style = 'solid') {
    if (state.currentSelectedActor) {
      XXNodeGraphParser.setBorderTopStyle(state.currentSelectedActor, Style);
    }
  },

  setCurrentSelectedActorBorderBottomStyle(state, Style = 'solid') {
    if (state.currentSelectedActor) {
      XXNodeGraphParser.setBorderBottomStyle(state.currentSelectedActor, Style);
    }
  },
  setCurrentSelectedActorBorderLeftStyle(state, Style = 'solid') {
    if (state.currentSelectedActor) {
      XXNodeGraphParser.setBorderLeftStyle(state.currentSelectedActor, Style);
    }
  },
  setCurrentSelectedActorBorderRightStyle(state, Style = 'solid') {
    if (state.currentSelectedActor) {
      XXNodeGraphParser.setBorderRightStyle(state.currentSelectedActor, Style);
    }
  },

  setCurrentSelectedActorBorderTopColor(state, Color = 'rgba(0, 0, 0, 1)') {
    if (state.currentSelectedActor) {
      XXNodeGraphParser.setBorderTopColor(state.currentSelectedActor, Color);
    }
  },

  setCurrentSelectedActorBorderBottomColor(state, Color = 'rgba(0, 0, 0, 1)') {
    if (state.currentSelectedActor) {
      XXNodeGraphParser.setBorderBottomColor(state.currentSelectedActor, Color);
    }
  },
  setCurrentSelectedActorBorderLeftColor(state, Color = 'rgba(0, 0, 0, 1)') {
    if (state.currentSelectedActor) {
      XXNodeGraphParser.setBorderLeftColor(state.currentSelectedActor, Color);
    }
  },
  setCurrentSelectedActorBorderRightColor(state, Color = 'rgba(0, 0, 0, 1)') {
    if (state.currentSelectedActor) {
      XXNodeGraphParser.setBorderRightColor(state.currentSelectedActor, Color);
    }
  },


  setCurrentSelectedActorBorderTopLeftRadius(state, Radius = '1px') {
    if (state.currentSelectedActor) {
      XXNodeGraphParser.setBorderTopLeftRadius(state.currentSelectedActor, Radius);
    }
  },

  setCurrentSelectedActorBorderTopRightRadius(state, Radius = '1px') {
    if (state.currentSelectedActor) {
      XXNodeGraphParser.setBorderTopRightRadius(state.currentSelectedActor, Radius);
    }
  },
  setCurrentSelectedActorBorderBottomLeftRadius(state, Radius = '1px') {
    if (state.currentSelectedActor) {
      XXNodeGraphParser.setBorderBottomLeftRadius(state.currentSelectedActor, Radius);
    }
  },

  setCurrentSelectedActorBorderBottomRightRadius(state, Radius = '1px') {
    if (state.currentSelectedActor) {
      XXNodeGraphParser.setBorderBottomRightRadius(state.currentSelectedActor, Radius);
    }
  },
};

export default {
  state,
  getters,
  mutations,
};
