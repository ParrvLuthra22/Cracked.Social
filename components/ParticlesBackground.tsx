
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function ParticlesBackground() {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        const particleCount = 50
        const particles = []

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div')
            particle.className = 'particle'

            // Random positioning and timing
            const left = Math.random() * 100
            const delay = Math.random() * 10
            const duration = Math.random() * 10 + 10 // 10-20s duration

            particle.style.left = `${left}%`
            particle.style.animationDelay = `${delay}s`
            particle.style.animationDuration = `${duration}s`

            container.appendChild(particle)
            particles.push(particle)
        }

        return () => {
            particles.forEach(p => p.remove())
        }
    }, [])

    const styles = `
    .particles {
      position: fixed;
      inset: 0;
      pointer-events: none;
      z-index: 1;
      overflow: hidden;
    }

    .particle {
      position: absolute;
      width: 2px;
      height: 2px;
      background: rgba(255, 255, 255, 0.3);
      border-radius: 50%;
      top: 100%; /* Start below screen */
      animation: particleFloat linear infinite;
    }

    @keyframes particleFloat {
      0% {
        transform: translateY(0) translateX(0);
        opacity: 0;
      }
      10% {
        opacity: 1;
      }
      90% {
        opacity: 1;
      }
      100% {
        transform: translateY(-120vh) translateX(100px); /* Move deeply up */
        opacity: 0;
      }
    }
  `

    return (
        <>
            <style>{styles}</style>
            <div ref={containerRef} className="particles" aria-hidden="true" />
        </>
    )
}
