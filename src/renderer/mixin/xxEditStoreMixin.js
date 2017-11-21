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
      'currentActorScaleMixin': 'currentActorScale',
      'currentActorRotationMixin': 'currentActorRotation',
      'currentActorAnchorPointMixin': 'currentActorAnchorPoint',

      'currentActorBackgroundColorMixin': 'currentActorBackgroundColor',
      'currentActorBackgroundImageMixin': 'currentActorBackgroundImage',
      'isCurrentActorBackgroundImageImageModeMixin': 'isCurrentActorBackgroundImageImageMode',
      'isCurrentActorBackgroundImageGradientModeMixin': 'isCurrentActorBackgroundImageGradientMode',

      'currentActorBackgroundGradientAngleMixin': 'currentActorBackgroundGradientAngle',
      'currentActorBackgroundGradientEndColorMixin': 'currentActorBackgroundGradientEndColor',
      'currentActorBackgroundGradientStartColorMixin': 'currentActorBackgroundGradientStartColor',

      'currentActorBorderTopWidthMixin': 'currentActorBorderTopWidth',
      'currentActorBorderBottomWidthMixin': 'currentActorBorderBottomWidth',
      'currentActorBorderLeftWidthMixin': 'currentActorBorderLeftWidth',
      'currentActorBorderRightWidthMixin': 'currentActorBorderRightWidth',

      'currentActorBorderTopStyleMixin': 'currentActorBorderTopStyle',
      'currentActorBorderBottomStyleMixin': 'currentActorBorderBottomStyle',
      'currentActorBorderLeftStyleMixin': 'currentActorBorderLeftStyle',
      'currentActorBorderRightStyleMixin': 'currentActorBorderRightStyle',

      'currentActorBorderTopColorMixin': 'currentActorBorderTopColor',
      'currentActorBorderBottomColorMixin': 'currentActorBorderBottomColor',
      'currentActorBorderLeftColorMixin': 'currentActorBorderLeftColor',
      'currentActorBorderRightColorMixin': 'currentActorBorderRightColor',
    }),
  },

  methods: {
    ...mapMutations({
      'setCurrentSelectedActorMixin': 'setCurrentSelectedActor',
      'addSelectedActorMixin': 'addSelectedActor',
      'resetCurrentSelectedActorMixin': 'resetCurrentSelectedActor',

      // 编辑属性
      'moveCurrentActorByOffsetMixin': 'moveCurrentActorByOffset',
      'setCurrentSelectedActorPositionMixin': 'setCurrentSelectedActorPosition',
      'modifyCurrentActorOverflowPropMixin': 'modifyCurrentActorOverflowProp',
      'setCurrentSelectedActorSizeMixin': 'setCurrentSelectedActorSize',
      'setCurrentSelectedActorScaleMixin': 'setCurrentSelectedActorScale',
      'setCurrentSelectedActorRotationMixin': 'setCurrentSelectedActorRotation',
      'setCurrentSelectedActorAnchorMixin': 'setCurrentSelectedActorAnchor',

      'setCurrentSelectedActorBackgroundColorMixin': 'setCurrentSelectedActorBackgroundColor',
      'deleteCurrentSelectedActorBackgroundMixin': 'deleteCurrentSelectedActorBackground',
      'setCurrentSelectedActorBackgroundGradientColorMixin': 'setCurrentSelectedActorBackgroundGradientColor',

      'setCurrentSelectedActorBorderTopWidthMixin': 'setCurrentSelectedActorBorderTopWidth',
      'setCurrentSelectedActorBorderBottomWidthMixin': 'setCurrentSelectedActorBorderBottomWidth',
      'setCurrentSelectedActorBorderLeftWidthMixin': 'setCurrentSelectedActorBorderLeftWidth',
      'setCurrentSelectedActorBorderRightWidthMixin': 'setCurrentSelectedActorBorderRightWidth',

      'setCurrentSelectedActorBorderTopStyleMixin': 'setCurrentSelectedActorBorderTopStyle',
      'setCurrentSelectedActorBorderBottomStyleMixin': 'setCurrentSelectedActorBorderBottomStyle',
      'setCurrentSelectedActorBorderLeftStyleMixin': 'setCurrentSelectedActorBorderLeftStyle',
      'setCurrentSelectedActorBorderRightStyleMixin': 'setCurrentSelectedActorBorderRightStyle',

      'setCurrentSelectedActorBorderTopColorMixin': 'setCurrentSelectedActorBorderTopColor',
      'setCurrentSelectedActorBorderBottomColorMixin': 'setCurrentSelectedActorBorderBottomColor',
      'setCurrentSelectedActorBorderLeftColorMixin': 'setCurrentSelectedActorBorderLeftColor',
      'setCurrentSelectedActorBorderRightColorMixin': 'setCurrentSelectedActorBorderRightColor',
    }),
  },
};

export default XXEditStoreMixin;
