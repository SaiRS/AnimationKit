
// import Vue from 'vue';
import XXStaticTipView from './XXStaticTipView.vue';

let XXAlertView = {};
XXAlertView.install = function(Vue, options) {
  /** **********************
  *  添加实例方法
  *************************/

  /**
   * 显示static tip view
   * @param       {dom} el    dom节点
   * @param       {string} type  类型
   * @param       {string} title 标题
   * @param       {string} des   描述
   */
  function _showStaticTipView(el, type, title, des) {
    new Vue({
      el: el,
      template: `<XXStaticTipView alertType=${type}
                                 alertTitle=${title}
                                 alertDesc=${des}>
                  </XXStaticTipView>`,
      components: {
        XXStaticTipView: XXStaticTipView,
      },
      data: {
        type: 'success',
        alertTitle: 'title',
        alertDesc: 'des',
      },
    });
  }

  /**
   * 显示成功的tipView
   * @param  {String} [title=''] [description]
   * @param  {String} [des='']   [description]
   */
  Vue.prototype.$showSuccessStaticTipView = function(title = '', des = '') {
    // 逻辑...
    let div = document.createElement('div');
    document.body.appendChild(div);

    _showStaticTipView(div, 'success', title, des);
  };

  /**
   * 显示错误的tipView
   * @param  {String} [title=''] [description]
   * @param  {String} [des='']   [description]
   */
  Vue.prototype.$showErrorStaticTipView = function(title = '', des = '') {
    // 逻辑...
    let div = document.createElement('div');
    document.body.appendChild(div);

    _showStaticTipView(div, 'error', title, des);
  };

  /**
   * 显示警告的tipView
   * @param  {String} [title=''] [description]
   * @param  {String} [des='']   [description]
   */
  Vue.prototype.$showWarningStaticTipView = function(title = '', des = '') {
    // 逻辑...
    let div = document.createElement('div');
    document.body.appendChild(div);

    _showStaticTipView(div, 'warning', title, des);
  };

  /**
   * 显示一般的tipView
   * @param  {String} [title=''] [description]
   * @param  {String} [des='']   [description]
   */
  Vue.prototype.$showInfoStaticTipView = function(title = '', des = '') {
    // 逻辑...
    let div = document.createElement('div');
    document.body.appendChild(div);

    _showStaticTipView(div, 'info', title, des);
  };
};

export default XXAlertView;
