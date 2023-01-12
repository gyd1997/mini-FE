function feCurrying(fn) {
  function curried(...args) {
    // 1.当已经传入的参数 大于等于 需要的参数时，就执行函数
    if (args.length >= fn.length) {
      return fn.apply(this, args)
    } else {
      // 没有达到参数总个数时，需要返回一个新的函数，继续来接收参数
      function curried2(...args2) {
        // 接收到参数后，需要递归调用 curried 来检查函数的个数是否达到
        return curried.apply(this, [...args, ...args2])
      }
      return curried2
    }
  }
  return curried
}

// 测试用例
function add1(x, y, z) {
  return x + y + z + 1
}
var curryAdd = feCurrying(add1)
console.log(curryAdd(10, 20, 30))
console.log(curryAdd(10, 20)(30))
console.log(curryAdd(10)(20)(30))
