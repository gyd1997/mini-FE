Function.prototype.feCall = function (thisArg, ...args) {
  // 1.获取需要被执行的函数
  var fn = this

  // 2.将 thisArg 转成对象类型（为了对基本类型进行装箱转换）
  thisArg = thisArg ? Object(thisArg) : window

  // 3.调用需要被执行的函数
  thisArg.fn = fn
  var result = thisArg.fn(...args)
  delete thisArg.fn

  // 4.将最终的结果返回出去
  return result
}

function foo() {
  console.log('foo执行', this)
}

function sum(num1, num2) {
  return num1 + num2
}

foo.feCall()
console.log(sum.feCall({}, 1, 2))
