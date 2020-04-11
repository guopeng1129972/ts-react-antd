import React, { useState, useEffect, Component } from 'react';
import useMousePosition from '../hooks/useMousePosition'
import useMousePositin from '../hooks/useMousePosition';
//组件要用大写
const LikeButton: React.FC = () => {
  // const [obj, setObj] = useState({like:0,on:true});
  // return (<>
  //   <button onClick={()=>{setObj({like:obj.like+1,on:obj.on})}}>
  //     {obj.like} 👍
  //   </button>
  //   //因为每次都是新渲染，所以传入setObj的时候，需要穿所有的参数
  //   <button onClick={()=>{setObj({like:obj.like,on:!obj.on})}}>
  //     {obj.on?'NO':'OFF'}
  //   </button>
  // </>
  // )

  //使用useState hook
  //useState 是有泛型?
  const [like, setLike] = useState(0);
  const [on, setOn] = useState(true);
  //useEffect 就是每次函数执行完成后跟新内容（执行），直接使用就行
  //useEffect(cb,[]),[]时指定更新的依赖，这些依赖更新，
  // 才会触发useEffect的更新，默认为全部的useState
  //2.需要清除的副作用

  const position = useMousePositin()
  useEffect(() => {
    console.log('document title effect is ranning')
    document.title = `点击了${like}次`
  }, [like])
  //return 里面不能写注释
  return (<>
    <h2>X:{position.x},Y:{position.y}</h2>
    <button onClick={() => { setLike(like + 1) }}>
      {like} 👍
    </button>
    <button onClick={() => { setOn(!on) }}>
      {on ? 'NO' : 'OFF'}
    </button>
  </>
  )
}
//useEffect的几种用法
//1.必须要清除的副作用  uesEffect必须返回清除一些内容
//2.需要清除的副作用   用于切换，或者添加按钮，操作dom，防止内存泄漏
// componentDidMount(){
//   document.addEventListener('click',this.updataMouse)
// }
// componentWillUnmount(){
//   document.removeEventListener('click',this.updataMouse)
// }
//3.怎样控制运行副作用  通过传入[]中的参数


export default LikeButton