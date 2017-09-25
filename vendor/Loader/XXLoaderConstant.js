// @flow


// 属性类型
let XXLoaderPropertyType = {
  // 简单boolean类型
  CheckType: 'Check',

  // 简单数字类型
  FloatType: 'Float',

  // 简单字符串类型
  StringType: 'String',

  // 翻转类型，对应的value为
  // {
  //  horizon: boolean,  // 水平翻转
  //  vertical: boolean, // 垂直翻转
  // }
  FlipType: 'Flip',

  // 位置类型，对应的value格式为
  // {
  //   x: 0,
  //   y: 0,
  //   z: 0, //暂时没有修改入口
  // }
  PositionType: 'Position',

  // 点类型，对应的value为
  // {
  //   x: 0,
  //   y: 0,
  //   z: 0, // 暂时没有修改入口
  // }
  PointType: 'Point',

  // 缩放类型，对应的value格式为
  // {
  //   scaleX: 1,
  //   scaleY: 1,
  //   scaleZ: 1, // 暂时没有修改入口
  // }
  ScaleType: 'Scale',

  // 角度类型，对应的value格式为简单字符串
  // 234deg/0.2rad/-24deg/-0.8rad
  DegreesType: 'Degrees',

  // 角度动作类型，对应的value格式为
  // {
  //   degree: 同DegreesType的值一样。
  //   ignorePreKeyPartOver360: boolean, // 是否忽略上一关键帧的超出360度的部分
  //   ignorePartOver360: boolean, // 是否忽略自身超出360度的部分
  //   //顺时针还是逆时针，如果有一个以上的关键帧考虑超出360度部分，
  //   //或minActionDegree为true，则这个设置不起作用
  //   actionDirection: 'anticlockwise/clockwise',
  //   // 是否选择最小旋转路径，如果有一个以上的关键帧考虑超出360部分,则这个设置不起作用
  //   minActionDegree: boolean,
  // }
  DegreeActionType: 'DegreeAction',

  // 图片类型，对应的value格式为
  // {
  //   imgPath: ****, // 图片路径
  //   isImgPathAbsolutePath: boolean, // 图片路径是否是绝对值
  //   spriteSheetConfigPath: ****, // sprite sheet配置文件路径
  //   // sprite sheet文件路径是否据对路径
  //   isSpriteSheetConfigPathAbsolutePath: boolean,
  //   spriteName: '', // 图片的名称
  // }
  // 注：后三个属性是为了支持sprite sheet而存在的，当我们需要使用sprite sheet，那么就
  // 得加载对应的配置文件，通过spriteName获得对应的配置
  SpriteType: 'SpriteFrame',
};

export {
  XXLoaderPropertyType,
};
