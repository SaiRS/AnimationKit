// @flow

import XXObject from 'XXFoundation/XXObject.js';
import XXAction from 'XXActionAlias/Action/XXAction.js';
import xxvActionManager from 'XXActionAlias/ActionManager/XXActionManager.js';

import xxvTypeVerify from 'XXTool/TypeVerify.js';

/**
 * 动画作用的对象（动画宿主）
 * 可以执行一系列的动画
 * @class
 */
class XXActor extends XXObject {

  _children: Array<XXActor>;
  _parent: XXActor | null;
  _isShowed: boolean;

  /**
   * 构造函数
   * @param  {String} uuid 唯一标识符
   */
  constructor(uuid: ?string = undefined) {
    super(uuid);

    // 初始化
    this._children = [];
    this._parent = null;
    this._isShowed = false;
  }

  /**
   * 执行动作
   * @param  {XXAction} actionObject 动画对象
   * @param {boolean} startDefault = true 是否默认执行
   * @return {XXActor} 返回当前actor，用于链式执行
   */
  runAction(actionObject: XXAction, startDefault: boolean = true) {
    if (actionObject && xxvTypeVerify.isType(actionObject, XXAction)) {
      actionObject.startWithTarget(this);
      xxvActionManager.addAction(actionObject, startDefault);

      return this;
    } else {
      throw new Error('runAction with an non-action object');
    }
  }

  /** *************************************************
  * 层级操作
  *****************************************************/

  /**
   * 设置父节点，不要直接调用
   * @param {XXActor} parent 父节点对象
   */
  _setParent(parent: XXActor | null) {
    this._parent = parent;
  }

  /**
   * 添加子节点
   * @param {XXActor} child Actor对象
   */
  addChild(child: XXActor) {
    if (child) {
      // 数据
      this._children.push(child);
      child._setParent(this);
      // view
      this.addChildElement(child);
    }
  }

  /**
   * 移除子节点
   * @param {XXActor} child Actor对象
   */
  removeChild(child: XXActor) {
    for (let i = 0; i < this._children.length; i++) {
      let existedChild = this._children[i];

      if (existedChild.isEqualTo(child)) {
        this._children.splice(i, 1);
        child._setParent(null);

        child.removeFromParentTree();
        break;
      }
    }
  }

  /**
   * 清空所有子节点
   */
  removeAllChildren() {
    for (let i = 0; i < this._children.length; i++) {
      let child = this._children[i];
      child._setParent(null);

      child.removeFromParentTree();
    }

    this._children = [];
  }

  /**
   * 从父节点中移除
   */
  removeFromParent() {
    if (this._parent) {
      this._parent.removeChild(this);
    }
  }


  /** **********************
  * 显示部分
  *************************/

  /**
   * 标记已经加入显示
   */
  setShowedInTree() {

  }

  /**
   * 标记没有加入显示
   */
  setHiddenInTree() {
  }

  /**
   * 是否已经标记显示
   * @return {Boolean} [description]
   */
  isShowedInTree() {
    return false;
  }

  /**
   * @override
   * 添加子节点的显示元素
   * @param {[type]} child [description]
   */
  addChildElement(child: XXActor) {

  }

  /**
   * 加入显示
   * @param {mixed} parantNode 父节点
   */
  showInParent(parantNode: mixed) {

  }

  /**
   * 移除显示(view)
   */
  removeFromParentTree() {
    // inherit
  }

  /**
   * 获得用于显示的部分
   * @return {[type]} [description]
   */
  getShowElement() {
    return null;
  }
}

export default XXActor;
