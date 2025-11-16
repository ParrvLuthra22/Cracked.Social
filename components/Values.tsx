import { motion } from 'framer-motion'

const values = [
  { title: 'Ambition', desc: 'We set big goals and pursue them relentlessly.' },
  { title: 'Innovation', desc: 'We build and iterate fast. We prefer prototypes over promises.' },
  { title: 'Collaboration', desc: 'We share knowledge, help others, and build together.' },
  { title: 'Honesty', desc: 'We give direct feedback and value integrity.' }
]

export default function Values(){
  return (
    <section className="py-12">
      <h2 className="text-2xl font-medium text-center">Community Values</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {values.map((v, i) => (
          <motion.div key={v.title} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="p-6 rounded-lg glass border border-white/6">
            <h4 className="font-semibold">{v.title}</h4>
            <p className="mt-2 text-gray-300 text-sm">{v.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
