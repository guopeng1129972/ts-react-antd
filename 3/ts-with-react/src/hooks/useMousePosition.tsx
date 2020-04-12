import { useState, useEffect } from "react";

const useMousePositin = () => {
  const [positions, setpositions] = useState({ x: 0, y: 0 });
  useEffect(() => {
    console.log('add effect', positions.x);
    const updateMouse = (e: MouseEvent) => {
      setpositions({ x: e.clientX, y: e.clientY })
    }
    document.addEventListener('mousemove', updateMouse)
    return () => {
      console.log('remove effect', positions.x)
      document.removeEventListener('mousemove', updateMouse);

    }
  }, [])

  return positions
}

export default useMousePositin;