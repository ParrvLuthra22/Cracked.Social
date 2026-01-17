import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed top-8 inset-x-0 z-50 flex justify-center pointer-events-none">
      <motion.nav
        initial={{ width: '200px', height: '50px' }}
        animate={{
          width: isHovered || scrolled ? '500px' : '200px',
          height: isHovered ? '60px' : '50px',
          y: scrolled ? 0 : 0
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
        className="pointer-events-auto bg-black/50 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-center overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.5)] mx-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <AnimatePresence mode="wait">
          {!isHovered && !scrolled ? (
            <motion.div
              key="logo"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="font-bold text-white tracking-tight"
            >
              cracked.social
            </motion.div>
          ) : (
            <motion.div
              key="links"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center space-x-8 px-8"
            >
              <Link href="/" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Home</Link>
              <Link href="/about" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">About</Link>
              <Link href="/events" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Events</Link>
              <Link href="/community" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Community</Link>
              <Link href="/join" className="text-sm font-semibold text-white bg-white/10 px-4 py-1.5 rounded-full hover:bg-white hover:text-black transition-all">Join</Link>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  )
}
