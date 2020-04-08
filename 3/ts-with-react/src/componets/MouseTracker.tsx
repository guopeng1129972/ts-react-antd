import React, { useState, useEffect } from 'react';
const MouseTracker:React.FC=() =>{
   const [positions,setPositions]=useState({x:0,y:0})
    useEffect(()=>{
      console.log('add effect',positions.x);
      const updateMouse=(e:MouseEvent)=>{
        console.log('inner')
        setPositions({x:e.screenX,y:e.screenY})
      }
      document.addEventListener('mousemove',updateMouse)
      return ()=>{
        console.log('remove effect',positions.y)
        document.removeEventListener('mousemove',updateMouse)
      }
    })
  return(
    <>
    <p>X: {positions.x}, Y:{positions.y}</p>
    </>
  )
}
export default MouseTracker

