Function.prototype.feApply = function (thisArg, args) {
  // 1.拿到要执行的函数
  var fn = this

  // 2.处理绑定的thisArg
  thisArg = thisArg !== null || thisArg !== undefined ? Object(thisArg) : window

  // 3.执行函数
  thisArg.fn = fn
  // 没有传参数时默认值改为数组，避免报错
  args = args || []
  var result = thisArg.fn(...args)
  delete thisArg.fn

  // 4.返回结果
  return result
}

// 测试用例
function foo() {
  console.log('foo执行', this)
}

function sum(num1, num2) {
  return num1 + num2
}

foo.feApply()
console.log(sum.feApply({}, [1, 2]))
