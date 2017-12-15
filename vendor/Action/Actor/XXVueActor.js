// 使用在Vue项目中的Actor对象，不需要我们去管理对应的html元素，只要驱动数据就行
import XXNodeActor from './XXNodeActor.js';
import xxvTypeVerify from 'XXTool/TypeVerify.js';
import XXPosition from 'XXFoundation/Type/XXPosition.js';
import XXScale from 'XXFoundation/Type/XXScale.js';
import XXRotation from 'XXFoundation/Type/XXRotation.js';


import {XXNodeGraphParser} from 'XXVendor/Loader/DataParser/XXNodeGraphParser.js';
import {XXPositionPropertyParser} from 'XXVendor/Loader/DataParser/XXPositionPropertyParser.js';
import {XXScalePropertyParser} from 'XXVendor/Loader/DataParser/XXScalePropertyParser.js';

import * as ValueTool from 'XXTool/ValueTool.js';
/**
 * vue类型的actor，只驱动数据，由vue去更新页面
 * @extends XXNodeActor
 */
class XXVueActor extends XXNodeActor {

  /**
   * [constructor description]
   * @param  {[type]} uuid          [description]
   * @param  {[type]} nodeGraphData [description]
   */
  constructor(uuid, nodeGraphData) {
    super(uuid);

    // 要驱动的数据，跟XXBasicActor重的nodeGraph数据一致
    this._nodeGraph = nodeGraphData;
  }

  /**
   * 继承的方法
   * @return {[type]} [description]
   */
  position() {
    let positionProperty = XXNodeGraphParser.getPositionProperty(this._nodeGraph);
    let position = XXPositionPropertyParser.getPosition(positionProperty, false);
    return new XXPosition(position['x'], position['y']);
  }

  /**
   * 继承的方法
   * @return {[type]} [description]
   */
  scale() {
    let scaleProperty = XXNodeGraphParser.getScaleProperty(this._nodeGraph);
    let scale = XXScalePropertyParser.getScaleValue(scaleProperty);
    return new XXScale(
      ValueTool.xxfExtractNumberValueFromStringValue(scale['scaleX']),
      ValueTool.xxfExtractNumberValueFromStringValue(scale['scaleY']),
      ValueTool.xxfExtractNumberValueFromStringValue(scale['scaleZ']));
  }

  /**
   * 继承的方法
   * @param  {[type]} position           [description]
   * @param  {[type]} updateModeProperty [description]
   */
  moveTo(position, updateModeProperty) {
    if (position && xxvTypeVerify.isType(position, XXPosition)) {
      // 修改模型
      XXNodeGraphParser.setPosition(this._nodeGraph, position.posX(), position.posY(), position.posZ());
    }
  }

  /**
   * [scaleTo description]
   * @param  {[type]} scale              [description]
   * @param  {[type]} updateModeProperty [description]
   */
  scaleTo(scale, updateModeProperty) {
    if (scale && xxvTypeVerify.isType(scale, XXScale)) {
      XXNodeGraphParser.setScale(this._nodeGraph, scale.scaleX(), scale.scaleY(), scale.scaleZ());
    }
  }

  /**
   * [rotateTo description]
   * @param  {[type]} rotation           [description]
   * @param  {[type]} updateModeProperty [description]
   */
  rotateTo(rotation, updateModeProperty) {
    if (rotation && xxvTypeVerify.isType(rotation, XXRotation)) {
      // XXNodeGraphParser.setRotation(this._nodeGraph, rotation.getRo)
    }
  }
}

export default XXVueActor;
