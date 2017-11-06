// @flow

/**
 * 从字符串的值中抽离出数字的值
 * @param  {string} stringValue [description]
 * @return {[type]}             [description]
 */
function xxfExtractNumberValueFromStringValue(stringValue: string) {
  let num = Number.parseFloat(stringValue);
  if (Number.isNaN(num)) {
    return null;
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

export {
  xxfExtractNumberValueFromStringValue,
  xxfExtractUnitFromStringValue,

  xxfIsValidUnitOfPosition,
  xxfDefaultUnitOfPosition,
};
