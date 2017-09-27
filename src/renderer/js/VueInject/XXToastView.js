
let XXToastView = {};

XXToastView.install = function(Vue, option) {
  /**
   * 显示成功的toast
   * @param  {string} tip 提示文字
   */
  Vue.prototype.$showSuccessToastView = function(tip) {
    this.$Message.success({
      content: tip,
      duration: 1.5,
      closable: true,
    });
  };


  /**
   * 显示警告的toast
   * @param  {string} tip 提示文字
   */
  Vue.prototype.$showWarningToastView = function(tip) {
    this.$Message.warning({
      content: tip,
      duration: 1.5,
      closable: true,
    });
  };

  /**
   * 显示错误的toast
   * @param  {string} tip 提示文字
   */
  Vue.prototype.$showErrorToastView = function(tip) {
    this.$Message.error({
      content: tip,
      duration: 1.5,
      closable: true,
    });
  };

  /**
   * 显示一般的toast
   * @param  {string} tip 提示文字
   */
  Vue.prototype.$showInfoToastView = function(tip) {
    this.$Message.info({
      content: tip,
      duration: 1.5,
      closable: true,
    });
  };
};


export default XXToastView;
