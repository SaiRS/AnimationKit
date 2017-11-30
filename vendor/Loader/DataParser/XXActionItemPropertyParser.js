
/**
 * [XXActionItemPropertyParser description]
 */
class XXActionItemPropertyParser {
  /**
   * [getKeyframes description]
   * @param  {[type]} actionItemProperty [description]
   * @return {[type]}                    [description]
   */
  static getKeyframes(actionItemProperty) {
    return Reflect.get(actionItemProperty, 'keyframes');
  }

  /**
   * [addKeyframes description]
   * @param {[type]} actionItemProperty [description]
   * @param {[type]} keyframe           [description]
   */
  static addKeyframes(actionItemProperty, keyframe) {
    let keyframes = XXActionItemPropertyParser.getKeyframes(actionItemProperty);
    if (keyframes) {
      // TODO: 排序
      keyframes.push(keyframe);
    } else {
      actionItemProperty['keyframes'] = [keyframe];
    }
  }

  /**
   * [removeKeyframe description]
   * @param  {[type]} actionItemProperty [description]
   * @param  {[type]} index          [description]
   */
  static removeKeyframe(actionItemProperty, index) {
    let keyframes = XXActionItemPropertyParser.getKeyframes(actionItemProperty);
    if (keyframes && keyframes.length > index) {
      if (index >= 0) {
        keyframes.splice(index, 1);
      }
    }
  }

  // modify
}

export {
  XXActionItemPropertyParser,
};
