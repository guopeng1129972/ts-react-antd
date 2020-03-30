// interface
// 1 对对象的形状(shape)进行描述，
// 2 对类（class）进行抽象
// 3 Duck Typing(鸭子类型)

// interface就是对object复杂对象的types

interface Person{
  readonly id:number;
  name:string;
  age?:number;
}
// 同样的，声明interface时，也不能多出来一个，或少一个属性，都会报错，
//除非进行可缺省声明 age?; 就不会报错

let guopeng:Person={
  id:26,
  name:'guopeng',
  
}
// readonly说明此值是只读的，不能修改
//如果使用，要在interface开始时就进行声明
// guopeng.id=2

// readonly yu const 
//readonly 用于属性上的，
//const 多用于变量上

