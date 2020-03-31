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



class Queue < T > {
  private data = [];
  push(item: T) {
    return this.data.push(item)
  }
  pop(): T {
    return this.data.shift()
  }
}
const queue = new Queue < number > ();
queue.push(1);
console.log(queue.pop().toFixed())

const queue2 = new Queue < string > ();
queue2.push('str');


interface KeyPair<T,U>{
  key:T,
  value:U
}

let kp1:KeyPair<number,string>={key:2,value:'str'};
let kp2:KeyPair<string,number>={key:'str',value:3};


let arr=[1,2,3];
let arr2:Array<number>=[1,2,3,4]
