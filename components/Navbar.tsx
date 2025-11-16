import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="fixed top-6 left-0 right-0 z-20 px-6 lg:px-20">
      <div className="backdrop-blur-md bg-white/3 border border-white/6 rounded-xl p-3 flex items-center justify-between">
        <Link href="/" className="text-white font-sans font-semibold hover:opacity-90 transition-opacity">cracked.social</Link>
        <div className="space-x-6 text-gray-300 hidden md:block">
          <Link href="/events" className="hover:text-white">Events</Link>
          <Link href="/community" className="hover:text-white">Community</Link>
          <Link href="/about" className="hover:text-white">About</Link>
          <Link href="/join" className="hover:text-white">Join Us</Link>
        </div>
      </div>
    </nav>
  )
}
