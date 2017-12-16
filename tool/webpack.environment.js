/**
 * 是否是开发模式运行webpack
 * @return {Boolean} 非production返回true, 否则返回false
 */
function isDevelopMode() {
  return process.env.NODE_ENV !== 'production';
}

/**
 * 是否是生产环境运行webpack
 * @return {Boolean} nodejs以production运行时返回true, 否则返回false
 */
function isProductionMode() {
  return !isDevelopMode();
}


module.exports = {
  isDevelopMode,
  isProductionMode,
};
