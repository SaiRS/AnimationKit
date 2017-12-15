// 用来注册action的类的
//
import {XXPropertyTypeEnum} from 'XXLoader/Constant/XXPropertyTypeConstant.js';
import {XXPropertyNameEnum} from 'XXLoader/Constant/XXPropertyNameConstant.js';

import {XXPositionPropertyParser} from 'XXLoader/DataParser/XXPositionPropertyParser.js';
import {XXScalePropertyParser} from 'XXLoader/DataParser/XXScalePropertyParser.js';

// import XXActionMoveTo from 'XXActionAlias/Action/BaseAction/XXActionMoveTo.js';
// import XXActionRotateTo from 'XXActionAlias/Action/BaseAction/XXActionRotateTo.js';
// import XXActionScaleTo from 'XXActionAlias/Action/BaseAction/XXActionScaleTo.js';
//
// import XXActionSpeed from 'XXActionAlias/Action/XXActionSpeed.js';
// import XXActionDelay from 'XXActionAlias/Action/BaseAction/XXActionDelay.js';
// import XXActionSequence from 'XXActionAlias/Action/XXActionSequence.js';
// import XXActionSpawn from 'XXActionAlias/Action/XXActionSpawn.js';
// {
//   type: {
//     name: constructor,
//     name2: constructor2,
//   },
//   type1: {
//     ...
//   }
// }
//
/**
 * [XXActionRegisterManager description]
 * @type {Object}
 */
const XXActionRegisterManager = {

};

/**
 * [xxfRegisterAction description]
 * @param  {[type]} type        [description]
 * @param  {[type]} name        [description]
 * @param  {[type]} constructor 需要有一个createNewActionFrom方法，参数为keyframe
 */
function xxfRegistAction(type, name, constructor) {
  let exist = XXActionRegisterManager[type];
  if (exist) {
    if (exist[name]) {
      console.warn(`已经存在${type}, ${name}对应的constructor, 此操作将会覆盖之前的constructor`);
    }

    exist[name] = constructor;
  } else {
    XXActionRegisterManager[type] = {
      [name]: constructor,
    };
  }
}


/**
 * 获得注册的constructor
 * @param  {[type]} type [description]
 * @param  {[type]} name [description]
 * @return {[type]}      [description]
 */
function xxfGetRegistedActionConstructor(type, name) {
  let exist = XXActionRegisterManager[type];
  if (exist) {
    return exist[name];
  } else {
    return undefined;
  }
}

// 初始化
xxfRegistAction(XXPropertyTypeEnum.PointType, XXPropertyNameEnum.Position, XXPositionPropertyParser);
xxfRegistAction(XXPropertyTypeEnum.ScaleType, XXPropertyNameEnum.Scale, XXScalePropertyParser);
// xxfRegistAction(XXPropertyTypeEnum.RotationType, XXPropertyNameEnum.Rotate, XXActionRotateTo);

export {
  xxfRegistAction,
  xxfGetRegistedActionConstructor,
};
