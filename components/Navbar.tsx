import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleJoinClick = (e: React.MouseEvent) => {
    e.preventDefault()
    window.open('https://forms.gle/xrK1XjivvmRp1f2d9', '_blank')
    setIsMobileMenuOpen(false)
  }

  const navLinkClasses = "relative text-[#cccccc] hover:text-white transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-[1px] after:bottom-[-4px] after:left-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"

  return (
    <nav className={`fixed left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'top-2 px-4' : 'top-6 px-6 lg:px-20'}`}>
      <div 
        className={`backdrop-blur-md border border-white/10 rounded-xl flex items-center justify-between transition-all duration-300 ${
          scrolled ? 'py-3 px-6 bg-black/80' : 'p-4 bg-black/60'
        }`}
      >
        <Link href="/" className="text-white font-sans font-semibold text-lg tracking-tight hover:opacity-90 transition-opacity">
          cracked.social
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/events" className={navLinkClasses}>Events</Link>
          <Link href="/community" className={navLinkClasses}>Community</Link>
          <Link href="/about" className={navLinkClasses}>About</Link>
          <a href="#" onClick={handleJoinClick} className={navLinkClasses}>Join Us</a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-1 hover:bg-white/10 rounded-md transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {isMobileMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="mt-2 p-4 rounded-xl bg-[#0a0a0a] border border-white/10 backdrop-blur-xl md:hidden flex flex-col space-y-4 shadow-2xl animate-fade-in-up">
          <Link href="/events" className="text-gray-300 hover:text-white transition-colors px-2 py-1" onClick={() => setIsMobileMenuOpen(false)}>Events</Link>
          <Link href="/community" className="text-gray-300 hover:text-white transition-colors px-2 py-1" onClick={() => setIsMobileMenuOpen(false)}>Community</Link>
          <Link href="/about" className="text-gray-300 hover:text-white transition-colors px-2 py-1" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
          <a href="#" onClick={handleJoinClick} className="text-gray-300 hover:text-white transition-colors px-2 py-1">Join Us</a>
        </div>
      )}
    </nav>
  )
}
