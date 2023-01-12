function feCompose(...fns) {
  // 非函数类型报错
  var length = fns.length
  for (var i = 0; i < length; i++) {
    if (typeof fns[i] !== 'function') {
      throw new TypeError('Expected arguments are function')
    }
  }
  function compose(...args) {
    var index = 0
    var result = length ? fns[index].apply(this, args) : args
    while (++index < length) {
      result = fns[index].call(this, result)
    }
    return result
  }
  return compose
}

// 测试用例
function double(m) {
  return m * 2
}
function square(n) {
  return n ** 2
}
var newFn = feCompose(double, square)
console.log(newFn(10))
console.log(newFn(100))
