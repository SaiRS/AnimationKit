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

  _scale: null;

  /**
   * @inheritdoc
   * @param  {[string, dom, jquery-object]} domNode  dom选择器， dom对象， jquery对象
   * @param  {[string]} uuid 对象的唯一标识符
   * @throws {Error} domSeletor应该是一个正确的字符串
   */
  constructor(domNode: ?string, uuid: string) {
    super(uuid);

    this._jqueryObject = $(domNode);
    if (!this._jqueryObject.length) {
      throw new Error(`使用错误的参数:${domNode}来创建XXNodeDomActor对象`);
    }

    this._init();
  }

  /**
   * 内部初始化
   */
  _init() {
    // matrix(2, 0, 0, 3, 0, 0)
    // matrix3d(2, 0, 0, 0, 0, 3, 0, 0, 0, 0, 3, 0, 0, 0, 0, 1)
    let transform = this._jqueryObject.css('transform');
    let matrixRegex = /matrix(?:3d)?\((.*)\)/;
    let matches = transform.match(matrixRegex);

    if (matches) {
      // parse matrix
      // TODO: parse matrix or matrix3D
      let matrix = matches[1].split(','); // 数组（元素还是字符串）

      let scaleX = 1;
      let scaleY = 1;
      let scaleZ = 1;

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

  /**
   * @inheritdoc
   */
  position(): XXPosition {
    let offset = this._jqueryObject.offset() || {left: 0, top: 0};

    let x = offset['left'] || 0;
    let y = offset['top'] || 0;
    let z = 0;

    let result = new XXPosition(x, y, z);
    return result;
  }

  /**
   * @inheritdoc
   */
  scale(): XXScale {
    return this._scale;
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

      this._jqueryObject.offset(coordinate);
    } else {
      xxvLog.warn('invalid param of moveTo: ' + position);
    }
  }

  /**
   * @inheritdoc
   */
  scaleTo(scale: XXScale) {
    if (scale && xxvTypeVerify.isType(scale, XXScale)) {
      let scaleX = scale.scaleX();
      let scaleY = scale.scaleY();

      this._jqueryObject.css('transform', `scale(${scaleX}, ${scaleY})`);
    } else {
      xxvLog.warn('invalid param of moveTo: ' + scale);
    }
  }
}

export default XXNodeDomActor;
