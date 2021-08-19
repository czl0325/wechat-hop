# wechat-hop
threejs开发微信跳一跳练手

#### 注意事项

* TypeError: document.createElementNS is not a function  (threejs加载纹理错误)
```js
// 找到weapp-adapter.js里面的document定义代码
var document = {
  readyState: 'complete',
  visibilityState: 'visible',
  documentElement: window,
  hidden: false,
  style: {},
  location: window.location,
  ontouchstart: null,
  ontouchmove: null,
  ontouchend: null
  
  //  ......
}
```
添加createElementNS函数的定义和实现
```js
createElementNS: function createElementNS(nameSpace, tagName) {
  return this.createElement(tagName);
}
```
