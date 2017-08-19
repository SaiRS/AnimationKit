// @flow

import XXObject from '../XXObject.js';

/**
 * 物体缩放信息
 */
class XXScale extends XXObject {
  _scaleX: number;
  _scaleY: number;
  _scaleZ: number;

  /**
   * 构造函数
   * @param  {Number} [scaleX=1] x的缩放因子
   * @param  {Number} [scaleY=1] y的缩放因子
   * @param  {Number} [scaleZ=1] z的缩放因子
   */
  constructor(scaleX: number = 1, scaleY: number = 1, scaleZ: number = 1) {
    super();

    // TODO: 数据有效性检验
    this._scaleX = scaleX;
    this._scaleY = scaleY;
    this._scaleZ = scaleZ;
  }

  /**
   * 返回x的缩放因子
   * @return {number}        x的缩放因子
   */
  scaleX(): number {
    return this._scaleX;
  }

  /**
   * 返回y的缩放因子
   * @return {number}        y的缩放因子
   */
  scaleY(): number {
    return this._scaleY;
  }

  /**
   * 返回z的缩放因子
   * @return {number}        z的缩放因子
   */
  scaleZ(): number {
    return this._scaleZ;
  }

  /**
   * 修改x的缩放因子
   * @param {number} newScaleX 新的x的缩放因子
   */
  setScaleX(newScaleX: number) {
    this._scaleX = newScaleX;
  }

  /**
   * 修改y的缩放因子
   * @param {number} newScaleY 新的y的缩放因子
   */
  setScaleY(newScaleY: number) {
    this._scaleY = newScaleY;
  }

  /**
   * 修改z的缩放因子
   * @param {number} newScaleZ 新的z的缩放因子
   */
  setScaleZ(newScaleZ: number) {
    this._scaleZ = newScaleZ;
  }

  /**
   * @inheritdoc
   */
  showInfo(output: Object = console) {
    output.info(this.toString());
  }

  /**
   * @inheritdoc
   */
  toString(): string {
    let str: string =
    `scaleX = ${this.scaleX()}, y = ${this.scaleY()}, z = ${this.scaleZ()}`;

    return str;
  }
}

export default XXScale;
