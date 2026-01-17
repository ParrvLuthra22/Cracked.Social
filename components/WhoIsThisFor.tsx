import { motion } from 'framer-motion'

const items = [
  { name: 'Founders', icon: '/icons/founders.png', description: 'Building the next big thing' },
  { name: 'Designers', icon: '/icons/designers.png', description: 'Crafting beautiful experiences' },
  { name: 'Hackers', icon: '/icons/hackers.png', description: 'Breaking and making things' },
  { name: 'Creators', icon: '/icons/creators.png', description: 'Bringing ideas to life' },
  { name: 'Builders', icon: '/icons/builders.png', description: 'Shipping products that matter' }
]

export default function WhoIsThisFor(){
  return (
    <section className="py-20">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4">Who is this for?</h2>
      <p className="text-center text-gray-400 mb-12 max-w-xl mx-auto">A community of doers, dreamers, and disruptors</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 max-w-6xl mx-auto px-6">
        {items.map((item, idx) => (
          <motion.div 
            key={item.name} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            whileHover={{ y: -8, scale: 1.02 }} 
            className="group relative p-6 md:p-8 rounded-2xl bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] border border-white/10 hover:border-white/30 transition-all duration-300 flex flex-col items-center justify-center text-center cursor-pointer overflow-hidden"
          >
            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Icon container */}
            <div className="relative z-10 mb-4 p-4 rounded-xl bg-white/5 border border-white/10 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
              <img 
                src={item.icon} 
                alt={item.name} 
                className="w-10 h-10 md:w-12 md:h-12 object-contain filter brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity"
              />
            </div>
            
            {/* Text */}
            <h3 className="relative z-10 font-semibold text-white text-lg mb-1">{item.name}</h3>
            <p className="relative z-10 text-xs text-gray-500 group-hover:text-gray-400 transition-colors hidden md:block">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
