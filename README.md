# yocee [![NPM Version][npm-image]][npm-url] [![NPM Downloads][downloads-image]][downloads-url] [![size-image]][size-url]

[size-image]: https://badgen.net/bundlephobia/minzip/yocee
[size-url]: https://bundlephobia.com/result?p=yocee
[npm-image]: https://badgen.net/npm/v/yocee
[npm-url]: https://npmjs.org/package/yocee
[downloads-image]: https://badgen.net/npm/dt/yocee
[downloads-url]: https://npmjs.org/package/
自用的js方法集，不断更新中

## 使用方式

```js
npm i yocee -S
```

### ES6
```js
import yocee from 'yocee'
yocee.formatDate(111100000)
```
### CommonJS
```js
var yocee = require('yocee');
yocee.formatDate(111100000)
```
### 直接引入
```js
<script src="yocee.min.js"></script>
  yocee.formatDate(111100000)
```
## 函数说明
函数名称|函数用途|参数说明
---|:-:|---
formatDate|格式化时间戳|sec: Number // 需要处理的时间戳<br>format?: string // 格式化后的样式 默认值: 'y-m-d h:i'
getType|判断数据类型| data: any // 需要被判断的数据


<!-- ## 代码示例 -->

## License

MIT
