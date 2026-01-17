import React, { useEffect, useRef } from 'react'

export default function Hero3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth
    let height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight

    let time = 0
    const lines: any[] = []
    const gap = 40

    // Create grid lines
    const init = () => {
      lines.length = 0
      const cols = Math.ceil(width / gap)
      const rows = Math.ceil(height / gap)

      for (let y = 0; y <= rows; y++) {
        for (let x = 0; x <= cols; x++) {
          lines.push({
            x: x * gap,
            y: y * gap,
            baseX: x * gap,
            baseY: y * gap
          })
        }
      }
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(0,0,0,0.1)' // Trail effect
      ctx.fillRect(0, 0, width, height)

      ctx.beginPath()
      ctx.strokeStyle = '#333'
      ctx.lineWidth = 1

      time += 0.02

      // Update and draw warped grid
      for (let i = 0; i < lines.length; i++) {
        const p = lines[i]

        // Warp calculation
        const dist = Math.sqrt(Math.pow(p.x - width / 2, 2) + Math.pow(p.y - height / 2, 2))
        const angle = Math.atan2(p.y - height / 2, p.x - width / 2)

        // Dynamic sine wave warp
        const warp = Math.sin(dist * 0.01 - time) * 20

        const tx = p.baseX + Math.cos(angle) * warp
        const ty = p.baseY + Math.sin(angle) * warp

        if (i > 0 && i % (Math.ceil(width / gap) + 1) !== 0) {
          // Draw horizontal connections
          ctx.fillStyle = `rgba(255,255,255, ${0.1 + (warp / 20) * 0.5})`
          ctx.fillRect(tx, ty, 2, 2)
        }
      }

      // Draw scanline
      const scanY = (time * 100) % height
      ctx.beginPath()
      ctx.moveTo(0, scanY)
      ctx.lineTo(width, scanY)
      ctx.strokeStyle = 'rgba(255,255,255,0.05)'
      ctx.stroke()

      requestAnimationFrame(animate)
    }

    window.addEventListener('resize', init)
    init()
    animate()

    return () => window.removeEventListener('resize', init)
  }, [])

  return (
    <div className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden bg-black">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60" />

      <div className="relative z-10 text-center pointer-events-none mix-blend-exclusion">
        <h1 className="text-7xl md:text-9xl font-bold tracking-tighter text-white mb-6 uppercase">
          Where<br />Founders Rise.
        </h1>
        <p className="text-xl md:text-2xl text-white/60 tracking-[0.2em] uppercase">
          A Community Built for the Bold.
        </p>
      </div>

      {/* Vignette */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent to-black pointer-events-none" />
    </div>
  )
}
