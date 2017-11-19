// @flow


// 旋转值结构
declare type XXRotationValue = {
  rotationX: string,
  rotationY: string,
  rotationZ: string, // 带单位
}

// 旋转属性的结构
declare type XXRotationProperty = {
  type: 'rotation',
  name: string,
  value: XXRotationValue
}
