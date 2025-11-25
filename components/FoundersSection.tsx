import FounderCard from './FounderCard'
import { motion } from 'framer-motion'

const founders = [
  {
    name: 'Parrv Luthra',
    role: 'Co-founder & CEO',
    bio: 'a builder at heart. Always loved creating things products, ideas, communities. building is a lot more meaningful when you do it with the right people around you. obsessed with startups, tech, and just watching people grow.',
    image: '/images/parrv.jpg', // Add actual image path
    linkedin: 'https://www.linkedin.com/in/parrv-luthra-73372b322/',
  },
  {
    name: 'Suryansh Nandwani',
    role: 'Co-founder & COO',
    bio: 'Community builder and event organizer with experience running startup meetups in Delhi. Expert at bringing the right people together and facilitating meaningful connections between founders.',
    image: '/images/suryansh.jpg', // Add actual image path
    linkedin: 'https://www.linkedin.com/in/suryanshnandwani/'
  },
  {
    name: 'Khyati Chaturvedi',
    role: 'Head of Product',
    bio: 'Product strategist focused on early-stage market validation and user research. Helps founders identify product-market fit signals and iterate quickly based on real user feedback.',
    image: '/images/khyati.jpg', // Add actual image path
    linkedin: "https://www.linkedin.com/in/khyati-chaturvedi-b50349389/"
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
          <FounderCard key={f.name} name={f.name} role={f.role} bio={f.bio} image={f.image} linkedin={f.linkedin} twitter={f.twitter} />
        ))}
      </div>
    </section>
  )
}
