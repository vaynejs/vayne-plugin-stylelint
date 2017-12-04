# vayne-plugin-stylelint
> stylelint 插件

## Installation
```
yarn add vayne-plugin-stylelint -D
npm i vayne-plugin-stylelint -D
```
## Usage
在__.vaynerc.js__ 引入
```js
module.exports = {
  plugins: [
    'vayne-plugin-stylelint' // 获取简写 stylelint
  ]
}
```

## Config 
> 在.vaynerc.js 
```js
module.exports = {
  // 配置见  https://stylelint.io/user-guide/node-api/#syntax
  styleLint: {

  }
}
```

## include
* __stylelint-webpack-plugin__ 
* __stylelint__ 
* __stylelint-config-standard__ 
* __stylelint-processor-html__ 