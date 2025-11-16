import { motion } from 'framer-motion'

const reasons = [
  'Reduce founder isolation',
  'Build faster with honest feedback',
  'Connect with collaborators and investors',
  'Run high-signal events that lead to outcomes'
]

export default function WhyExists(){
  return (
    <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="py-12">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-xl font-semibold">Why cracked.social exists</h3>
        <ul className="mt-4 space-y-3 text-gray-300">
          {reasons.map((r, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-white/8 flex items-center justify-center text-xs">•</div>
              <div>{r}</div>
            </li>
          ))}
        </ul>
      </div>
    </motion.section>
  )
}
