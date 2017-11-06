// @flow

import {XXLoaderPropertyName, XXLoaderPropertyType} from '../XXLoaderConstant.js';
import XXPropertyParser from './XXPropertyParser.js';
import {XXPositionPropertyParser} from './XXPositionPropertyParser.js';
/**
 * 解析节点的帮助方法
 */
class XXNodeGraphParser {

  /** **************************
   * 读取部分
   ****************************/

  /**
   * 获得节点的uuid
   * @param  {Object} nodeGraph 节点的结构
   * @return {[type]}           [description]
   */
  static getUUID(nodeGraph) {
    return nodeGraph && nodeGraph['uuid'] || undefined;
  }

  /**
   * 获得节点的名字
   * @param  {Object} nodeGraph 节点的结构
   * @return {[type]}           [description]
   */
  static getName(nodeGraph) {
    return nodeGraph && nodeGraph['name'] || '';
  }

  /**
   * 获得节点的类名
   * @param  {Object} nodeGraph 节点的结构
   * @return {[type]}           [description]
   */
  static getClassName(nodeGraph) {
    return nodeGraph && nodeGraph['className'] || '';
  }

  /**
   * 获得节点父类的类名
   * @param  {Object} nodeGraph 节点的结构
   * @return {[type]}           [description]
   */
  static getParentClassName(nodeGraph) {
    return nodeGraph && nodeGraph['parentClassName'] || '';
  }

  /**
   * 获取节点的所有属性
   * @param  {Object} nodeGraph 节点的结构
   * @return {[type]}           [description]
   */
  static getProperties(nodeGraph) {
    return nodeGraph && nodeGraph['properties'] || [];
  }


  /**
   * 获取节点的所有Action信息
   * @param  {Object} nodeGraph 节点的结构
   * @return {[type]}           [description]
   */
  static getActions(nodeGraph) {
    return nodeGraph && nodeGraph['actions'] || [];
  }

  /**
   * 获得节点的所有子元素
   * @param  {Object} nodeGraph 节点的结构
   * @return {[type]}           [description]
   */
  static getChildren(nodeGraph) {
    return nodeGraph && nodeGraph['children'] || [];
  }


  /**
   * 获得某一指定的属性
   * @param  {Object} nodeGraph 节点的结构
   * @param  {function} varifyFunction 参数为property，返回true则选中了我们需要的属性
   * @return {[type]}                [description]
   */
  static getSpecialProperty(nodeGraph, varifyFunction) {
    let properties = this.getProperties(nodeGraph);
    for (let i = 0; i < properties.length; i++) {
      // 判断条件
      if (varifyFunction(properties[i])) {
        return properties[i];
      }
    }

    return null;
  }

  /**
   * 获得位置属性
   * @param  {Object} nodeGraph 节点的结构
   * @return {[type]}           [description]
   */
  static getPositionProperty(nodeGraph) {
    return XXNodeGraphParser.getSpecialProperty(nodeGraph, function(property) {
      if (XXPropertyParser.getPropertyName(property) ==
       XXLoaderPropertyName.Position) {
        return true;
      } else {
        return false;
      }
    });
  }

  /**
   * 获得尺寸属性
   * @param  {Object} nodeGraph 节点的结构
   * @return {[type]}           [description]
   */
  static getSizeProperty(nodeGraph) {
    return XXNodeGraphParser.getSpecialProperty(nodeGraph, function(property) {
      if (XXPropertyParser.getPropertyName(property) ==
       XXLoaderPropertyName.Size) {
        return true;
      } else {
        return false;
      }
    });
  }

  /**
   * 获得缩放属性
   * @param  {[type]} nodeGraph [description]
   * @return {[type]}           [description]
   */
  static getScaleProperty(nodeGraph) {
    return XXNodeGraphParser.getSpecialProperty(nodeGraph, function(property) {
      if (XXPropertyParser.getPropertyName(property) ==
       XXLoaderPropertyName.Scale) {
        return true;
      } else {
        return false;
      }
    });
  }

  /**
   * 获得旋转属性
   * @param  {[type]} nodeGraph [description]
   * @return {[type]}           [description]
   */
  static getRotationProperty(nodeGraph) {
    return XXNodeGraphParser.getSpecialProperty(nodeGraph, function(property) {
      if (XXPropertyParser.getPropertyName(property) ==
       XXLoaderPropertyName.Rotate) {
        return true;
      } else {
        return false;
      }
    });
  }

  /**
   * 获得锚点属性
   * @param  {[type]} nodeGraph [description]
   * @return {[type]}           [description]
   */
  static getAnchorProperty(nodeGraph) {
    return XXNodeGraphParser.getSpecialProperty(nodeGraph, function(property) {
      if (XXPropertyParser.getPropertyName(property) ==
       XXLoaderPropertyName.Anchor) {
        return true;
      } else {
        return false;
      }
    });
  }

  /**
   * 获得可见性属性
   * @param  {[type]} nodeGraph [description]
   * @return {[type]}           [description]
   */
  static getVisibleProperty(nodeGraph) {
    return XXNodeGraphParser.getSpecialProperty(nodeGraph, function(property) {
      if (XXPropertyParser.getPropertyName(property) ==
       XXLoaderPropertyName.Visible) {
        return true;
      } else {
        return false;
      }
    });
  }

  /**
   * 获得overflow属性
   * @param  {[type]} nodeGraph [description]
   * @return {[type]}           [description]
   */
  static getOverflowProperty(nodeGraph) {
    return XXNodeGraphParser.getSpecialProperty(nodeGraph, function(property) {
      if (XXPropertyParser.getPropertyName(property) ==
       XXLoaderPropertyName.Overflow) {
        return true;
      } else {
        return false;
      }
    });
  }

  /** **************************
   * 修改部分
   ****************************/

  /**
   * [setPositionByOffset description]
   * @param {[type]} nodeGraph   [description]
   * @param {Number} [offsetX=0] [description]
   * @param {Number} [offsetY=0] [description]
   * @param {Number} [offsetZ=0] [description]
   */
  static setPositionByOffset(nodeGraph, offsetX = 0, offsetY = 0, offsetZ = 0) {
    let positionProperty = XXNodeGraphParser.getPositionProperty(nodeGraph);
    if (positionProperty) {
      XXPositionPropertyParser.setPositionByOffset(positionProperty,
        offsetX, offsetY, offsetZ);
    }
  }

  /**
   * [setOverflowProp description]
   * @param {[type]} nodeGraph            [description]
   * @param {String} [newoverflow='auto'] [description]
   */
  static setOverflowProp(nodeGraph, newoverflow = 'auto') {
    let overflowProp = XXNodeGraphParser.getOverflowProperty(nodeGraph);
    if (overflowProp) {
      XXPropertyParser.modifyPropertyValue(overflowProp, newoverflow);
    } else {
      // 新增一个属性
      XXNodeGraphParser.addOverflowProperty(nodeGraph, newoverflow);
    }
  }

  /** **************************
   * 增加部分
   ****************************/

   /**
    * [__addProperty description]
    * @param {[type]} nodeGraph [description]
    * @param {[type]} property  [description]
    */
  static __addProperty(nodeGraph, property) {
    if (nodeGraph && property) {
      let properties = nodeGraph['properties'];
      if (properties) {
        properties.push(property);
      } else {
        nodeGraph['properties'] = [property];
      }
    }
  }

  /**
   * [addPositionProperty description]
   * @param {[type]} nodeGraph                            [description]
   * @param {[type]} value                                [description]
   * @param {[type]} [name=XXLoaderPropertyName.Position] [description]
   */
  static addPositionProperty(nodeGraph, value, name = XXLoaderPropertyName.Position) {
    let property =
      XXPropertyParser.createNewProperty(
        XXLoaderPropertyType.PointType,
        name,
        value
      );

    XXNodeGraphParser.__addProperty(nodeGraph, property);
  }

  /**
   * [addOverflowProperty description]
   * @param {[type]} nodeGraph                            [description]
   * @param {[type]} value                                [description]
   * @param {[type]} [name=XXLoaderPropertyName.Overflow] [description]
   */
  static addOverflowProperty(nodeGraph, value, name = XXLoaderPropertyName.Overflow) {
    let property = XXPropertyParser.createNewProperty(
      XXLoaderPropertyType.StringType,
      name,
      value
    );

    XXNodeGraphParser.__addProperty(nodeGraph, property);
  }

  /** **************************
   * 删除部分
   ****************************/
}

export {
  XXNodeGraphParser,
};
