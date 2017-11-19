// @flow

// 背景值结构
declare type XXBackgroundValue = {
  backgroundColor: XXColorValue,
  // 其他
  // backgroundImage: ''
}

// 背景属性的结构
declare type XXBackgroundProperty = {
  type: 'background',
  name: string,
  value: XXBackgroundValue
}
