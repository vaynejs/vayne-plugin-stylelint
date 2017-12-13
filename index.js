const _ = require('lodash')
const StyleLintPlugin = require('stylelint-webpack-plugin')

// 默认配置
const defaultOptions = {
  files: ['scss/**/*.scss', 'src/**/*.vue', 'src/**/*.scss'],
  customSyntax: 'postcss-html',
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
    let opts = _.assign({}, defaultOptions, styleLint)
    // 之后写个keys 验证 最后的files 是不是两个相合
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
