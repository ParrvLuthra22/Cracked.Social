import { motion } from 'framer-motion'

export default function Story(){
  return (
    <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="py-12">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-xl font-semibold">Our Story</h3>
        <div className="mt-4 text-gray-300 leading-relaxed">
          <p>cracked.social began as a simple experiment: a handful of founders wanted a place to test ideas quickly, get honest feedback, and meet potential collaborators. It grew slowly — intentionally — focusing on quality over quantity.</p>
          <p className="mt-4">Today we run focused events, small-group sessions, and open critiques that help members iterate faster and build together.</p>
        </div>
      </div>
    </motion.section>
  )
}
