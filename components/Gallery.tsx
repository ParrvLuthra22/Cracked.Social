import { motion } from 'framer-motion'

const placeholders = new Array(6).fill(0)

export default function Gallery(){
  return (
    <section className="py-12">
      <h2 className="text-2xl font-medium text-center">Gallery</h2>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {placeholders.map((_, i) => (
          <motion.div key={i} whileHover={{ scale: 1.03 }} className="h-40 bg-white/6 rounded-lg flex items-center justify-center text-gray-300">
            <div className="text-sm">Image {i+1}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
