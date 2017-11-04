let XXNoticeView = {};

XXNoticeView.install = function(Vue, options) {
  /**
   * 一般信息的notice
   * @param  {String} [title=''] 标题
   * @param  {String} [desc='']  描述
   */
  Vue.prototype.$showInfoNoticeView = function(title = '', desc = '') {
    this.$Notice.info({
      title: title,
      desc: desc,
    });
  };

  /**
   * 警告信息的notice
   * @param  {String} [title=''] 标题
   * @param  {String} [desc='']  描述
   */
  Vue.prototype.$showWarningNoticeView = function(title = '', desc = '') {
    this.$Notice.warning({
      title: title,
      desc: desc,
    });
  };

  /**
   * 成功信息的notice
   * @param  {String} [title=''] 标题
   * @param  {String} [desc='']  描述
   */
  Vue.prototype.$showSuccessNoticeView = function(title = '', desc = '') {
    this.$Notice.success({
      title: title,
      desc: desc,
    });
  };

  /**
   * 错误信息的notice
   * @param  {String} [title=''] 标题
   * @param  {String} [desc='']  描述
   */
  Vue.prototype.$showErrorNoticeView = function(title = '', desc = '') {
    this.$Notice.error({
      title: title,
      desc: desc,
    });
  };
};

export default XXNoticeView;
