import { motion } from 'framer-motion'

export default function Vision(){
  return (
    <motion.section initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="py-12">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-xl font-semibold">Vision</h3>
          <p className="mt-3 text-gray-300">We envision a tight network of makers who ship often, help each other refine ideas, and elevate execution — where the best way to learn is by doing and sharing honest feedback.</p>
        </div>

        <div className="h-48 bg-white/6 rounded-lg flex items-center justify-center text-gray-300">Visual (placeholder)</div>
      </div>
    </motion.section>
  )
}
