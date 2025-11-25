import { motion } from 'framer-motion'

export default function Mission(){
  return (
    <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="py-12">
      <div className="max-w-4xl mx-auto">
        <div className="border-t border-white/6 pt-8">
          <h2 className="text-2xl font-medium">Mission</h2>
          <p className="mt-4 text-gray-300">Our mission is to create the most valuable founder community in India — a tight-knit network of 100 serious early-stage founders who help each other ship faster, validate better, and scale smarter. We believe the best way to learn entrepreneurship is by doing it alongside other builders who share honest feedback and real experience.</p>
        </div>
      </div>
    </motion.section>
  )
}
