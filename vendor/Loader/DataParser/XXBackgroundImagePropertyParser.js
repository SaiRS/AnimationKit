// @flow

/**
 *
 */
class XXBackgroundImagePropertyParser {

  /**
   * [getBackgroundImageType description]
   * @param  {[type]} backgroundImageProperty [description]
   * @return {[type]}                         [description]
   */
  static getBackgroundImageType(backgroundImageProperty) {
    return backgroundImageProperty && backgroundImageProperty['type'];
  }

  /**
   * [getBackgroundImageValue description]
   * @param  {[type]} backgroundImageProperty [description]
   * @return {[type]}                         [description]
   */
  static getBackgroundImageValue(backgroundImageProperty) {
    return backgroundImageProperty && backgroundImageProperty['value'];
  }

  /**
   * [isBackgroundImageImageMode description]
   * @param  {[type]}  backgroundImageProperty [description]
   * @return {Boolean}                         [description]
   */
  static isBackgroundImageImageMode(backgroundImageProperty) {
    let backgroundImageType = XXBackgroundImagePropertyParser.getBackgroundImageType(backgroundImageProperty);
    if (backgroundImageType == 'image') {
      return true;
    } else {
      return false;
    }
  }

  /**
   * [isBackgroundImageGradientMode description]
   * @param  {[type]}  backgroundImageProperty [description]
   * @return {Boolean}                         [description]
   */
  static isBackgroundImageGradientMode(backgroundImageProperty) {
    let backgroundImageType = XXBackgroundImagePropertyParser.getBackgroundImageType(backgroundImageProperty);
    if (backgroundImageType == 'linear-gradient') {
      return true;
    } else {
      return false;
    }
  }

  /**
   * [backgroundGradientStartColor description]
   * @param  {[type]} backgroundImageProperty [description]
   * @return {[type]}                         [description]
   */
  static backgroundGradientStartColor(backgroundImageProperty) {
    if (XXBackgroundImagePropertyParser.isBackgroundImageGradientMode(backgroundImageProperty)) {
      return backgroundImageProperty['value']['gradients'][0];
    } else {
      return undefined;
    }
  }

  /**
   * [backgroundGradientEndColor description]
   * @param  {[type]} backgroundImageProperty [description]
   * @return {[type]}                         [description]
   */
  static backgroundGradientEndColor(backgroundImageProperty) {
    if (XXBackgroundImagePropertyParser.isBackgroundImageGradientMode(backgroundImageProperty)) {
      return backgroundImageProperty['value']['gradients'][1];
    } else {
      return undefined;
    }
  }

  /**
   * [backgroundGradientAngle description]
   * @param  {[type]} backgroundImageProperty [description]
   * @return {[type]}                         [description]
   */
  static backgroundGradientAngle(backgroundImageProperty) {
    if (XXBackgroundImagePropertyParser.isBackgroundImageGradientMode(backgroundImageProperty)) {
      return backgroundImageProperty['value']['angle'];
    } else {
      return undefined;
    }
  }

  /**
   * [parseToValidCSSSyntax description]
   * @param  {[type]} backgroundImageProperty [description]
   * @return {[type]}                         [description]
   */
  static parseToValidCSSSyntax(backgroundImageProperty) {
    if (XXBackgroundImagePropertyParser.isBackgroundImageGradientMode(backgroundImageProperty)) {
      let value = backgroundImageProperty['value'];
      return `${backgroundImageProperty['type']}(${value['angle']},${value['gradients'][0]}, ${value['gradients'][1]}`;
    } else if (XXBackgroundImagePropertyParser.isBackgroundImageImageMode(backgroundImageProperty)) {
      return '';
    } else {
      return false;
    }
  }

  /**
   * [setBackgroundLineGradient description]
   * @param {[type]} backgroundImageProperty [description]
   * @param {String} [angle='0deg']          [description]
   * @param {String} [start='rgba(255, 255, 255, 1)'] [description]
   * @param {String} [end='rgba(0, 0, 0, 1)'] [description]
   */
  static setBackgroundLineGradient(backgroundImageProperty, angle = '0deg', start = 'rgba(255, 255, 255, 1)', end = 'rgba(0, 0, 0, 1)') {
    if (backgroundImageProperty) {
      backgroundImageProperty['type'] = 'linear-gradient';
      backgroundImageProperty['value'] = {
        angle: angle,
        gradients: [start, end],
      };
    }
  }

  /**
   * [createNewProperty description]
   * @return {[type]} [description]
   */
  static createNewProperty() {
    return {
    };
  }
}

export {XXBackgroundImagePropertyParser};
