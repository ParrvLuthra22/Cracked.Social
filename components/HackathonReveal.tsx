import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const CountdownUnit = ({ value, label }: { value: number, label: string }) => (
  <div className="flex flex-col items-center mx-2 sm:mx-4">
    <div className="relative bg-[#0a0a0a] w-16 h-20 sm:w-20 sm:h-24 rounded-lg flex items-center justify-center border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 pointer-events-none"></div>
      <AnimatePresence mode='popLayout'>
        <motion.span 
          key={value}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.3, ease: "backOut" }}
          className="text-3xl sm:text-4xl font-bold font-mono text-white z-10 absolute"
        >
          {value.toString().padStart(2, '0')}
        </motion.span>
      </AnimatePresence>
      {/* Flip line */}
      <div className="absolute w-full h-[1px] bg-black/40 top-1/2 z-20"></div>
    </div>
    <span className="text-xs text-gray-500 mt-3 uppercase tracking-wider font-medium">{label}</span>
  </div>
)

export default function HackathonReveal() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    // Target date: March 15, 2025
    const targetDate = new Date('2025-03-15T09:00:00').getTime()

    const interval = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate - now

      if (distance < 0) {
        clearInterval(interval)
        return
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative w-full py-24 bg-[#000000] overflow-hidden border-l-4 border-white my-0">
      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="container mx-auto px-6 lg:px-20 relative z-10"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-3 tracking-tight">The 48-Hour Founder Sprint</h2>
              <p className="text-xl text-gray-400 mb-6 font-light tracking-wide">Build, Ship, Win - March 2025</p>
              
              <p className="text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed text-lg">
                Turn your idea into reality. Build alongside fellow founders, get mentorship, compete for prizes.
              </p>

              <button className="px-8 py-3 border border-white text-white bg-transparent rounded hover:bg-white hover:text-black transition-all duration-300 font-medium text-sm tracking-widest uppercase">
                Learn More
              </button>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="flex flex-wrap justify-center">
              <CountdownUnit value={timeLeft.days} label="Days" />
              <CountdownUnit value={timeLeft.hours} label="Hours" />
              <CountdownUnit value={timeLeft.minutes} label="Mins" />
              <CountdownUnit value={timeLeft.seconds} label="Secs" />
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  )
}