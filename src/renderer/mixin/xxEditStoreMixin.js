// @flow
import {mapState, mapGetters, mapMutations} from 'vuex';
/**
 * 方便组件获取edit store的mixin
 * @type {Object}
 */
const XXEditStoreMixin = {
  computed: {
    ...mapState({
      currentSelectedActor: function(state) {
        // 模块化的
        return state.xxEditStore.currentSelectedActor;
      },
    }),

    ...mapGetters({
      'isTheCurrentActorByUUID': 'isTheCurrentActorByUUID',
      'isTheCurrentActorByActor': 'isTheCurrentActorByActor',
    }),
  },

  methods: {
    ...mapMutations({
      'setCurrentSelectedActor': 'setCurrentSelectedActor',
      'addSelectedActor': 'addSelectedActor',
      'resetCurrentSelectedActor': 'resetCurrentSelectedActor',

      // 编辑属性
      'moveCurrentActorByOffset': 'moveCurrentActorByOffset',
    }),
  },
};

export default XXEditStoreMixin;
