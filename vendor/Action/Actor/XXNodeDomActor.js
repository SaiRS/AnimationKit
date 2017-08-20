// @flow

import XXNodeActor from './XXNodeActor.js';

import $ from 'jquery';
import _ from 'lodash';

import XXPosition from 'XXFoundation/Type/XXPosition.js';
import XXScale from 'XXFoundation/Type/XXScale.js';
import XXRotation from 'XXFoundation/Type/XXRotation.js';
import xxvTypeVerify from 'XXTool/TypeVerify.js';
import xxvLog from 'XXTool/LogTool.js';

/**
 * XXNodeDomActor Option Config
 * @class
 */
class XXNodeDomActorOption {
  // 对象初始化的transform数组
  initTransforms: Array<string>;

  initSkewX: number;
  initSkewY: number;
  initRotation: number;
  initScaleX: number;
  initScaleY: number;

  /**
   * 构造函数
   * @param {Array<string>} transforms 对象的初始化transform数组
   * @param {number} rotation 对象的初始化rotation的值，单位deg
   * @param {number} scaleX 对象的初始化scaleX的值
   * @param {number} scaleY 对象的初始化scaleY的值
   * @param {number} skewX 对象的初始化skewX的值，单位deg
   * @param {number} skewY 对象的初始化skewY的值，单位deg
   */
  constructor(transforms: Array<string> = [],
    rotation: number = 0,
    scaleX: number = 1,
    scaleY: number = 1,
    skewX: number = 0,
    skewY: number = 0) {
    this._init(transforms, rotation, scaleX, scaleY, skewX, skewY);
  }

  /**
   * 内部初始化，将变量设置为默认值
   * @param {Array<string>} transforms 对象的初始化transform数组
   * @param {number} rotation 对象的初始化rotation的值，单位deg
   * @param {number} scaleX 对象的初始化scaleX的值
   * @param {number} scaleY 对象的初始化scaleY的值
   * @param {number} skewX 对象的初始化skewX的值，单位deg
   * @param {number} skewY 对象的初始化skewY的值，单位deg
   */
  _init(transforms: Array<string> = [],
    rotation: number = 0,
    scaleX: number = 1,
    scaleY: number = 1,
    skewX: number = 0,
    skewY: number = 0) {
    this.initTransforms = transforms;
    this.initRotation = rotation;
    this.initScaleX = scaleX;
    this.initScaleY = scaleY;
    this.initSkewX = skewX;
    this.initSkewY = skewY;
  }

  /**
   * 获得对象的初始化transform数组
   * @return {Array<string>} 对象的初始化transform数组
   */
  getInitTransforms(): Array<string> {
    return this.initTransforms || [];
  }

  /**
   * 获得初始化的skewX的值,单位deg
   * @return {number} 初始化的skewX的值
   */
  getInitSkewX(): number {
    return this.initSkewX || 0;
  }

  /**
   * 获得初始化的skewY的值,单位deg
   * @return {number} 初始化的skewY的值
   */
  getInitSkewY(): number {
    return this.initSkewY || 0;
  }

  /**
   * 获得初始化的scaleX的值
   * @return {number} 获得初始化的scaleX的值
   */
  getInitScaleX(): number {
    return this.initScaleX || 1;
  }

  /**
   * 获得初始化的scaleY的值
   * @return {number} 获得初始化的scaleY的值
   */
  getInitScaleY(): number {
    return this.initScaleY || 1;
  }

  /**
   * 获得初始化的rotate的值, 单位deg
   * @return {number} 获得初始化的rotate的值
   */
  getInitRotation(): number {
    return this.initRotation || 0;
  }
}

/**
 * some constant variable
 */
let defaultOption = new XXNodeDomActorOption();

/**
 * 需要传递dom对象的动画宿主对象
 */
class XXNodeDomActor extends XXNodeActor {

  _jqueryObject: null;

  // _scale: null | XXScale;
  // _rotation: null | XXRotation;

  // 模型树的属性

  // NOTE: 这个数组记录了应用于css transform的一系列变化
  // 在执行动画时，因为会覆盖css transform的值，
  // 如果没有记录之前的变化，则不能实现在当前状态下无缝的执行下一个动画
  _transforms: Array<string>;

  _skewX: number;
  _skewY: number;
  _rotation: number;
  _scaleX: number;
  _scaleY: number;
  _positionX: number;
  _positionY: number;

  // 当前呈现的一些属性
  _presentationTransforms: Array<string>;
  _presentationSkewX: number;
  _presentationSkewY: number;
  _presentationRotation: number;
  _presentationScaleX: number;
  _presentationScaleY: number;
  _presentationPositionX: number;
  _presentationPositionY: number;

  /**
   * @inheritdoc
   * @param  {[string, dom, jquery-object]} domNode  dom选择器， dom对象， jquery对象
   * @param  {[string]} uuid 对象的唯一标识符
   * @param {XXNodeDomActorOption} option
   * @throws {Error} domSeletor应该是一个正确的字符串
   */
  constructor(domNode: string,
    uuid: ?string = undefined,
    option: XXNodeDomActorOption = defaultOption) {
    super(uuid);

    this._jqueryObject = $(domNode);
    if (!this._jqueryObject.length) {
      throw new Error(`[XXNodeDomActor] 使用错误的参数:来创建XXNodeDomActor对象`);
    }

    this._init(option);
  }

  /**
   * inheirtdoc
   */
  reset() {
    this._transforms = [];
  }

  /**
   * 内部初始化
   * @param {XXNodeDomActorOption} option XXNodeDomActor的Option对象
   */
  _init(option: XXNodeDomActorOption) {
    if (option) {
      this._transforms = option.getInitTransforms();
      this._scaleX = option.getInitScaleX();
      this._scaleY = option.getInitScaleY();
      this._rotation = option.getInitRotation();
      this._skewX = option.getInitSkewX();
      this._skewY = option.getInitSkewY();

      // 初始化时使用呈现树的值
      let position = this.presentationPosition();
      if (position) {
        this._positionX = position.posX();
        this._positionY = position.posY();
      }
    } else {
      this._transforms = [];

      this._scaleX = 1;
      this._scaleY = 1;

      this._skewX = 0;
      this._skewY = 0;

      this._rotation = 0;

      this._positionX = 0;
      this._positionY = 0;
    }

    // 同时修改呈现树的属性
    this._setPresetaionPropertiesToMode();

    // // matrix(2, 0, 0, 3, 0, 0) (x, y, 1)T
    // // matrix3d(2, 0, 0, 0, 0, 3, 0, 0, 0, 0, 3, 0, 0, 0, 0, 1) (x, y, 1)T
    // // matrix是竖着排列的
    // if (this._jqueryObject) {
    //   let transform = this._jqueryObject.css('transform');
    //   let matrixRegex = /matrix(?:3d)?\((.*)\)/;
    //   let matches = transform.match(matrixRegex);
    //
    //   if (matches) {
    //     // parse matrix
    //     let matrix = matches[1].split(','); // 数组（元素还是字符串）
    //     console.log(matrix);
    //     let scaleX = 1;
    //     let scaleY = 1;
    //     let scaleZ = 1;
    //     let rotate = 0;
    //
    //     // FIXME: 暂时不考虑skew部分，
    //     // 因为skew(x,y)有两个参数，加上缩放a,b,旋转角度总共有五个参数
    //     // 而我们只有四个方程式
    //     if (matrix.length > 6) { // 3d
    //       let m11 = parseFloat(matrix[0]);
    //       let m21 = parseFloat(matrix[1]);
    //       let m12 = parseFloat(matrix[4]);
    //       let m22 = parseFloat(matrix[5]);
    //
    //       scaleX = Math.sqrt(m11*m11 + m12*m12);
    //       scaleY = Math.sqrt(m21*m21 + m22*m22);
    //
    //       rotate = -Math.atan2(m12, m11) * 180 / Math.PI;
    //     } else { // 2d
    //       let m11 = parseFloat(matrix[0]);
    //       let m21 = parseFloat(matrix[1]);
    //       let m12 = parseFloat(matrix[2]);
    //       let m22 = parseFloat(matrix[3]);
    //       console.log(`m11 = ${m11}, m12=${m12}, m21=${m21}, m22=${m22}`);
    //       scaleX = Math.sqrt(m11*m11 + m12*m12);
    //       scaleY = Math.sqrt(m21*m21 + m22*m22);
    //
    //       rotate = -Math.atan2(m12, m11) * 180 / Math.PI;
    //     }
    //
    //     this._scale = new XXScale(scaleX, scaleY, scaleZ);
    //     this._rotation = new XXRotation(rotate);
    //   } else {
    //     // set to default value
    //     this._scale = new XXScale(1, 1, 1);
    //     this._rotation = new XXRotation(0);
    //   }
    // }
    //
    // this._scale && console.log(this._scale.toString());
    // this._rotation && console.log(this._rotation.toString());
  }


  /**
   * 将模型树的值赋给呈现树
   * 设置后记得更新UI，可以使用moveTo, scaleTo, rotateTo方法等
   */
  _setPresetaionPropertiesToMode() {
    this._presentationRotation = this._rotation;
    this._presentationScaleX = this._scaleX;
    this._presentationScaleY = this._scaleY;
    this._presentationSkewX = this._skewX;
    this._presentationSkewY = this._skewY;
    this._presentationTransforms = this._transforms;
  }

  /**
   * 将模型树的值赋给呈现树
   */
  _setModePropertiesToPresentation() {
    this._rotation = this._presentationRotation;
    this._scaleX = this._presentationScaleX;
    this._scaleY = this._presentationScaleY;
    this._skewX = this._presentationSkewX;
    this._skewY = this._presentationSkewY;
    this._transforms = this._presentationTransforms;
  }

  /**
   * @inheritdoc
   */
  position(): ?XXPosition {
    return new XXPosition(this._positionX, this._positionY);
  }

  /**
   * @inheritdoc
   */
  presentationPosition(): ?XXPosition {
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
    return new XXScale(this._scaleX, this._scaleY);
  }

  /**
   * @inheritdoc
   */
  presentationScale(): ?XXScale {
    return new XXScale(this._presentationScaleX, this._presentationScaleY);
  }

  /**
   * @inheritdoc
   */
  rotation(): XXRotation | null {
    return new XXRotation(this._rotation);
  }

  /**
   * @inheritdoc
   */
  presentationRotation(): XXRotation | null {
    return new XXRotation(this._presentationRotation);
  }

  /**
   * @inheritdoc
   */
  moveTo(position: XXPosition, updateModeProperty: boolean = true): void {
    // inherit by subclass
    if (position && xxvTypeVerify.isType(position, XXPosition)) {
      let coordinate = {
        left: position.posX(),
        top: position.posY(),
        // z: 0,
      };

      this._jqueryObject && this._jqueryObject.offset(coordinate);

      if (updateModeProperty) {
        // update mode property
        this._positionX = position.posX();
        this._positionY = position.posY();
      } else {
        // do nothing
      }
    } else {
      xxvLog.warn('invalid param of moveTo: ' + position.toString());
    }
  }

  /**
   * @inheritdoc
   */
  scaleTo(scale: XXScale, updateModeProperty: boolean = true) {
    if (scale && xxvTypeVerify.isType(scale, XXScale)) {
      let scaleX = scale.scaleX();
      let scaleY = scale.scaleY();

      // TODO: 不影响其他的transform属性
      if (this._jqueryObject) {
        let jqueryObjectFlow = this._jqueryObject;

        let transformsClone = _.clone(this._transforms);
        let scaleTransform = `scale(${scaleX}, ${scaleY})`;
        transformsClone.push(scaleTransform);

        // 更新呈现的transforms，
        // 不知道有什么用，说不定可以用来展示matrix
        this._presentationTransforms = transformsClone;
        // update presentation property
        this._presentationScaleX = scaleX;
        this._presentationScaleY = scaleY;
        jqueryObjectFlow.css(
          'transform', this._presentationTransforms.join(' '));

        if (updateModeProperty) {
          // update mode property
          this._transforms.push(scaleTransform);
          this._scaleX = scaleX;
          this._scaleY = scaleY;
        }
      }
    } else {
      xxvLog.warn('invalid param of moveTo: ' + scale.toString());
    }
  }

  /**
   * @inheritdoc
   */
  rotateTo(rotation: XXRotation, updateModeProperty: boolean = true) {
    if (rotation && xxvTypeVerify.isType(rotation, XXRotation)) {
      let angle = rotation.getRotateAngle();
      // NOTE: 忽略旋转轴信息

      if (this._jqueryObject) {
        let jqueryObjectFlow = this._jqueryObject;

        let transformsClone = _.clone(this._transforms);
        let rotateTransform = `rotate(${angle}deg)`;
        transformsClone.push(rotateTransform);

        // 更新呈现的transforms，
        // 不知道有什么用，说不定可以用来展示matrix
        this._presentationTransforms = transformsClone;
        // update presentation property
        this._presentationRotation = angle;

        jqueryObjectFlow.css('transform',
          this._presentationTransforms.join(' '));

        if (updateModeProperty) {
          // update mode property
          this._transforms.push(rotateTransform);
          this._rotation = angle;
        }
      }
    } else {
      xxvLog.warn('invalid param of moveTo: ' + rotation.toString());
    }
  }
}

export default XXNodeDomActor;
export {
  XXNodeDomActorOption,
};
