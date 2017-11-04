import {XXNodeGraphParser} from 'XXLoader/DataParser/XXNodeGraphParser.js';

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

  moveCurrentActorByOffset(state, offset) {
    let offsetX = offset && offset.x || 0;
    let offsetY = offset && offset.y || 0;

    if (state.currentSelectedActor) {
      XXNodeGraphParser.setPositionByOffset(state.currentSelectedActor, offsetX, offsetY, 0);
    }
  },
};

export default {
  state,
  getters,
  mutations,
};
