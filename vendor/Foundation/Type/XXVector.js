// @flow
//
import XXObject from '../XXObject.js';

/**
 * 矢量类
 */
class XXVector extends XXObject {

  _x: number;
  _y: number;
  _z: number;

  /**
   * 矢量的构造函数
   * @param  {number} x x轴分量
   * @param  {number} y y轴分量
   * @param  {number} z z轴分量
   */
  constructor(x: number, y: number, z: number) {
    super();

    this._x = x;
    this._y = y;
    this._z = z;
  }

  /**
   * 矢量单位化
   */
  normalize() {
  }
}

export default XXVector;
