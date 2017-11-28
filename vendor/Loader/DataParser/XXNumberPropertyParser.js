import XXPropertyParser from './XXPropertyParser.js';

/**
 * [XXNumberPropertyParser description]
 */
class XXNumberPropertyParser {

  /**
   * [getNumber description]
   * @param  {[type]} property     [description]
   * @param  {[type]} defaultValue [description]
   * @return {[type]}              [description]
   */
  static getNumber(property, defaultValue) {
    let value = XXPropertyParser.getPropertyValue(property);
    if (value) {
      return value;
    } else {
      return defaultValue;
    }
  }

  /**
   * [setNumber description]
   * @param {[type]} property [description]
   * @param {[type]} newValue [description]
   */
  static setNumber(property, newValue) {
    XXPropertyParser.modifyPropertyValue(property, newValue);
  }

  /**
   * [createNewNumber description]
   * @return {[type]} [description]
   */
  static createNewNumberValue() {
    return 0;
  }
}

export {
  XXNumberPropertyParser,
};
