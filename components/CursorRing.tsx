import { useEffect } from 'react'

export default function CursorRing(){
  useEffect(()=>{
    const ring = document.createElement('div')
    ring.className = 'cursor-ring'
    document.body.appendChild(ring)

    function move(e: MouseEvent){
      ring.style.left = e.clientX + 'px'
      ring.style.top = e.clientY + 'px'
    }

    window.addEventListener('mousemove', move)
    return ()=>{
      window.removeEventListener('mousemove', move)
      document.body.removeChild(ring)
    }
  }, [])

  return null
}
