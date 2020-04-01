// const echo<T> = (arg:T):T => {
//  return arg
// }
function echo < T > (arg: T): T {
  return arg
}

const result = echo(123);


function swap < T, U > (tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]]
}


const result2 = swap([1, 2]);


console.log(result, result2)

// 约束泛型

function echoArr < T > (arg: T[]): T[] {
  //类型“T”上不存在属性“length”。ts(2339)  
  // arg有可能没有length属性,
  //如果定义为[]属性，并不能达到需求，需求是要具有length属性的，都能调用
  console.log(arg.length)
  return arg

}
//我感觉借口就是具有某一种属性，如果需要要具有这一类属性的时候，就写个接口
interface hasLength {
  length: number
}
//泛型是可以继承接口的，并且方法需要return 返回值
function echolength < T extends hasLength > (arg: T): T {
  console.log(arg.length)
  return arg
}

const str = echolength('str');
const obj = echolength({
  length: 10,
  width: 22
});
//报错，是因为数字123 没有length
// const num = echolength(123);


//类 泛型 
//1.定义的时候引入泛型
class Queue < T > {
  private data = [];
  //2.引用是也引入泛型
  push(item: T) {
    return this.data.push(item)
  }
  pop(): T {
    return this.data.shift()
  }
}
//3.实例化的时候传入泛型类型
const queue = new Queue < number > ();
queue.push(1);
console.log(queue.pop().toFixed())

const queue2 = new Queue < string > ();
queue2.push('str');

//接口 泛型
// 1.定义接口时引入泛型
interface KeyPair < T, U > {
  key: T,
  value: U
}
//2.实例化时，声明具体类型
let kp1: KeyPair < number, string >= {
  key: 2,
  value: 'str'
};
let kp2: KeyPair < string, number >= {
  key: 'str',
  value: 3
};

//3.使用定义好的接口，也是可以的，用时声明具体类型
let arr = [1, 2, 3];
let arr2: Array < number >= [1, 2, 3, 4]
let arr3: Array < string >= ['22', 'aaa', 'sss']

//接口 函数 泛型
//1.定义接口，泛型
interface Plus < T > {
  (a: T, b: T): T
}
//2.定义方法，设定传入的类型
function plus(a: number, b: number): number {
  return a + b;
}
//3.实例化时，声明调用的类型
const newPlus:Plus<number>=plus;

function addStr(a:string,b:string):string {
  return a+b;
}
const newStr:Plus<string>=addStr;