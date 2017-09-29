// @flow
//

import XXNodeDomActor from 'XXActionAlias/Actor/XXNodeDomActor.js';
import $ from 'jquery';
/**
 * 用来表示文字的Actor类
 */
class XXNodeDomTextActor extends XXNodeDomActor {

  _texts: Array<String>;

  /**
   * @inheritdoc
   */
  createShowElement() {
    let domElement: Element = document.createElement('div');
    return domElement;
  }

  /**
   * [_createSubTextElement description]
   * @param {string} text
   * @param {Object} props
   * @return {[type]} [description]
   */
  _createSubTextElement(text: string, props: Object = {}) {
    let span = document.createElement('span');

    let spanJQuery = $(span);
    spanJQuery.text(text);

    for (let key in props) {
      if (props.hasOwnProperty(key)) {
        spanJQuery.css(key, props[key]);
      }
    }

    return span;
  }

  /**
   * 设置文字
   * @param {string} text
   * @param {Object} props
   */
  addText(text: string, props: Object) {
    let span = this._createSubTextElement(text, props);

    this._jqueryObject && this._jqueryObject.append(span);
  }

  /**
   * 修改文字
   * @param  {[type]} start   [description]
   * @param  {[type]} length  [description]
   * @param  {[type]} newText [description]
   * @param  {[type]} props   [description]
   */
  modifyText(start: number, length: number, newText: string, props: Object) {
    if (this._jqueryObject) {
      let jqueryObjectFlow = this._jqueryObject;

      // 目前的子元素
      let elements = jqueryObjectFlow.children('span');
      let textArray = [];
      for (let i = 0; i < elements.length; i++) {
        let existText = $(elements[i]).text();
        textArray.push(existText);
      }
      let allText = textArray.join('');


      // 限制范围
      start = (start < 0) ? 0 :
                (start > allText.length - 1) ? allText.length - 1 : start;
      length = (length < 0) ? 1 : length;
      if (start + length > allText.length) {
        length = allText.length - start;
      }

      // 获得每个单词的开头的index
      let indexOfWords = [0];
      for (let i = 1; i < textArray.length; i++) {
        let wordLength = textArray[i].length;
        indexOfWords[i] = indexOfWords[i-1] + wordLength;
      }

      // 找到需要修改的单词
      let startWordIndex = this._findIndex(start, indexOfWords);
      let lastWordIndex = this._findIndex(start+length-1, indexOfWords);

      let startOfFirshWord = start - indexOfWords[startWordIndex];
      let startOfLastWord = (start+length-1) - indexOfWords[lastWordIndex];


      // 单词剩余的词
      let firstWordLefted =
        textArray[startWordIndex].substr(0, startOfFirshWord);
      let lastWordLefted =
        textArray[lastWordIndex].substr(startOfLastWord);


      // 不是同一个单词，或者修改属性
      if ((startWordIndex !== lastWordIndex) || props ) {
        let newElement = this._createSubTextElement(newText, props);
        $(newElement).insertAfter(elements[startWordIndex]);

        // 处理第一个单词

        let oldFirstWordLefted = $(elements[startWordIndex]).clone();
        // 删除旧元素
        $(elements[startWordIndex]).remove();
        if (firstWordLefted) {
          oldFirstWordLefted.text(firstWordLefted);
          // 添加第一个单词剩余的元素
          oldFirstWordLefted.insertBefore(newElement);
        }
        //
        // 处理最后一个单词
        // 获得旧属性
        let oldLastWordLefted = $(elements[lastWordIndex]).clone();
        // 删除旧元素
        $(elements[lastWordIndex]).remove();
        if (lastWordLefted) {
          oldLastWordLefted.text(lastWordLefted);
          // 添加旧元素
          oldLastWordLefted.insertAfter(newElement);
        }

        // 移除中间的其他元素
        for (let i = startWordIndex + 1; i < lastWordIndex - 1; i++) {
          $(elements[i]).remove();
        }
      } else {
        // 相同单词不修改属性，直接替换文本
        $(elements[startOfFirshWord]).text(
          firstWordLefted+newText+lastWordLefted);
      }
    }
  }

  /**
   * 删除文字
   * @param  {[type]} start  [description]
   * @param  {[type]} length [description]
   */
  deleteText(start: number, length: number) {
    if (this._jqueryObject) {
      let jqueryObjectFlow = this._jqueryObject;

      // 目前的子元素
      let elements = jqueryObjectFlow.children('span');
      let textArray = [];
      for (let i = 0; i < elements.length; i++) {
        let existText = $(elements[i]).text();
        textArray.push(existText);
      }
      let allText = textArray.join('');


      // 限制范围
      start = (start < 0) ? 0 :
                (start > allText.length - 1) ? allText.length - 1 : start;
      length = (length < 0) ? 1 : length;
      if (start + length > allText.length) {
        length = allText.length - start;
      }

      // 获得每个单词的开头的index
      let indexOfWords = [0];
      for (let i = 1; i < textArray.length; i++) {
        let wordLength = textArray[i].length;
        indexOfWords[i] = indexOfWords[i-1] + wordLength;
      }

      // 找到需要修改的单词
      let startWordIndex = this._findIndex(start, indexOfWords);
      let lastWordIndex = this._findIndex(start+length-1, indexOfWords);

      let startOfFirshWord = start - indexOfWords[startWordIndex];
      let startOfLastWord = (start+length-1) - indexOfWords[lastWordIndex];


      // 单词剩余的词
      let firstWordLefted =
        textArray[startWordIndex].substr(0, startOfFirshWord);
      let lastWordLefted =
        textArray[lastWordIndex].substr(startOfLastWord);

      if (startWordIndex !== lastWordIndex) { // 不是同一个单词
        if (firstWordLefted) {
          $(elements[startWordIndex]).text(firstWordLefted);
        } else {
          $(elements[startWordIndex]).remove();
        }

        if (lastWordLefted) {
          $(elements[lastWordIndex]).text(lastWordLefted);
        } else {
          $(elements[lastWordIndex]).remove();
        }

        // 移除中间的其他元素
        for (let i = startWordIndex + 1; i < lastWordIndex - 1; i++) {
          $(elements[i]).remove();
        }
      } else {
        let lefted = firstWordLefted + lastWordLefted;
        if (lefted) {
          // 修改
          $(elements[startWordIndex]).text(lefted);
        } else {
          // 直接删除
          $(elements[startWordIndex]).remove();
        }
      }
    }
  }

  /**
   * 插入新文字
   * @param  {[type]} start [description]
   * @param  {[type]} text  [description]
   * @param {[Object]} props
   */
  insertText(start: number, text: string, props: Object) {
    this.modifyText(start, 1, text, props);
  }

  /**
   * 找到order在array中对应的index位置
   * @param       {[type]} order [description]
   * @param       {[type]} array [description]
   * @return {number}
   */
  _findIndex(order: number, array: Array<number>) {
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] <= order && array[i+1] > order) {
        return i;
      }
    }

    return array.length - 1;
  }

}

export default XXNodeDomTextActor;
export {
  XXNodeDomTextActor,
};
