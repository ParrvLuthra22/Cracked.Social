import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import React, { useRef } from 'react'

const events = [
  {
    title: 'Founder Fireside Chats',
    description: 'Monthly intimate conversations with successful founders sharing real insights'
  },
  {
    title: 'Build-in-Public Workshops',
    description: 'Hands-on sessions where you build and get feedback in real-time'
  },
  {
    title: 'Demo Day Sessions',
    description: 'Showcase your startup to investors, mentors, and fellow builders'
  }
]

function TiltCard({ title, description }: { title: string, description: string }) {
  const ref = useRef<HTMLDivElement>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseX = useSpring(x, { stiffness: 150, damping: 15 })
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 })

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseXFromCenter = e.clientX - rect.left - width / 2
    const mouseYFromCenter = e.clientY - rect.top - height / 2
    x.set(mouseXFromCenter)
    y.set(mouseYFromCenter)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  const rotateX = useTransform(mouseY, [-150, 150], [5, -5])
  const rotateY = useTransform(mouseX, [-150, 150], [-5, 5])

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative h-full"
    >
      <div 
        className="h-full p-8 rounded-xl bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] border border-[#3a3a3a] transition-all duration-300 hover:border-[#6a6a6a] hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:-translate-y-2 group"
        style={{ transform: "translateZ(20px)" }}
      >
        <h4 className="text-xl font-semibold text-white mb-3 group-hover:[text-shadow:0_0_20px_rgba(255,255,255,0.5)] transition-all">{title}</h4>
        <p className="text-[#a0a0a0] text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}

export default function Events(){
  return (
    <div id="events" className="grid gap-6 grid-cols-1 md:grid-cols-3" style={{ perspective: 1000 }}>
      {events.map((event, i) => (
        <TiltCard key={i} title={event.title} description={event.description} />
      ))}
    </div>
  )
}
