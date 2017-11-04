let XXObjectLike = {};

XXObjectLike.install = function(Vue, options) {
  Vue.prototype.UUID = function() {
    return this._uid;
  };

  Vue.prototype.isEqualTo = function(objectLike) {
    return this.UUID === objectLike.UUID;
  };
};

export default XXObjectLike;
