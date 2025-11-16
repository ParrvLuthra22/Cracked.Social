import { motion } from 'framer-motion'

export default function JoinCTA(){
  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="py-16 text-center">
      <button className="px-8 py-3 rounded-md bg-white text-black font-semibold">Join cracked.social</button>
    </motion.section>
  )
}
