// @flow

import {fGeneratorUUID} from '../Tool/GeneratorTool.js';
/**
 * 用于表示动画库中所有对象的基类，
 * 其他一切对象都是直接或者间接继承自XXObject
 * @class
 * @type {[XXObject]}
 */
class XXObject {
  /**
   * 对象唯一标识符
   * @private
   * @type {String}
   */
  _uuid: '';  //

  /**
   * 对象的名字，用于显示
   * @public
   * @type {String}
   */
  name: ''

  /**
   * 构造函数
   * @param  {String} uuid 唯一标识符
   */
  constructor(uuid: string) {
    if (new.target === XXObject) {
      if (uuid && typeof uuid === 'string') {
        this._uuid = uuid;
      } else {
        this._uuid = fGeneratorUUID();
      }
    } else {
      throw new Error('请使用new XXObject生成实例对象');
    }
  }

  /**
   * 获得对象的唯一标识符
   * @return {[String]} [唯一标志服]
   */
  get UUID() {
    return this._uuid;
  }

  /**
   * [显示对象的有关信息]
   * @param {[Object]} [output=console] [类console对象，实现了console输出的有关接口的对象]
   */
  printInfo(output = console) {
    output.log('===========Object Info================');
    output.log(`Object name: ${this.name}`);
    output.log(`Object uuid: ${this.UUID}`);
    this.showInfo(output);
    output.log(`Object version: ${Object.getStringVersion()}`);
    output.log('=====================================');
  }

  /**
   * [输出对象的信息]
   * @param  {[Object]} [output=console] [类console对象，实现了console输出的有关接口的对象]
   */
  showInfo(output = console) {
    // 由子类重载
  }

  /**
   * 获得版本的所有信息，返回一个Object对象，结构为
   * {
   *  stringVersion: 'string',
   *  numberVersion: number,
   *  aliasVersion: 'aliasVersion'
   * }
   * @return {[Object]} [版本号信息]
   */
  static getVersion(): Object {
    return {
      stringVersion: XXObject.getStringVersion(),
      numberVersion: XXObject.getNumberVersion(),
      aliasVersion: XXObject.getAliasVersion(),
    };
  }

  /**
   * 获得对象的字符版本号，格式为x.x.x.x
   * 请确保对象的所有版本号都是一一对应的，不能重复
   * @return {[string]} [字符版本号]
   */
  static getStringVersion(): string {
    return '1.0.0.0';
  }

  /**
   * [获得对象的数字版本号, 格式为x，]
   * 请确保对象的所有版本号都是一一对应的，不能重复
   * @return {[number]} [数字版本号]
   */
  static getNumberVersion(): number {
    return 1;
  }

  /**
   * [获得对象版本的别名]
   * 请确保对象的所有版本号都是一一对应的，不能重复
   * @return {[string]} [版本的别名]
   */
  static getAliasVersion(): string {
    return 'Girl';
  }
}

/**
 * add some static property
 * @example
 * XXObject.staticProperty = 'static property test'
 */


export default XXObject;
