// 类型别名
//type
type addType = (x: number, y: number) => number;

function sum(a: number, b: number): number {
  return a + b
}
const sum2: addType = sum
//联合类型场景

//if string return string
//else func retrun fun()

type NameResolver = () => string
type NameOrResolver = string | NameResolver

function getName(a: NameOrResolver) {
  if (typeof a === "string") {
    return a
  } else {
    return a()
  }
}



// 断言
//type assertion
// sd

function getLength(input: string | number): number {
  // const str=input as String
  //   if(str.length){return str.length}
  //   else{
  //     return str.toString().length
  //   }
  if (( < string > input).length) {
    return ( < string > input).length
  } else {
    input.toString().length
  }

}
//引入第三方库  
//创建jQuaert.d.ts文件，写入
// declare var jQuary:(selector:string)=>any
//创建tsconfig.json
// add
//{
//  'inclued':['**/*']
//}
//

//或者通过 安装
// npm install --save @types/react
//由definitelyTyped负责