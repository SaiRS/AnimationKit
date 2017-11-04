let XXAlertView = {};

XXAlertView.install = function(Vue, options) {
  /**
   * 显示成功的AlertView
   * @param  {string} title 标题
   * @param  {string} desc  描述
   */
  Vue.prototype.$showSuccessAlertView = function(title, desc) {
    this.$Modal.success({
      title: title,
      content: desc,
    });
  };

  /**
   * 显示错误的AlertView
   * @param  {string} title 标题
   * @param  {string} desc  描述
   */
  Vue.prototype.$showErrorAlertView = function(title, desc) {
    this.$Modal.error({
      title: title,
      content: desc,
    });
  };

  /**
   * 显示警告的AlertView
   * @param  {string} title 标题
   * @param  {string} desc  描述
   */
  Vue.prototype.$showWarningAlertView = function(title, desc) {
    this.$Modal.error({
      title: title,
      content: desc,
    });
  };

  /**
   * 显示一般的AlertView
   * @param  {string} title 标题
   * @param  {string} desc  描述
   */
  Vue.prototype.$showInfoAlertView = function(title, desc) {
    this.$Modal.info({
      title: title,
      content: desc,
    });
  };
};

export default XXAlertView;
