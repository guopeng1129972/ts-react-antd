// 函数和类型推断

//函数声明方式
function add(a: number, b: number, c: number = 10) {
  if (typeof c === 'number') {
    return a + b + c
  } else {
    return a + b
  }
}
//函数表达式
const add2 = function (a: number, b: number, c: number = 10): number {
  if (typeof c === 'number') {
    return a + b + c
  } else {
    return a + b
  }
}
//类型推断
// const add3:string=add2
//c? 与在初始声明的c: number = 10，都属于可以不一定接收的值，=10用于函数的初次声明时
const add3: (a: number, b: number, c?:number) => number = add2


















