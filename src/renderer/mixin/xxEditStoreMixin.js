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

      // 属性
      'currentActorPositionMixin': 'currentActorPosition',
      'currentActorSizeMixin': 'currentActorSize',
      'currentActorOverflowMixin': 'currentActorOverflow',
    }),
  },

  methods: {
    ...mapMutations({
      'setCurrentSelectedActorMixin': 'setCurrentSelectedActor',
      'addSelectedActorMixin': 'addSelectedActor',
      'resetCurrentSelectedActorMixin': 'resetCurrentSelectedActor',

      // 编辑属性
      'moveCurrentActorByOffsetMixin': 'moveCurrentActorByOffset',
      'modifyCurrentActorOverflowPropMixin': 'modifyCurrentActorOverflowProp',
    }),
  },
};

export default XXEditStoreMixin;
