// @flow

// 点类型的值
declare type XXPointValue = {
  x: string,
  y: string,
  z: string, // 带单位
}

// 点类型结构
declare type XXPointProperty = {
  type: 'point',
  name: string,
  value: XXPointValue,
};
