import { motion } from 'framer-motion'

export default function FeaturedEvent(){
  return (
    <motion.section initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="glass p-8 rounded-2xl border border-white/6 shadow-xl flex flex-col md:flex-row gap-6">
      <div className="w-full md:w-1/3 bg-gradient-to-br from-white/6 to-white/2 rounded-lg h-40 flex items-center justify-center text-gray-300">IMG</div>
      <div className="flex-1">
        <h3 className="text-2xl font-semibold">Signature — The Upcoming Hackathon</h3>
        <div className="text-gray-400 mt-2">Coming Soon • Delhi, India</div>
        <p className="mt-4 text-gray-300">A 48-hour build sprint where founders and developers tackle vertical challenges. Placeholder details for the featured event.</p>
        <div className="mt-6">
          <button className="px-6 py-3 rounded-md bg-white text-black">Coming Soon</button>
        </div>
      </div>
    </motion.section>
  )
}
