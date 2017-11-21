// @flow

declare type XXBorderValue = {
  borderTopWidth: String, // 带单位
  borderTopColor: String,
  borderTopStyle: String,

  borderBottomWidth: String, // 带单位
  borderBottomColor: String,
  borderBottomStyle: String,

  borderLeftWidth: String, // 带单位
  borderLeftColor: String,
  borderLeftStyle: String,

  borderRightWidth: String, // 带单位
  borderRightColor: String, // rgba(0, 0, 0, 1)
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
