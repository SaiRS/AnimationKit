// @flow

import XXNodeActor from './XXNodeActor.js';

import XXNodeActorState from './XXNodeActorState.js';

import $ from 'jquery';

import XXPosition from 'XXFoundation/Type/XXPosition.js';
import XXScale from 'XXFoundation/Type/XXScale.js';
import XXRotation from 'XXFoundation/Type/XXRotation.js';
import xxvTypeVerify from 'XXTool/TypeVerify.js';
import xxvLog from 'XXTool/LogTool.js';

/**
 * 需要传递dom对象的动画宿主对象
 */
class XXNodeDomActor extends XXNodeActor {

  _jqueryObject: null;

  // _scale: null | XXScale;
  // _rotationZ: null | XXRotation;

  // 模型树的属性

  // NOTE: 这个数组记录了应用于css transform的一系列变化
  // 在执行动画时，因为会覆盖css transform的值，
  // 如果没有记录之前的变化，则不能实现在当前状态下无缝的执行下一个动画
  _transforms: Array<string>;

  _rotationZ: number;
  _rotationX: number;
  _rotationY: number;

  _scaleX: number;
  _scaleY: number;
  _scaleZ: number;

  _positionX: number;
  _positionY: number;
  _positionZ: number;

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
   * @throws {Error} domSeletor应该是一个正确的字符串
   */
  constructor(domNode: string,
    uuid: ?string = undefined) {
    super(uuid);

    this._jqueryObject = $(domNode);
    if (!this._jqueryObject.length) {
      throw new Error(`[XXNodeDomActor] 使用错误的参数:来创建XXNodeDomActor对象`);
    }

    this.reset();
  }

  /**
   * inheirtdoc
   */
  reset() {
    this._transforms = [];

    this._rotationX = 0;
    this._rotationY = 0;
    this._rotationZ = 0;

    this._scaleX = 1;
    this._scaleY = 1;
    this._scaleZ = 1;

    this._positionX = 0;
    this._positionY = 0;
    this._positionZ = 0;
  }

  /**
   * @inheritdoc
   */
  restoreState(state: XXNodeActorState) {
    this._positionX = state.getPositionX();
    this._positionY = state.getPositionY();
    this._positionZ = state.getPositionZ();

    this._scaleX = state.getScaleX();
    this._scaleY = state.getScaleY();
    this._scaleZ = state.getScaleZ();

    this._rotationX = state.getRotationX();
    this._rotationY = state.getRotationY();
    this._rotationZ = state.getRotationZ();

    this._update();
  }

  /**
   * @inheritdoc
   */
  getState(): XXNodeActorState {
    return new XXNodeActorState(
      this._rotationZ,
      this._scaleX,
      this._scaleY,
      this._positionX,
      this._positionY,

      this._rotationX,
      this._rotationY,
      this._scaleZ,
      this._positionZ
    );
  }


  /**
   * @private
   * 用来刷新ui
   */
  _update() {
    if (this._jqueryObject) {
      this._jqueryObject.css('transform', this._buildTransform());
    }
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
    return new XXRotation(this._rotationZ);
  }

  /**
   * @inheritdoc
   */
  presentationRotation(): XXRotation | null {
    return new XXRotation(this._presentationRotation);
  }

  /**
   * 由position, rotate, scale生成对应的transform字符串
   * @return {string}   应用在css transform的字符串
   */
  _buildTransform(): string {
    let transforms: Array<string> = [];

    if (0 != this._positionX) {
      transforms.push(`translateX(${this._positionX}px)`);
    }

    if (0 != this._positionY) {
      transforms.push(`translateY(${this._positionY}px)`);
    }

    if (0 != this._rotationZ) {
      transforms.push(`rotateZ(${this._rotationZ}deg)`);
    }

    if (1 != this._scaleX) {
      transforms.push(`scaleX(${this._scaleX})`);
    }

    if (1 != this._scaleY) {
      transforms.push(`scaleY(${this._scaleY})`);
    }

    return transforms.join(' ');
  }

  /**
   * @inheritdoc
   */
  moveTo(position: XXPosition, updateModeProperty: boolean = true): void {
    // inherit by subclass
    if (position && xxvTypeVerify.isType(position, XXPosition)) {
      // update mode property
      this._positionX = position.posX();
      this._positionY = position.posY();

      this._update();
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

      this._scaleX = scaleX;
      this._scaleY = scaleY;

      this._update();
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
      this._rotationZ = angle;
      this._update();
    } else {
      xxvLog.warn('invalid param of moveTo: ' + rotation.toString());
    }
  }
}

export default XXNodeDomActor;
export {
  XXNodeActorState,
};
