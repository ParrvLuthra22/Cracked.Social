import Link from 'next/link'

export default function Navbar() {
  const handleJoinClick = (e: React.MouseEvent) => {
    e.preventDefault()
    window.open('https://forms.gle/xrK1XjivvmRp1f2d9', '_blank')
  }

  return (
    <nav className="fixed top-6 left-0 right-0 z-20 px-6 lg:px-20">
      <div className="backdrop-blur-md bg-white/3 border border-white/6 rounded-xl p-3 flex items-center justify-between">
        <Link href="/" className="text-white font-sans font-semibold hover:opacity-90 transition-opacity">cracked.social</Link>
        <div className="space-x-6 text-gray-300 hidden md:block">
          <Link href="/events" className="hover:text-white">Events</Link>
          <Link href="/community" className="hover:text-white">Community</Link>
          <Link href="/about" className="hover:text-white">About</Link>
          <a href="#" onClick={handleJoinClick} className="hover:text-white cursor-pointer">Join Us</a>
        </div>
      </div>
    </nav>
  )
}
