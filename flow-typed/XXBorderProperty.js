// @flow

declare type XXBorderValue = {
  borderTopWidth: String, // 带单位
  borderTopColor: XXColorValue,
  borderTopStyle: String,

  borderBottomWidth: String, // 带单位
  borderBottomColor: XXColorValue,
  borderBottomStyle: String,

  borderLeftWidth: String, // 带单位
  borderLeftColor: XXColorValue,
  borderLeftStyle: String,

  borderRightWidth: String, // 带单位
  borderRightColor: XXColorValue,
  borderRightStyle: String,

  borderTopLeftRadius: String, // 带单位
  borderTopRightRadius: String, // 带单位
  borderBottomLeftRadius: String, // 带单位
  borderBottomRightRadius: String, // 带单位
}

declare type XXBorderProperty = {
  type: 'border',
  name: '',
  value: XXBorderValue,
}
