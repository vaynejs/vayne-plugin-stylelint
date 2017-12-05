const _ = require('lodash')
const StyleLintPlugin = require('stylelint-webpack-plugin')

// 默认配置
const defaultOptions = {
  files: ['src/**/*.vue', 'src/**/*.scss'],
  syntax: 'scss'
}

/**
 *
 * vayne stylelint 插件
 * @param {any} config vayne 配置
 * @param {any} log  vayne log
 * @param {any} utils vayne 工具库
 * @returns webpack stylelint plugins
 */
class VaynePluginStyleLint {
  constructor(config, log) {
    log.debug('开始解析 vayne stylelint 插件')
    let styleLint = config.styleLint || {}
    let opts = _.defaultsDeep(defaultOptions, styleLint)
    if (styleLint.files) {
      opts.files = _.union(defaultOptions.files, styleLint.files)
    }
    log.debug(opts)
    this.name = 'VaynePluginStyleLint'

    return {
      plugins: [
        new StyleLintPlugin(opts)
      ]
    }
  }
}

module.exports = VaynePluginStyleLint
