import FounderCard from './FounderCard'
import { motion } from 'framer-motion'

const founders = [
  {
    name: 'Parrv Luthra',
    role: 'Co-founder',
    bio: 'Builds products that ship fast. Loves simple interfaces and brutal honesty.',
    linkedin: 'https://www.linkedin.com'
  },
  {
    name: 'Suryansh Nandwani',
    role: 'Partner',
    bio: 'Organizes events and brings people together to do actual work.',
    twitter: 'https://twitter.com'
  },
  {
    name: 'Khyati Chaturvedi',
    role: 'Product Lead',
    bio: 'Focuses on product-market clarity and early-stage experiments.'
  }
]

export default function FoundersSection(){
  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }} className="text-2xl font-medium">Founders</motion.h2>
        <motion.p initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.06 }} className="mt-3 text-gray-300">The people behind cracked.social</motion.p>
      </div>

      <div className="mt-8 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {founders.map((f, i) => (
          <FounderCard key={f.name} name={f.name} role={f.role} bio={f.bio} linkedin={f.linkedin} twitter={f.twitter} />
        ))}
      </div>
    </section>
  )
}
