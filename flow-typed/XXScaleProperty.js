// @flow
//

// 缩放值结构
declare type XXScaleValue = {
  scaleX: number,
  scaleY: number,
  scaleZ: number
}

// 缩放属性结构
declare type XXScaleProperty = {
  type: 'scale',
  name: string,
  value: XXScaleValue
}
