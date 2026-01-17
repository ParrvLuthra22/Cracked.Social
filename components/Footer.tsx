import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black pt-32 pb-12 px-6 lg:px-12 border-t border-white/10 overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-white/5 to-transparent pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-8">
              Ready to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600">build?</span>
            </h2>
            <button className="group relative px-8 py-4 bg-white text-black rounded-full font-bold text-lg overflow-hidden transition-transform hover:scale-105">
              <span className="relative z-10">Apply for Batch 2026</span>
              <div className="absolute inset-0 bg-gray-200 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-8 text-lg">
            <div className="space-y-4">
              <h4 className="text-sm uppercase tracking-widest text-[#666] mb-6">Explore</h4>
              {['Events', 'Community', 'Stories', 'Manifesto'].map(item => (
                <Link key={item} href={`/${item.toLowerCase()}`} className="block text-gray-400 hover:text-white transition-colors hover:translate-x-2 duration-300">
                  {item}
                </Link>
              ))}
            </div>
            <div className="space-y-4">
              <h4 className="text-sm uppercase tracking-widest text-[#666] mb-6">Socials</h4>
              {['Twitter', 'LinkedIn', 'Instagram', 'Discord'].map(item => (
                <a key={item} href="#" className="block text-gray-400 hover:text-white transition-colors hover:translate-x-2 duration-300">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Massive Footer Logo */}
        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-end">
          <div className="w-full">
            <h1 className="text-[12vw] leading-[0.8] font-bold tracking-tighter text-[#1a1a1a] select-none pointer-events-none text-center lg:text-left">
              CRACKED
            </h1>
          </div>
          <div className="w-full md:w-auto flex justify-between md:justify-end gap-8 mt-8 md:mt-0 text-gray-600 text-sm">
            <p>© 2026 cracked.social</p>
            <p>All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
