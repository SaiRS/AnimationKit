import {XXPropertyNameEnum} from '../Constant/XXPropertyNameConstant.js';
import {XXPropertyTypeEnum} from '../Constant/XXPropertyTypeConstant.js';
import XXPropertyParser from './XXPropertyParser.js';
import {XXPositionPropertyParser} from './XXPositionPropertyParser.js';
import {XXSizePropertyParser} from './XXSizePropertyParser.js';
import {XXScalePropertyParser} from './XXScalePropertyParser.js';
import {XXRotationPropertyParser} from './XXRotationPropertyParser.js';
import {XXAnchorPropertyParser} from './XXAnchorPropertyParser.js';
import {XXBackgroundPropertyParser} from './XXBackgroundPropertyParser.js';
import {XXBorderPropertyParser} from './XXBorderPropertyParser.js';
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
   * 删除某一属性
   * @param  {[type]} nodeGraph      [description]
   * @param  {function} varifyFunction [description]
   * @return {[type]}                [description]
   */
  static deleteSpecialProperty(nodeGraph, varifyFunction) {
    let properties = this.getProperties(nodeGraph);
    for (let i = 0; i < properties.length; i++) {
      // 判断条件
      if (varifyFunction && varifyFunction(properties[i])) {
        properties.splice(i, 1);
        return true;
      }
    }

    return false;
  }

  /**
   * 获得位置属性
   * @param  {Object} nodeGraph 节点的结构
   * @return {[type]}           [description]
   */
  static getPositionProperty(nodeGraph) {
    return XXNodeGraphParser.getSpecialProperty(nodeGraph, function(property) {
      if (XXPropertyParser.getPropertyName(property) ==
       XXPropertyNameEnum.Position) {
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
       XXPropertyNameEnum.Size) {
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
       XXPropertyNameEnum.Scale) {
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
       XXPropertyNameEnum.Rotate) {
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
       XXPropertyNameEnum.Anchor) {
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
       XXPropertyNameEnum.Visible) {
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
       XXPropertyNameEnum.Overflow) {
        return true;
      } else {
        return false;
      }
    });
  }

  /**
   * [getBackgroundProperty description]
   * @param  {[type]} nodeGraph [description]
   * @return {[type]}           [description]
   */
  static getBackgroundProperty(nodeGraph) {
    return XXNodeGraphParser.getSpecialProperty(nodeGraph, function(property) {
      if (XXPropertyParser.getPropertyName(property) ==
       XXPropertyNameEnum.Background) {
        return true;
      } else {
        return false;
      }
    });
  }

  /**
   * 边框属性
   * @param  {[type]} nodeGraph [description]
   * @return {[type]}           [description]
   */
  static getBorderProperty(nodeGraph) {
    return XXNodeGraphParser.getSpecialProperty(nodeGraph, function(property) {
      if (XXPropertyParser.getPropertyType(property) ==
       XXPropertyTypeEnum.BorderType) {
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
   * [setPosition description]
   * @param {[type]} nodeGraph [description]
   * @param {Number} [x=0]     [description]
   * @param {Number} [y=0]     [description]
   * @param {Number} [z=0]     [description]
   */
  static setPosition(nodeGraph, x = 0, y = 0, z = 0) {
    let positionProperty = XXNodeGraphParser.getPositionProperty(nodeGraph);
    if (positionProperty) {
      XXPositionPropertyParser.setPosition(positionProperty,
        x, y, z);
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

  /**
   * [setSize description]
   * @param {[type]} nodeGraph      [description]
   * @param {String} [width='0px']  [description]
   * @param {String} [height='0px'] [description]
   */
  static setSize(nodeGraph, width = '0px', height = '0px') {
    let sizeProperty = XXNodeGraphParser.getSizeProperty(nodeGraph);
    if (sizeProperty) {
      XXSizePropertyParser.setSize(sizeProperty,
        width, height);
    }
  }

  /**
   * [setScale description]
   * @param {[type]} nodeGraph  [description]
   * @param {Number} [scaleX=1] [description]
   * @param {Number} [scaleY=1] [description]
   * @param {Number} [scaleZ=1] [description]
   */
  static setScale(nodeGraph, scaleX = 1, scaleY = 1, scaleZ = 1) {
    let scaleProperty = XXNodeGraphParser.getScaleProperty(nodeGraph);
    if (scaleProperty) {
      XXScalePropertyParser.setScale(scaleProperty,
        scaleX, scaleY, scaleZ);
    }
  }

  /**
   * [setRotation description]
   * @param {[type]} nodeGraph          [description]
   * @param {String} [rotationZ='0deg'] [description]
   * @param {String} [rotationX='0deg'] [description]
   * @param {String} [rotationY='0deg'] [description]
   */
  static setRotation(nodeGraph, rotationZ = '0deg', rotationX = '0deg', rotationY = '0deg') {
    let rotationProperty = XXNodeGraphParser.getRotationProperty(nodeGraph);
    if (rotationProperty) {
      XXRotationPropertyParser.setRotation(rotationProperty, rotationZ, rotationX, rotationY);
    }
  }

  /**
   * [setAnchor description]
   * @param {[type]} nodeGraph       [description]
   * @param {String} [anchorX='50%'] [description]
   * @param {String} [anchorY='50%'] [description]
   */
  static setAnchor(nodeGraph, anchorX = '50%', anchorY = '50%') {
    let anchorProperty = XXNodeGraphParser.getAnchorProperty(nodeGraph);
    if (anchorProperty) {
      XXAnchorPropertyParser.setAnchor(anchorProperty, anchorX, anchorY);
    }
  }

  /**
   * [setBackgroundColor description]
   * @param {[type]} nodeGraph       [description]
   * @param {[type]} backgroundcolor [description]
   */
  static setBackgroundColor(nodeGraph, backgroundcolor) {
    let backgroundcolorProperty = XXNodeGraphParser.getBackgroundProperty(nodeGraph);
    if (backgroundcolorProperty) {
      XXBackgroundPropertyParser.setBackgroundColor(backgroundcolorProperty, backgroundcolor);
    } else {
      // 增加属性
      let newBackgroundValue = XXBackgroundPropertyParser.createBackgroundValue();
      XXNodeGraphParser.addBackgroundProperty(nodeGraph, newBackgroundValue);

      let newBackgroundColorProperty = XXNodeGraphParser.getBackgroundProperty(nodeGraph);
      XXBackgroundPropertyParser.setBackgroundColor(newBackgroundColorProperty, backgroundcolor);
    }
  }

  /**
   * [setBorderTopWidth description]
   * @param {[type]} nodeGraph     [description]
   * @param {String} [width='1px'] [description]
   */
  static setBorderTopWidth(nodeGraph, width = '1px') {
    let borderProperty = XXNodeGraphParser.getBorderProperty(nodeGraph);
    if (borderProperty) {
      XXBorderPropertyParser.setBorderTopWidth(borderProperty, width);
    } else {
      // 增加属性
      let newBorderValue = XXBorderPropertyParser.createBorderValue();
      XXNodeGraphParser.addBorderProperty(nodeGraph, newBorderValue);

      let newBorderProperty = XXNodeGraphParser.getBorderProperty(nodeGraph);
      XXBorderPropertyParser.setBorderTopWidth(newBorderProperty, width);
    }
  }

  /**
   * [setBorderBottomWidth description]
   * @param {[type]} nodeGraph     [description]
   * @param {String} [width='1px'] [description]
   */
  static setBorderBottomWidth(nodeGraph, width = '1px') {
    let borderProperty = XXNodeGraphParser.getBorderProperty(nodeGraph);
    if (borderProperty) {
      XXBorderPropertyParser.setBorderBottomWidth(borderProperty, width);
    } else {
      // 增加属性
      let newBorderValue = XXBorderPropertyParser.createBorderValue();
      XXNodeGraphParser.addBorderProperty(nodeGraph, newBorderValue);

      let newBorderProperty = XXNodeGraphParser.getBorderProperty(nodeGraph);
      XXBorderPropertyParser.setBorderBottomWidth(newBorderProperty, width);
    }
  }

  /**
   * [setBorderLeftWidth description]
   * @param {[type]} nodeGraph     [description]
   * @param {String} [width='1px'] [description]
   */
  static setBorderLeftWidth(nodeGraph, width = '1px') {
    let borderProperty = XXNodeGraphParser.getBorderProperty(nodeGraph);
    if (borderProperty) {
      XXBorderPropertyParser.setBorderLeftWidth(borderProperty, width);
    } else {
      // 增加属性
      let newBorderValue = XXBorderPropertyParser.createBorderValue();
      XXNodeGraphParser.addBorderProperty(nodeGraph, newBorderValue);

      let newBorderProperty = XXNodeGraphParser.getBorderProperty(nodeGraph);
      XXBorderPropertyParser.setBorderLeftWidth(newBorderProperty, width);
    }
  }

  /**
   * [setBorderRightWidth description]
   * @param {[type]} nodeGraph     [description]
   * @param {String} [width='1px'] [description]
   */
  static setBorderRightWidth(nodeGraph, width = '1px') {
    let borderProperty = XXNodeGraphParser.getBorderProperty(nodeGraph);
    if (borderProperty) {
      XXBorderPropertyParser.setBorderRightWidth(borderProperty, width);
    } else {
      // 增加属性
      let newBorderValue = XXBorderPropertyParser.createBorderValue();
      XXNodeGraphParser.addBorderProperty(nodeGraph, newBorderValue);

      let newBorderProperty = XXNodeGraphParser.getBorderProperty(nodeGraph);
      XXBorderPropertyParser.setBorderRightWidth(newBorderProperty, width);
    }
  }

  /**
   * [setBackgroundLineGradient description]
   * @param {[type]} nodeGraph         [description]
   * @param {String} [angle='0deg']    [description]
   * @param {String} [start='rgba(255, 255, 255, 1)'] [description]
   * @param {String} [end='rgba(0, 0, 0, 1)'] [description]
   */
  static setBackgroundLineGradient(nodeGraph, angle = '0deg', start = 'rgba(255, 255, 255, 1)', end = 'rgba(0, 0, 0, 1)') {
    let backgroundProperty = XXNodeGraphParser.getBackgroundProperty(nodeGraph);
    if (backgroundProperty) { // 覆盖
      // XXBackgroundPropertyParser.setBackgroundLineGradient(backgroundProperty, angle, start, end);
      let newBackgroundProperty = XXBackgroundPropertyParser.createNewProperty(XXPropertyParser.getPropertyName(backgroundProperty));
      XXBackgroundPropertyParser.setBackgroundLineGradient(newBackgroundProperty, angle, start, end);
      XXNodeGraphParser._modifyProperty(nodeGraph, XXPropertyParser.getPropertyName(backgroundProperty), newBackgroundProperty);
    } else {
      // 增加属性
      let newBackgroundValue = XXBackgroundPropertyParser.createBackgroundValue();
      XXNodeGraphParser.addBackgroundProperty(nodeGraph, newBackgroundValue);

      let newBackgroundColorProperty = XXNodeGraphParser.getBackgroundProperty(nodeGraph);
      XXBackgroundPropertyParser.setBackgroundLineGradient(newBackgroundColorProperty, angle, start, end);
    }
  }

  /**
   * [deleteBackground description]
   * @param  {[type]} nodeGraph [description]
   */
  static deleteBackground(nodeGraph) {
    XXNodeGraphParser.deleteSpecialProperty(nodeGraph, function(property) {
      if (XXPropertyParser.getPropertyName(property) ==
       XXPropertyNameEnum.Background) {
        return true;
      } else {
        return false;
      }
    });
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
        // 为了触发vue的更新事件, 直接push也可以，vue扩展了Array的方法，使得变成reactives
        // nodeGraph['properties'] = properties.concat([property]);
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
   * @param {[type]} [name=XXPropertyNameEnum.Position] [description]
   */
  static addPositionProperty(nodeGraph, value, name = XXPropertyNameEnum.Position) {
    let property =
      XXPropertyParser.createNewProperty(
        XXPropertyTypeEnum.PointType,
        name,
        value
      );

    XXNodeGraphParser.__addProperty(nodeGraph, property);
  }

  /**
   * [addOverflowProperty description]
   * @param {[type]} nodeGraph                            [description]
   * @param {[type]} value                                [description]
   * @param {[type]} [name=XXPropertyNameEnum.Overflow] [description]
   */
  static addOverflowProperty(nodeGraph, value, name = XXPropertyNameEnum.Overflow) {
    let property = XXPropertyParser.createNewProperty(
      XXPropertyTypeEnum.StringType,
      name,
      value
    );

    XXNodeGraphParser.__addProperty(nodeGraph, property);
  }

  /**
   * [addBackgroundProperty description]
   * @param {[type]} nodeGraph                              [description]
   * @param {[type]} value                                  [description]
   * @param {[type]} [name=XXPropertyNameEnum.Background] [description]
   */
  static addBackgroundProperty(nodeGraph, value, name = XXPropertyNameEnum.Background) {
    let property =
      XXPropertyParser.createNewProperty(
        XXPropertyTypeEnum.BackgroundType,
        name,
        value
      );

    XXNodeGraphParser.__addProperty(nodeGraph, property);
  }

  /**
   * [addBorderProperty description]
   * @param {[type]} nodeGraph                        [description]
   * @param {[type]} value                            [description]
   * @param {[type]} [name=XXPropertyNameEnum.Border] [description]
   */
  static addBorderProperty(nodeGraph, value, name = XXPropertyNameEnum.Border) {
    let property =
      XXPropertyParser.createNewProperty(
        XXPropertyTypeEnum.BorderType,
        name,
        value
      );

    XXNodeGraphParser.__addProperty(nodeGraph, property);
  }


  /** **************************
   * 删除部分
   ****************************/

  /**
   * [_modifyProperty description]
   * @param  {[type]} nodeGraph    [description]
   * @param  {[type]} propertyName [description]
   * @param  {[type]} newProperty  [description]
   */
  static _modifyProperty(nodeGraph, propertyName, newProperty) {
    if (propertyName === XXPropertyParser.getPropertyName(newProperty)) {
      let properties = this.getProperties(nodeGraph);
      for (let i = 0; i < properties.length; i++) {
        // 判断条件
        if (propertyName == XXPropertyParser.getPropertyName(properties[i])) {
          // 直接替换
          properties[i] = Object.assign(properties[i], newProperty);
          break;
        }
      }
    }
  }
}

export {
  XXNodeGraphParser,
};
