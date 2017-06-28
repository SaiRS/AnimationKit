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

/**
 * 将nodejs设置为production模式
 * 注意：这句话需要在所有其他任务执行前调用
 */
function setProductionMode() {
  process.env.NODE_ENV = 'production';
}

module.exports = {
  isDevelopMode,
  isProductionMode,

  setProductionMode,
};
