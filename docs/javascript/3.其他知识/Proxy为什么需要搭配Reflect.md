# Proxy 为什么需要搭配 Reflect 一起使用

## 1. 未搭配使用时

示例代码：

```js
const obj = {
  _value: "123",
  get value() {
    return this._value;
  },
};
const handler = {
  get(target, key, receiver) {
    console.log("run"); // 只执行一次
    return target[key];
  },
};
const proxy = new Proxy(obj, handler);

console.log(proxy.value); // 123
```

问题：
在访问 proxy.value 过程中，`get` 只触发了一次。

期望：
访问 proxy.value 时，`get` 应该触发两次：第一次是访问 proxy.value 时，第二次是访问 this.\_value 时。

## 2. 搭配 Reflect 使用

示例代码：

```js
const obj = {
  _value: "123",
  get value() {
    return this._value;
  },
};
const handler = {
  get(target, key, receiver) {
    console.log("run"); // 执行了两次
    return Reflect.get(target, key, receiver);
  },
};
const proxy = new Proxy(obj, handler);

console.log(proxy.value); // 123
```

原因分析：

1. `Reflect.get(target, key, receiver)` 中 `receiver` 的作用是：如果 `target[key]` 是一个 `getter`, 那么此时的 `receiver` 就是 `getter` 中的 `this`。
2. `Proxy` 中的 `get` 拦截器中获取的 `receiver` 是 `proxy` 或者继承 `proxy` 的对象。

两者结合使用，在 `obj` 的 `value()` getter 函数中，执行了 `this._value` 就相当于再次执行了 `proxy._value`，从而又一次触发了 `Proxy` 中的 `get` 拦截器。
