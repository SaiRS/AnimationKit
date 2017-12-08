// @flow

import {XXNodeGraphParser} from 'XXVendor/Loader/DataParser/XXNodeGraphParser.js';
import {XXActionConfigParser} from 'XXVendor/Loader/DataParser/XXActionConfigParser.js';
/**
 * NodeGraph数据解析的plugin
 * @type {Object}
 */
let XXDataParserPlugin = {};

/**
 * 插件需要实现的方法
 * @param  {[type]} Vue     [description]
 * @param  {[type]} options [description]
 */
XXDataParserPlugin.install = function(Vue: Object, options: Object) {
  Vue.prototype.$nodeGraphParser = XXNodeGraphParser;

  Vue.prototype.$actionConfigParser = XXActionConfigParser;
};

export {XXDataParserPlugin};
