import React, { useContext } from "react";
import { ThemesContext } from "../App";
// 使用interface的优点
//1.传出到app的时候，会验证属性
//2.可以获得代码提示
interface myHelloProps {
  message?: string;
}
//可以使用react定义的泛型
// const Hello:React.FunctionComponent<myHelloProps> = (props) => {
//类型别名
// type FC<P = {}> = FunctionComponent<P>;
//拓展方法children defaultProps
const Hello: React.FC<myHelloProps> = (props) => {
  // props.children  
  const theme = useContext(ThemesContext)
  const style = {
    background: theme.background,
    color: theme.color
  }
  return <h2 style={style} >{props.message}</h2>

}
//defaultProps 定义默认值，
Hello.defaultProps = {
  message: 'hello World@！！'
}

export default Hello;