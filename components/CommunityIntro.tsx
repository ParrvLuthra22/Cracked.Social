import { motion } from 'framer-motion'

export default function CommunityIntro(){
  return (
    <motion.section initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center py-20">
      <h1 className="text-4xl lg:text-5xl font-semibold">Welcome to the cracked.social community</h1>
      <p className="mt-4 max-w-2xl mx-auto text-gray-300">We’re a minimal, high-signal community for founders, builders and creators. Our mission is to accelerate ideas through honest feedback, focused events, and collaborative energy.</p>
    </motion.section>
  )
}
