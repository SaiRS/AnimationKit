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
   * @return {XXVector} 单位矢量
   */
  normalize(): XXVector {
    // TODO:
    return this;
  }

  /**
   * @inheritdoc
   */
  toString(): string {
    let str: string =
    `xAxis =  ${this._x}, yAxis = ${this._y}, zAxis = ${this._z}`;

    return str;
  }

  /**
   * @inheritdoc
   */
  showInfo(output: Object = console) {
    output.info(this.toString());
  }
}

export default XXVector;

/*
 * some constant vectors
 */
let xxcXAXIS = new XXVector(1, 0, 0);
let xxcYAXIS = new XXVector(0, 1, 0);
let xxcZAXIS = new XXVector(0, 0, 1);
export {
  xxcXAXIS,
  xxcYAXIS,
  xxcZAXIS,
};
