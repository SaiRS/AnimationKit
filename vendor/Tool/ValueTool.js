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
 * [xxfIsValidUnitOfAngle description]
 * @param  {[type]} unit [description]
 * @return {[type]}      [description]
 */
function xxfIsValidUnitOfAngle(unit: string) {
  return ['deg', 'rad'].includes(unit);
}

/**
 * [xxfDefaultUnitOfAngle description]
 * @return {[type]} [description]
 */
function xxfDefaultUnitOfAngle() {
  return 'deg';
}

/**
 * [xxfIsValidUnitOfAngle description]
 * @param  {[type]} unit [description]
 * @return {[type]}      [description]
 */
function xxfIsValidUnitOfAnchor(unit: string) {
  return ['%'].includes(unit);
}

/**
 * [xxfDefaultUnitOfAngle description]
 * @return {[type]} [description]
 */
function xxfDefaultUnitOfAnchor() {
  return '%';
}

/**
 * 长度的有效单位
 * @param  {[type]} unit [description]
 * @return {[type]}      [description]
 */
function xxfIsValidUnitOfLength(unit: string) {
  return ['px'].includes(unit);
}

/**
 * [xxfDefaultUnitOfLength description]
 * @return {[type]} [description]
 */
function xxfDefaultUnitOfLength() {
  return 'px';
}


export {
  xxfExtractNumberValueFromStringValue,
  xxfExtractUnitFromStringValue,

  xxfIsValidUnitOfPosition,
  xxfDefaultUnitOfPosition,

  xxfIsValidUnitOfSize,
  xxfDefaultUnitOfSize,

  xxfIsValidUnitOfAngle,
  xxfDefaultUnitOfAngle,

  xxfIsValidUnitOfAnchor,
  xxfDefaultUnitOfAnchor,

  xxfIsValidUnitOfLength,
  xxfDefaultUnitOfLength,
};
