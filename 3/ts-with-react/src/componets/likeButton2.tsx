import React, { useState, useEffect, useRef } from 'react';
import useMousePosition from '../hooks/useMousePosition'
import useMousePositin from '../hooks/useMousePosition';
const LikeButton: React.FC = () => {

  const [like, setLike] = useState(0);
  const [on, setOn] = useState(true);
  const likeRef = useRef(0)
  const position = useMousePositin()
  const handAlertClick = () => {
    setTimeout(() => {
      alert('you click on' + likeRef.current)
    }, 3000);
  }

  useEffect(() => {
    console.log('document title effect is ranning')
    document.title = `点击了${like}次`
  }, [like])
  return (<>
    <h2>X:{position.x},Y:{position.y}</h2>
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