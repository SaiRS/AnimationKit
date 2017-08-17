// @flow

import XXNodeActor from './XXNodeActor.js';

import $ from 'jquery';

import XXPosition from 'XXFoundation/Type/XXPosition.js';
import XXScale from 'XXFoundation/Type/XXScale.js';
import xxvTypeVerify from 'XXTool/TypeVerify.js';
import xxvLog from 'XXTool/LogTool.js';

/**
 * 需要传递dom对象的动画宿主对象
 */
class XXNodeDomActor extends XXNodeActor {

  _jqueryObject: null;

  _scale: null | XXScale;
  _rotation: null | XXRotation;

  /**
   * @inheritdoc
   * @param  {[string, dom, jquery-object]} domNode  dom选择器， dom对象， jquery对象
   * @param  {[string]} uuid 对象的唯一标识符
   * @throws {Error} domSeletor应该是一个正确的字符串
   */
  constructor(domNode: string, uuid: ?string = undefined) {
    super(uuid);

    this._jqueryObject = $(domNode);
    if (!this._jqueryObject.length) {
      throw new Error(`[XXNodeDomActor] 使用错误的参数:来创建XXNodeDomActor对象`);
    }

    this._init();
  }

  /**
   * 内部初始化
   */
  _init() {
    // matrix(2, 0, 0, 3, 0, 0) (x, y, 1)T
    // matrix3d(2, 0, 0, 0, 0, 3, 0, 0, 0, 0, 3, 0, 0, 0, 0, 1) (x, y, 1)T
    if (this._jqueryObject) {
      let transform = this._jqueryObject.css('transform');
      let matrixRegex = /matrix(?:3d)?\((.*)\)/;
      let matches = transform.match(matrixRegex);

      if (matches) {
        // parse matrix
        let matrix = matches[1].split(','); // 数组（元素还是字符串）

        let scaleX = 1;
        let scaleY = 1;
        let scaleZ = 1;

        // FIXME: 暂时不考虑skew部分，
        // 因为skew(x,y)有两个参数，加上缩放a,b,旋转角度总共有五个参数
        // 而我们只有四个方程式
        if (matrix.length > 6) { // 3d
          scaleX = parseFloat(matrix[0]);
          scaleY = parseFloat(matrix[5]);
        } else { // 2d
          scaleX = parseFloat(matrix[0]);
          scaleY = parseFloat(matrix[3]);
        }

        this._scale = new XXScale(scaleX, scaleY, scaleZ);
      } else {
        // set to default value
        this._scale = new XXScale(1, 1, 1);
      }
    }
  }

  /**
   * @inheritdoc
   */
  position(): ?XXPosition {
    if (this._jqueryObject) {
      let offset = this._jqueryObject.offset() || {left: 0, top: 0};

      let x = offset['left'] || 0;
      let y = offset['top'] || 0;
      let z = 0;

      let result = new XXPosition(x, y, z);
      return result;
    } else {
      return null;
    }
  }

  /**
   * @inheritdoc
   */
  scale(): ?XXScale {
    return this._scale;
  }

  /**
   * @inheritdoc
   */
  rotation(): XXRotation {
    return this._rotation;
  }

  /**
   * @inheritdoc
   */
  moveTo(position: XXPosition): void {
    // inherit by subclass
    if (position && xxvTypeVerify.isType(position, XXPosition)) {
      let coordinate = {
        left: position.posX(),
        top: position.posY(),
        // z: 0,
      };

      this._jqueryObject && this._jqueryObject.offset(coordinate);
    } else {
      xxvLog.warn('invalid param of moveTo: ' + position.toString());
    }
  }

  /**
   * @inheritdoc
   */
  scaleTo(scale: XXScale) {
    if (scale && xxvTypeVerify.isType(scale, XXScale)) {
      let scaleX = scale.scaleX();
      let scaleY = scale.scaleY();

      this._jqueryObject &&
      this._jqueryObject.css('transform', `scale(${scaleX}, ${scaleY})`);
    } else {
      xxvLog.warn('invalid param of moveTo: ' + scale.toString());
    }
  }

  /**
   * [rotateTo description]
   * @param  {[type]} rotation [description]
   */
  rotateTo(rotation: XXRotation) {
    if (rotation && xxvTypeVerify.isType(rotation, XXRotation)) {
      let angle = rotation.getRotateAngle();
      // NOTE: 忽略旋转轴信息

      this._jqueryObject &&
      this._jqueryObject.css('transform', `rotate(${angle}deg)`);
    } else {
      xxvLog.warn('invalid param of moveTo: ' + rotation);
    }
  }
}

export default XXNodeDomActor;
