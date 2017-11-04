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

export {
  xxfExtractNumberValueFromStringValue,
  xxfExtractUnitFromStringValue,
};
