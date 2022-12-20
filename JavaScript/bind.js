Function.prototype.feBind = function (thisArg, ...args) {
  // 1.获取被调用的函数
  var fn = this

  // 2.绑定 this
  thisArg = thisArg !== null || thisArg !== undefined ? Object(thisArg) : window

  // 3.创建一个新的函数
  function proxyFn(...proxyArgs) {
    // 拼bind的参数与返回函数的参数
    var finalArgs = [...args, ...proxyArgs]
    // 调用函数
    thisArg.fn = fn
    var result = thisArg.fn(...finalArgs)
    delete thisArg.fn
    // 返回结果
    return result
  }

  return proxyFn
}

// 测试用例
function foo() {
  console.log('foo执行', this)
  return 1
}

function sum(num1, num2, num3, num4) {
  console.log(num1, num2, num3, num4)
}

var bar = foo.feBind('abc')
var result = bar()
console.log(result)
