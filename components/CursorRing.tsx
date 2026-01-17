import { useEffect, useRef, useState } from 'react'
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion'

export default function CursorRing() {
  const [isHovered, setIsHovered] = useState(false)

  // Mouse position motion values for smooth interpolation
  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  // Spring configurations for different states
  const springConfig = { damping: 25, stiffness: 700, mass: 0.5 }
  const cursorX = useSpring(mouseX, springConfig)
  const cursorY = useSpring(mouseY, springConfig)

  // Scale spring
  const scale = useSpring(1, { damping: 20, stiffness: 400 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // If we are hovering a magnetic element, the cursor position might be overridden slightly
      // But generally we follow the mouse
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      // Check if target is clickable/interactive
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('magnetic')
      ) {
        setIsHovered(true)
        scale.set(1.5) // Grow
      } else {
        setIsHovered(false)
        scale.set(1) // Reset
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseover', handleMouseOver) // Using mouseover for delegation

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [mouseX, mouseY, scale])

  return (
    <>
      {/* Main Cursor Dot - The Liquid Center */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none mix-blend-exclusion z-[9999]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          scale: scale
        }}
      />

      {/* Trailing Ring - The "Ghost" */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 border border-white/30 rounded-full pointer-events-none z-[9998]"
        style={{
          x: useSpring(mouseX, { damping: 40, stiffness: 200 }), // Slower spring
          y: useSpring(mouseY, { damping: 40, stiffness: 200 }),
          translateX: '-50%',
          translateY: '-50%',
          scale: useSpring(scale, { damping: 30, stiffness: 200 })
        }}
      />

      <style jsx global>{`
        body, a, button {
          cursor: none; /* Hide default cursor */
        }
      `}</style>
    </>
  )
}

