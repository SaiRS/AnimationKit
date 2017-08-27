// @flow

import XXObject from 'XXFoundation/XXObject.js';

/**
 * 用来表示节点的状态，
 * 用来保存，恢复节点状态
 * @class
 */
class XXNodeActorState extends XXObject {
  rotationX: number;
  rotationY: number;
  rotationZ: number;

  scaleX: number;
  scaleY: number;
  scaleZ: number;

  positionX: number;
  positionY: number;
  positionZ: number;

  /**
   * 构造函数
   * @param {number} rotateZ 对象的rotateZ的值，单位deg
   * @param {number} scaleX 对象的scaleX的值
   * @param {number} scaleY 对象的scaleY的值
   * @param {number} positionX 对象的positionX的值
   * @param {number} positionY 对象的positionY的值
   *
   * @param {number} rotateX 对象的rotateX的值，单位deg
   * @param {number} rotateY 对象的rotateY的值，单位deg
   * @param {number} scaleZ 对象的positionX的值
   * @param {number} positionZ 对象的positionY的值
   */
  constructor(
    rotateZ: number = 0,
    scaleX: number = 1,
    scaleY: number = 1,
    positionX: number = 0,
    positionY: number = 0,

    rotateX: number = 0,
    rotateY: number = 0,
    scaleZ: number = 1,
    positionZ: number = 0) {
    super();
    this._init(rotateZ, scaleX, scaleY, positionX, positionY,
      rotateX, rotateY, scaleZ, positionZ);
  }

  /**
   * 初始化
   * @param {number} rotateZ 对象的rotateZ的值，单位deg
   * @param {number} scaleX 对象的scaleX的值
   * @param {number} scaleY 对象的scaleY的值
   * @param {number} positionX 对象的positionX的值
   * @param {number} positionY 对象的positionY的值
   *
   * @param {number} rotateX 对象的rotateX的值，单位deg
   * @param {number} rotateY 对象的rotateY的值，单位deg
   * @param {number} scaleZ 对象的positionX的值
   * @param {number} positionZ 对象的positionY的值
   */
  _init(
    rotateZ: number = 0,
    scaleX: number = 1,
    scaleY: number = 1,
    positionX: number = 0,
    positionY: number = 0,

    rotateX: number = 0,
    rotateY: number = 0,
    scaleZ: number = 1,
    positionZ: number = 0) {
    // 变量赋值
    this.rotationZ = rotateZ;
    this.scaleX = scaleX;
    this.scaleY = scaleY;
    this.positionX = positionX;
    this.positionY = positionY;

    this.rotationX = rotateX;
    this.rotationY = rotateY;
    this.scaleZ = scaleZ;
    this.positionZ = positionZ;
  }

  /**
   * 获得的positionX的值
   * @return {number} 获得的positionX的值
   */
  getPositionX(): number {
    return this.positionX;
  }

  /**
   * 获得的positionY的值
   * @return {number} 获得的positionY的值
   */
  getPositionY(): number {
    return this.positionY;
  }

  /**
   * 获得的positionZ的值
   * @return {number} 获得的positionZ的值
   */
  getPositionZ(): number {
    return this.positionZ;
  }

  /**
   * 获得的scaleX的值
   * @return {number} 获得的scaleX的值
   */
  getScaleX(): number {
    return this.scaleX || 1;
  }

  /**
   * 获得的scaleY的值
   * @return {number} 获得的scaleY的值
   */
  getScaleY(): number {
    return this.scaleY || 1;
  }

  /**
   * 获得的scaleZ的值
   * @return {number} 获得的scaleZ的值
   */
  getScaleZ(): number {
    return this.scaleZ || 1;
  }

  /**
   * 获得的rotateZ的值, 单位deg
   * @return {number} 获得的rotateZ的值
   */
  getRotationZ(): number {
    return this.rotationZ || 0;
  }

  /**
   * 获得的rotationX的值, 单位deg
   * @return {number} 获得的rotationX的值
   */
  getRotationX(): number {
    return this.rotationX || 0;
  }

  /**
   * 获得的rotationY的值, 单位deg
   * @return {number} 获得的rotationY的值
   */
  getRotationY(): number {
    return this.rotationY || 0;
  }
}

export default XXNodeActorState;
