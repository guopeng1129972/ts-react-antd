import React, { useState, useEffect } from 'react';
const MouseTracker:React.FC=() =>{
   const [positions,setPositions]=useState({x:0,y:0})
    useEffect(()=>{
      console.log('add effect',positions.x);
      const updateMouse=(e:MouseEvent)=>{
        console.log('inner')
        setPositions({x:e.screenX,y:e.screenY})
      }
      document.addEventListener('click',updateMouse)
      // 1.必须要清除的副作用
      return ()=>{
        console.log('remove effect',positions.y)
        document.removeEventListener('click',updateMouse)
      }
    },[])
    console.log('before render',positions.x)
  return(
    <>
    <p>X: {positions.x}, Y:{positions.y}</p>
    </>
  )
}
export default MouseTracker

