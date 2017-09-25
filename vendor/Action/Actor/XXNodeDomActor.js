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
  _showed: boolean; // 是否在body中了
  // 模型树的属性

  _rotationZ: number;
  _rotationX: number;
  _rotationY: number;

  _scaleX: number;
  _scaleY: number;
  _scaleZ: number;

  _positionX: number;
  _positionY: number;
  _positionZ: number;


  /**
   * @inheritdoc
   * @param  {[string, dom, jquery-object]} domNode
   * dom选择器， dom对象， jquery对象, 如果不传，则会创建一个新对象
   * @param  {[string]} uuid 对象的唯一标识符
   * @throws {Error} domSeletor应该是一个正确的字符串
   */
  constructor(domNode: string | null,
    uuid: ?string = undefined) {
    super(uuid);

    this.reset();

    this._jqueryObject = $(domNode);
    if (!this._jqueryObject.length) {
      this.createShowElement();
      this._showed = false;
      // throw new Error(`[XXNodeDomActor] 使用错误的参数:来创建XXNodeDomActor对象`);
    } else {
      this._showed = true;
    }
  }

  /**
   * inheirtdoc
   */
  reset() {
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
   * 创建显示元素，子类需要继承，从而得到不同的显示元素
   */
  createShowElement() {
    let domElement = document.createElement('div');
    this._jqueryObject = $(domElement);
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
  scale(): ?XXScale {
    return new XXScale(this._scaleX, this._scaleY);
  }


  /**
   * @inheritdoc
   */
  rotation(): XXRotation | null {
    return new XXRotation(this._rotationZ);
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

  /**
   * @inheritdoc
   */
  show() {
    this._jqueryObject && this._jqueryObject.show();
  }

  /**
   * @inheritdoc
   */
  hide() {
    this._jqueryObject && this._jqueryObject.hide();
  }

  /**
   * @inheritdoc
   */
  getShowElement() {
    return this._jqueryObject;
  }

  /**
   * @inheritdoc
   */
  addChildElement(actor: XXActor) {
    if (this._jqueryObject && actor) {
      this._jqueryObject.append(actor.getShowElement());

      if (this.isShowedInTree()) {
        actor.setShowedInTree();
      } else {
        actor.setHiddenInTree();
      }
    }
  }

  /**
   * @inheritdoc
   */
  setShowedInTree() {
    this._showed = true;
  }

  /**
   * @inheritdoc
   */
  setHiddenInTree() {
    this._showed = false;
  }

  /**
   * @inheritdoc
   */
  isShowedInTree() {
    return this._showed;
  }

  /**
   * @inheritdoc
   * parentNode为dom节点或者元素选择器
   */
  showInParent(parantNode: Object | string) {
    if (!this._showed) {
      $(parantNode).append(this.getShowElement());
      // 事件
      this.initEvent();

      this.setShowedInTree();
      for (let i = 0; i < this._children.length; i++) {
        this._children[i].setShowedInTree();
      }
    }
  }

  /**
   * @inheritdoc
   */
  removeFromParentTree() {
    if (this._jqueryObject) {
      this._jqueryObject.remove();

      this.setHiddenInTree();
      for (let i = 0; i < this._children.length; i++) {
        this._children[i].setHiddenInTree();
      }
    }
  }


  /** *********************
  * 事件
  ************************/

  /**
   * 初始化事件
   * @override
   * 子类继承重写，可以提供自定义的事件
   */
  initEvent() {
    this.clearAllEvent();
  }


  /**
   * 移除所有事件
   */
  clearAllEvent() {
    if (this._jqueryObject) {
        // TODO:
    }
  }

  /**
   * 添加一个事件监听
   * @param {Object} eventListener 拥有handleEvent方法的对象
   */
  addEventListener(eventListener: {handleEvent: ()=>{}}) {

  }

  /**
   * 这个方法使得我们对象成为一个EventListener对象
   * @param  {event} event 事件
   */
  handleEvent(event: Event) {

  }

  /**
   * [postEvent description]
   */
  postEvent() {

  }

  /** ********************
  * UI属性调整
  ************************/

  /**
   * 修改样式
   * @private
   * @param  {[type]} property      [description]
   * @param  {[type]} propertyValue [description
   */
  _css(property: string, propertyValue: mixed) {
    if (this._jqueryObject) {
      this._jqueryObject.css(property, propertyValue);
    }
  }
}

export default XXNodeDomActor;
export {
  XXNodeActorState,
};
