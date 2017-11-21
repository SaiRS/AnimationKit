// @flow

// 目前已有的属性类型常量

const XXPropertyTypeEnum = {
  // 未知类型
  UnknownType: 'unknown',

  // 简单boolean类型
  BooleanType: 'boolean',

  // 简单数字类型
  NumberType: 'number',

  // 简单字符串类型
  StringType: 'string',

  // 点类型，对应的value
  // 可以查看FlowType/XXPositionProperty.js
  PointType: 'point',

  // 尺寸类型, 对应的value
  // 可以查看FlowType/XXSizeProperty.js
  SizeType: 'size',

  // 缩放类型，对应的value
  // 可以查看FlowType/XXScaleProperty.js
  ScaleType: 'scale',

  // 旋转类型, 对应的value
  // 可以查看FlowType/XXRotationProperty.js
  RotationType: 'rotation',

  // 背景类型，对应的value
  // 可以查看FlowType/XXBackgroundProperty.js
  BackgroundType: 'background',

  // 边框类型，对应的value
  // 可以查看FlowType/XXBorderProperty.js
  BorderType: 'border',

  // 内边框类型，对应的value
  // 可是查看FlowType/XXPaddingProperty.js
  PaddingType: 'padding',
};

export {
  XXPropertyTypeEnum,
};
