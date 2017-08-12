// @flow

import XXObject from '../XXObject.js';

/**
 * 用来表示位置的对象
 */
class XXPosition extends XXObject {

  _x: number;
  _y: number;
  _z: number;

  /**
   * 创建position对象
   * @param  {number} x x坐标值
   * @param  {number} y y坐标值
   * @param  {number} z z坐标值
   */
  constructor(x: number = 0, y: number = 0, z: number = 0) {
    super();

    this._x = x;
    this._y = y;
    this._z = z;
  }

  /**
   * 获得position对象的x坐标
   * @return {number}         x坐标值
   */
  posX(): number {
    return this._x;
  }

  /**
   * 获得position对象的y坐标
   * @return {number}         y坐标值
   */
  posY(): number {
    return this._y;
  }

  /**
   * 获得position对象的z坐标
   * @return {number}         z坐标值
   */
  posZ(): number {
    return this._z;
  }

  /**
   * 修改x坐标值
   * @param {number} newX 新的x坐标值
   * @return {XXPosition} 修改后的坐标对象
   */
  setPosX(newX: number): XXPosition {
    this._x = newX;

    return this;
  }

  /**
   * 修改y坐标值
   * @param {number} newY 新的y坐标值
   * @return {XXPosition} 修改后的坐标对象
   */
  setPosY(newY: number): XXPosition {
    this._y = newY;
    return this;
  }

  /**
   * 修改z坐标值
   * @param {number} newZ 新的z坐标值
   * @return {XXPosition} 修改后的坐标对象
   */
  setPosZ(newZ: number): XXPosition {
    this._z = newZ;

    return this;
  }

  /**
   * @inheritdoc
   */
  showInfo(output = console) {
    output.info(`x = ${this._x}, y = ${this._y}, z = ${this._z}`);
  }

  /**
   * 同时修改x,y,z的坐标
   * @param {XXPosition} position 坐标对象
   * @return {XXPosition} 修改后的坐标对象
   */
  add(position: XXPosition): XXPosition {
    this._x += position.posX();
    this._y += position.posY();
    this._z += position.posZ();

    return this;
  }

  /**
   * [scaleBy description]
   * @param  {[type]} factor [description]
   * @return {[type]}        [description]
   */
  scaleBy(factor): XXPosition {
    return this;
  }
}

export {XXPosition};
