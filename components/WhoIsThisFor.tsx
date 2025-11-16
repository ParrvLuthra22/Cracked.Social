import { motion } from 'framer-motion'

const items = [
  'Founders', 'Designers', 'Hackers', 'Creators', 'Builders'
]

function Shape(){
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-80">
      <rect x="3" y="3" width="18" height="18" stroke="white" strokeWidth="0.8" fill="none" />
    </svg>
  )
}

export default function WhoIsThisFor(){
  return (
    <section className="py-12">
      <h2 className="text-2xl font-medium text-center">Who is this for?</h2>
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-4xl mx-auto">
        {items.map((i, idx) => (
          <motion.div key={i} whileHover={{ y: -6 }} className="glass p-6 rounded-lg flex flex-col items-center justify-center text-center">
            <div className="mb-3"><Shape /></div>
            <div className="font-semibold">{i}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
