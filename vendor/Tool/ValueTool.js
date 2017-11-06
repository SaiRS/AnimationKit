// @flow

/**
 * [xxfExtractNumberValueFromStringValue description]
 * @param  {[type]} stringValue  [description]
 * @param  {[type]} defaultValue [description]
 * @return {[type]}              [description]
 */
function xxfExtractNumberValueFromStringValue(stringValue: string, defaultValue: number = 0) {
  let num = Number.parseFloat(stringValue);
  if (Number.isNaN(num)) {
    return defaultValue;
  } else {
    return num;
  }
}

/**
 * 从字符串的值中抽离出单位
 * @param  {[type]} stringValue [description]
 * @return {[type]}             [description]
 */
function xxfExtractUnitFromStringValue(stringValue: string) {
  let reg = /^-?\d*\.?\d*(.*)$/;
  let result = stringValue.match(reg);
  if (result) {
    return result[1];
  } else {
    return undefined;
  }
}

/**
 * [xxfIsValidUnitOfPosition description]
 * @param  {[type]} unit [description]
 * @return {[type]}      [description]
 */
function xxfIsValidUnitOfPosition(unit: string) {
  return ['px'].includes(unit);
}

/**
 * [xxfDefaultUnitOfPosition description]
 * @return {[type]} [description]
 */
function xxfDefaultUnitOfPosition() {
  return 'px';
}

/**
 * [xxfIsValidUnitOfSize description]
 * @param  {[type]} unit [description]
 * @return {[type]}      [description]
 */
function xxfIsValidUnitOfSize(unit: string) {
  return ['px'].includes(unit);
}

/**
 * [xxfDefaultUnitOfSize description]
 * @return {[type]} [description]
 */
function xxfDefaultUnitOfSize() {
  return 'px';
}

/**
 * [xxfIsValidUnitOfRotation description]
 * @param  {[type]} unit [description]
 * @return {[type]}      [description]
 */
function xxfIsValidUnitOfRotation(unit: string) {
  return ['deg', 'rad'].includes(unit);
}

/**
 * [xxfDefaultUnitOfRotation description]
 * @return {[type]} [description]
 */
function xxfDefaultUnitOfRotation() {
  return 'deg';
}

/**
 * [xxfIsValidUnitOfRotation description]
 * @param  {[type]} unit [description]
 * @return {[type]}      [description]
 */
function xxfIsValidUnitOfAnchor(unit: string) {
  return ['%'].includes(unit);
}

/**
 * [xxfDefaultUnitOfRotation description]
 * @return {[type]} [description]
 */
function xxfDefaultUnitOfAnchor() {
  return '%';
}

export {
  xxfExtractNumberValueFromStringValue,
  xxfExtractUnitFromStringValue,

  xxfIsValidUnitOfPosition,
  xxfDefaultUnitOfPosition,

  xxfIsValidUnitOfSize,
  xxfDefaultUnitOfSize,

  xxfIsValidUnitOfRotation,
  xxfDefaultUnitOfRotation,

  xxfIsValidUnitOfAnchor,
  xxfDefaultUnitOfAnchor,
};
