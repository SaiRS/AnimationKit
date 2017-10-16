// @flow

import {XXLoaderPropertyName} from '../XXLoaderConstant.js';
import XXPropertyParser from './XXPropertyParser.js';
/**
 * 解析节点的帮助方法
 */
class XXNodeGraphParser {

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
}

export {
  XXNodeGraphParser,
};
