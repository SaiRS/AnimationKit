// @flow

import {XXNodeGraphParser} from 'XXVendor/Loader/DataParser/XXNodeGraphParser.js';
import {XXActionConfigParser} from 'XXVendor/Loader/DataParser/XXActionConfigParser.js';
import {XXActionsPropertyParser} from 'XXVendor/Loader/DataParser/XXActionsPropertionParser.js';
import {XXActionPropertyParser} from 'XXVendor/Loader/DataParser/XXActionPropertyParser.js';
import {XXSceneInfoParser} from 'XXRenderer/js/Scene/XXSceneInfoParser.js';
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
  Vue.prototype.$actionsInfoParser = XXActionsPropertyParser;
  Vue.prototype.$actionInfoParser = XXActionPropertyParser;

  Vue.prototype.$sceneInfoParser = XXSceneInfoParser;
};

export {XXDataParserPlugin};
