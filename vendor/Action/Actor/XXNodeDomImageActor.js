// @flow
//

import XXNodeDomActor from 'XXActionAlias/Actor/XXNodeDomActor.js';

/**
 * 用来表示图片的Actor类
 */
class XXNodeDomImageActor extends XXNodeDomActor {

  /**
   * @inheritdoc
   */
  createShowElement() {
    let domElement: Element = document.createElement('img');
    return domElement;
  }

  /**
   * 设置图片地址
   * @param {string} src 图片地址
   * @NOTE:
   * 1. 怎么将引用资源加入到工程？
   * 2. 打包时会修改资源名字，怎么处理
   * 3，引用的如果是相对路径，则还会和output设置有关，怎么处理？
   * 4. 引用绝对路径呢？
   */
  setImageSrc(src: string) {
    this._jqueryObject && this._jqueryObject.attr('src', src);
  }
}

export default XXNodeDomImageActor;
export {
  XXNodeDomImageActor,
};
