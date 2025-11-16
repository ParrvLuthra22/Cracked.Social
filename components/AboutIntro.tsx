import { motion } from 'framer-motion'

export default function AboutIntro(){
  return (
    <motion.section initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center py-20">
      <h1 className="text-4xl lg:text-5xl font-semibold">About cracked.social</h1>
      <p className="mt-4 max-w-3xl mx-auto text-gray-300">A focused, minimal community designed to help ambitious builders ship faster, learn from peers, and find collaborators. We emphasize clarity, action, and high-signal interactions.</p>
    </motion.section>
  )
}
