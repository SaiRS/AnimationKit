let XXConfirmView = {};

XXConfirmView.install = function(Vue, options) {
  /**
   * 显示确认对话框
   * @param       {string} title          [description]
   * @param       {string} desc           [description]
   * @param       {Function} okCallBack     [description]
   * @param       {Function} cancelCallBack [description]
   */
  Vue.prototype.$showConfirmView =
    function(title, desc, okCallBack, cancelCallBack) {
      this.$Modal.confirm({
        title: title,
        content: desc,
        onOk: okCallBack,
        onCancel: cancelCallBack,
      });
    };
};

export default XXConfirmView;
