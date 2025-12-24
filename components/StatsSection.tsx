import { motion, useInView, useSpring, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'

const stats = [
  {
    number: 500,
    suffix: '+',
    label: 'Active Founders',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
    )
  },
  {
    number: 50,
    suffix: '+',
    label: 'Events Hosted',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
    )
  },
  {
    number: 30,
    suffix: '+',
    label: 'Startups Launched',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
    )
  }
]

function Counter({ value, suffix }: { value: number, suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-50px" })
  const springValue = useSpring(0, { duration: 2000, bounce: 0 })
  const displayValue = useTransform(springValue, (current) => Math.round(current))

  useEffect(() => {
    if (inView) {
      springValue.set(value)
    }
  }, [inView, value, springValue])

  return (
    <span ref={ref} className="flex items-center justify-center">
      <motion.span>{displayValue}</motion.span>
      <span>{suffix}</span>
    </span>
  )
}

export default function StatsSection() {
  return (
    <section className="py-20 bg-[#000000] border-y border-[#1a1a1a]">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Goals by End of 2026</h2>
          <div className="h-1 w-20 bg-white mx-auto rounded-full opacity-20"></div>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0"
        >
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`flex flex-col items-center justify-center text-center md:border-r border-[#2a2a2a] last:border-r-0 px-4`}
            >
              <div className="mb-4 text-gray-400 p-3 rounded-full bg-white/5 border border-white/10">
                {stat.icon}
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2 text-glow">
                <Counter value={stat.number} suffix={stat.suffix} />
              </div>
              <div className="text-[#888888] font-medium tracking-wide uppercase text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}