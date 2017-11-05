// @flow
import {mapState, mapGetters, mapMutations} from 'vuex';
/**
 * 方便组件获取edit store的mixin
 * @type {Object}
 */
const XXEditStoreMixin = {
  computed: {
    ...mapState({
      currentSelectedActorMixin: function(state) {
        // 模块化的
        return state.xxEditStore.currentSelectedActor;
      },
    }),

    ...mapGetters({
      'isTheCurrentActorByUUIDMixin': 'isTheCurrentActorByUUID',
      'isTheCurrentActorByActorMixin': 'isTheCurrentActorByActor',

      'currentActorPositionMixin': 'currentActorPosition',
      'currentActorSizeMixin': 'currentActorSize',
    }),
  },

  methods: {
    ...mapMutations({
      'setCurrentSelectedActorMixin': 'setCurrentSelectedActor',
      'addSelectedActorMixin': 'addSelectedActor',
      'resetCurrentSelectedActorMixin': 'resetCurrentSelectedActor',

      // 编辑属性
      'moveCurrentActorByOffsetMixin': 'moveCurrentActorByOffset',
    }),
  },
};

export default XXEditStoreMixin;
