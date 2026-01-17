import { motion, useInView, useSpring, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'

// Phase 3: Metrics Section - 3D Card Flip
const stats = [
  {
    number: 247,
    label: 'Active Founders',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
    )
  },
  {
    number: 12,
    label: 'Events Hosted',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
    )
  },
  {
    number: 8,
    label: 'Startups Launched',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
    )
  }
]

function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-50px" })
  const springValue = useSpring(0, { duration: 2000, bounce: 0 }) // 2s duration as requested
  const displayValue = useTransform(springValue, (current) => Math.round(current))

  useEffect(() => {
    if (inView) {
      springValue.set(value)
    }
  }, [inView, value, springValue])

  return <motion.span ref={ref}>{displayValue}</motion.span>
}

export default function StatsSection() {
  const styles = `
    .metric-card {
      background: linear-gradient(145deg, #0a0a0a, #000);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 24px;
      padding: 40px;
      position: relative;
      transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      transform-style: preserve-3d;
      box-shadow: 20px 20px 60px #000000, -20px -20px 60px #1a1a1a, inset 2px 2px 4px rgba(255, 255, 255, 0.05);
      overflow: hidden;
    }
    
    .metric-card:hover {
      transform: translateY(-10px) rotateX(5deg);
      border-color: rgba(255, 255, 255, 0.2);
      box-shadow: 30px 30px 80px #000000, -30px -30px 80px #1a1a1a, inset 2px 2px 4px rgba(255, 255, 255, 0.1);
    }

    .metric-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
      transition: left 0.5s;
    }

    .metric-card:hover::before {
      left: 100%;
    }
  `

  return (
    <section className="py-32 bg-[#000000] relative z-10">
      <style>{styles}</style>
      <div className="container mx-auto px-6 lg:px-20">
        <div className="text-center mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Goals by End of 2026</h2>
          <div className="h-0.5 w-24 bg-white/20 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 perspective-1000">
          {stats.map((stat, index) => (
            <div key={index} className="metric-card group">
              <div className="flex flex-col items-center text-center transform translate-z-20">
                {/* Icon with 3D float */}
                <div className="mb-6 text-gray-400 p-4 rounded-2xl bg-[#111] border border-white/5 shadow-inner transition-transform duration-500 group-hover:scale-110 group-hover:rotate-y-180 transform-style-3d">
                  {stat.icon}
                </div>

                {/* Number with Counter Animation */}
                <div className="metric-number text-6xl lg:text-7xl font-black text-white mb-2 leading-none text-glow tracking-tighter">
                  <Counter value={stat.number} />
                </div>

                {/* Label */}
                <div className="metric-label text-[#666] font-bold tracking-[0.2em] uppercase text-sm mt-4 group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}