import React, { useState, useEffect, useRef } from 'react';
// import useMousePosition from '../hooks/useMousePosition'
const LikeButton: React.FC = () => {

  const [like, setLike] = useState(0);
  const [on, setOn] = useState(true);
  const likeRef = useRef(0)
  const didMountRef = useRef(false)
  const domRef = useRef<HTMLInputElement>(null)
  // const position = useMousePosition()
  const handAlertClick = () => {
    setTimeout(() => {
      alert('you click on' + likeRef.current)
    }, 3000);
  }

  useEffect(() => {
    console.log('document title effect is ranning')
    document.title = `点击了${like}次`
  }, [like])

  useEffect(() => {
    if (didMountRef.current) {
      console.log('this is updated')
    } else {
      didMountRef.current = true
    }
  })
  useEffect(() => {
    //初始化值为null 判断是否存在
    if (domRef && domRef.current) {
      domRef.current.focus()
    }
  })
  return (<>
    {/* <h2>X:{position.x},Y:{position.y}</h2> */}
    <input type='text' ref={domRef} />
    <button onClick={() => { setLike(like + 1); likeRef.current++ }}>
      {like} 👍
    </button>
    <button onClick={handAlertClick}>alert!</button>
    <button onClick={() => { setOn(!on) }}>
      {on ? 'NO' : 'OFF'}
    </button>
  </>
  )
}
// 结论：在任一次渲染中，组件的state props都是独立不变的，
//使用他们的任意值也是独立不变的，
//如果需要在几次渲染中保持联系，就需要使用useRef

export default LikeButton