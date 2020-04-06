import React, { useState } from 'react';
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
  
    //return 里面不能写注释
  return (<>
    <button onClick={()=>{setLike(like+1)}}>
      {like} 👍
    </button>
    <button onClick={()=>{setOn(!on)}}>
      {on?'NO':'OFF'}
    </button>
  </>
  )
}



export default LikeButton