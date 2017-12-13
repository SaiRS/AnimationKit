// import XXActionSpeed from 'XXActionAlias/Action/XXActionSpeed.js';
// import XXActionDelay from 'XXActionAlias/Action/BaseAction/XXActionDelay.js';
import XXActionSequence from 'XXActionAlias/Action/XXActionSequence.js';
import XXActionSpawn from 'XXActionAlias/Action/XXActionSpawn.js';


import {xxfGetRegistedActionConstructor} from 'XXActionAlias/Action/XXActionRegisterManager.js';
import {xxfGetRegisteredTypeValueParser} from 'XXLoader/DataParser/XXTypeValueParserRegisterManager.js';

import {XXActionItemPropertyParser} from './XXActionItemPropertyParser.js';
import {XXKeyframePropertyParser} from './XXKeyFrameParser.js';

/**
 * [XXActionPropertyParser description]
 */
class XXActionPropertyParser {
  /**
   * [getActionItemProperty description]
   * @param  {[type]} actionProperty [description]
   * @param  {[type]} propertyName   [description]
   * @return {[type]}                [description]
   */
  static getActionItemProperty(actionProperty, propertyName) {
    return Reflect.get(actionProperty, propertyName);
  }

  /**
   * [addActionProperty description]
   * @param {[type]} actionProperty     [description]
   * @param {[type]} propertyName       [description]
   * @param {[type]} actionItemProperty [description]
   */
  static addActionItemProperty(actionProperty, propertyName, actionItemProperty) {
    Reflect.set(actionProperty, propertyName, actionItemProperty);
  }

  /**
   * [removeActionItemProperty description]
   * @param  {[type]} actionProperty [description]
   * @param  {[type]} propertyName   [description]
   */
  static removeActionItemProperty(actionProperty, propertyName) {
    Reflect.deleteProperty(actionProperty, propertyName);
  }

  // modify
  //
  // 生成Action对象

  /**
   * [createActionObject description]
   * @param  {[type]} actionProperty [description]
   * @return {[type]}                    [description]
   */
  static createActionObject(actionProperty) {
    // 读取所有的property
    let propertyNames = Object.keys(actionProperty);

    let allPropertyActions = [];
    for (let i = 0; i < propertyNames.length; i++) {
      let propertyActions = [];

      // 所有属性
      let propertyActionItem = this.getActionItemProperty(actionProperty, propertyNames[i]);
      let keyframes = XXActionItemPropertyParser.getKeyframes(propertyActionItem);

      if (keyframes.length > 0) {
        let type = XXKeyframePropertyParser.getKeyframeType(keyframes[0]);
        let name = XXKeyframePropertyParser.getKeyframeName(keyframes[0]);

        let constructor = xxfGetRegistedActionConstructor(type, name);
        if (!constructor) {
          continue;
        }
        // 生成对应的action
        for (let indexKeyframe = 0; indexKeyframe < keyframes.length; indexKeyframe++) {
          // 解析value
          let parser = xxfGetRegisteredTypeValueParser(type);
          if (!parser) {
            console.warn(`不存在${type}对应的parser`);
            continue;
          } else {
            let duration = 0;
            if (indexKeyframe > 0) {
              duration = XXKeyframePropertyParser.getTime(keyframes[indexKeyframe]) - XXKeyframePropertyParser.getTime(keyframes[indexKeyframe-1]);
            }

            // 所有constructor都需要实现createNewActionFrom方法
            let action = constructor.createNewActionFrom(keyframes[indexKeyframe], duration);

            propertyActions.push(action);
          }
        }

        // 生成对应的一个property sequence action
        let sequenceAction = new XXActionSequence(...propertyActions);
        allPropertyActions.push(sequenceAction);
      }
    }

    // 将单个的property sequence action生成一个action
    let spawnAction = new XXActionSpawn(...allPropertyActions);

    return spawnAction;
  }
}


export {
  XXActionPropertyParser,
};
