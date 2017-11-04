// @flow

import {XXNodeGraphParser} from 'XXVendor/Loader/DataParser/XXNodeGraphParser.js';
/**
 * NodeGraph数据解析的plugin
 * @type {Object}
 */
let XXNodeGraphParserPlugin = {};

/**
 * 插件需要实现的方法
 * @param  {[type]} Vue     [description]
 * @param  {[type]} options [description]
 */
XXNodeGraphParserPlugin.install = function(Vue: Object, options: Object) {
  Vue.prototype.$getUUID = function(nodeGraph) {
    return XXNodeGraphParser.getUUID(nodeGraph);
  };
};

export {XXNodeGraphParserPlugin};
