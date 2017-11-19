// @flow

// 尺寸值结构
declare type XXSizeValue = {
  width: string,
  height: string, // 带单位
}

// 尺寸属性结构
declare type XXSizeProperty = {
  type: 'size',
  name: string,
  value: XXSizeValue
}
