import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const CountdownUnit = ({ value, label }: { value: number, label: string }) => {
  const [prevValue, setPrevValue] = useState(value)
  const [flip, setFlip] = useState(false)

  useEffect(() => {
    if (value !== prevValue) {
      setFlip(true)
      const timer = setTimeout(() => {
        setFlip(false)
        setPrevValue(value)
      }, 600)
      return () => clearTimeout(timer)
    }
  }, [value, prevValue])

  return (
    <div className="countdown-item flex flex-col items-center mx-2 sm:mx-4 perspective-600">
      <div className={`countdown-value relative w-20 h-24 sm:w-24 sm:h-32 bg-gradient-to-b from-[#1a1a1a] via-[#0a0a0a] to-black border border-white/10 rounded-2xl flex items-center justify-center text-4xl sm:text-5xl font-black text-white shadow-[0_10px_0_#050505,0_15px_30px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.1)] transform-style-3d transition-transform duration-600 ${flip ? 'animate-flip' : ''}`}>
        {/* Top Half */}
        <div className="absolute inset-x-0 top-0 h-1/2 overflow-hidden bg-[#151515] rounded-t-2xl z-0 flex items-end justify-center">
          <span className="translate-y-1/2">{value.toString().padStart(2, '0')}</span>
        </div>
        {/* Bottom Half */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 overflow-hidden bg-[#0a0a0a] rounded-b-2xl z-0 flex items-start justify-center">
          <span className="-translate-y-1/2">{value.toString().padStart(2, '0')}</span>
        </div>

        {/* Flip Animation Line */}
        <div className="absolute inset-x-0 top-1/2 h-px bg-black opacity-50 z-20"></div>

        <span className="relative z-10 opacity-0">{value.toString().padStart(2, '0')}</span>
      </div>
      <span className="countdown-label mt-4 text-xs sm:text-sm text-[#666] font-bold tracking-[0.2em] uppercase">{label}</span>
    </div>
  )
}

export default function HackathonReveal() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    // Target date: March 1, 2026
    const targetDate = new Date('2026-03-01T00:00:00').getTime()

    const updateTimer = () => {
      const now = new Date().getTime()
      const distance = targetDate - now

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      })
    }

    const interval = setInterval(updateTimer, 1000)
    updateTimer() // initial call

    return () => clearInterval(interval)
  }, [])

  const styles = `
    .countdown-section {
        background: radial-gradient(circle at 30% 50%, rgba(255,255,255,0.02), transparent 50%), radial-gradient(circle at 70% 50%, rgba(255,255,255,0.02), transparent 50%), #000;
    }
    .countdown-container {
        background: linear-gradient(145deg, #0d0d0d, #000);
        box-shadow: 0 30px 80px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.1);
    }
    .perspective-600 { perspective: 600px; }
    .transform-style-3d { transform-style: preserve-3d; }
    
    @keyframes flip {
      0% { transform: rotateX(0); }
      50% { transform: rotateX(-90deg); }
      100% { transform: rotateX(0); }
    }
    .animate-flip { animation: flip 0.6s ease-in-out; }
  `

  return (
    <section className="countdown-section relative w-full py-32 overflow-hidden">
      <style>{styles}</style>

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <div className="countdown-container max-w-5xl mx-auto rounded-[32px] border border-white/10 p-10 md:p-16 text-center transform hover:scale-[1.01] transition-transform duration-500">

          <div className="inline-block mb-6 px-4 py-1 rounded-full border border-white/20 bg-white/5 text-gray-300 text-sm font-medium tracking-wider uppercase">
            Upcoming Event
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">The 48-Hour Founder Sprint</h2>
          <p className="text-xl text-gray-400 mb-12 font-light max-w-2xl mx-auto">
            Build, Ship, Win. Join us in March 2026 to turn your idea into reality alongside fellow founders.
          </p>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <CountdownUnit value={timeLeft.days} label="Days" />
            <CountdownUnit value={timeLeft.hours} label="Hours" />
            <CountdownUnit value={timeLeft.minutes} label="Mins" />
            <CountdownUnit value={timeLeft.seconds} label="Secs" />
          </div>

          <div className="mt-12">
            <button className="px-10 py-4 bg-white text-black font-bold rounded-full text-lg hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              Register Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}