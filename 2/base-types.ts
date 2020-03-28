let isok:boolean=true;

let age:number=20;
//2进制 0b 8进制0O;
let bnum:number=0b1111;

let myname:string='guo peng';
//调用定义的字符串，直接用${}
let word:string="hello ${myname}";


let u:undefined =undefined;

let n:null=null
// null undefind 是所有类型的子类型
let num:number=undefined
let num2:number=null;


// 2 any type 与联合类型
//any 类型什么都可以是，返回也是什么都是的类型，没有代码提示，也不会问题
let notsure:any=4;
notsure=true;
notsure.myName;
notsure.myName();

//联合类型
// 联合类型可以设置多个类型，并且也会拥有这几种类型的方法，
let booleannumber:number|boolean=true;
let booleannumber2:number|boolean=2;
let booleannumberstring:number|boolean|string='abc';



// 复杂数据类型 array yu Tuple
// 定义数组类型就只能放数字类型的值，不然会报错
let arrOfNumbers:number[]=[1,2,3,4,5]
arrOfNumbers.push(7)
//tuple 有点像这个联合类型的声明一样
let tupleOfNumberString:[string,number]=['guopeng',26]
tupleOfNumberString.push(123);
tupleOfNumberString.push("abc");

//可以调用数组方法传递对应的类型的值，但是不能再定义的时候写入值,多一个值，少一个值都会报错
// let tupleOfNumberString2:[string,number]=['guopeng',26,77]








