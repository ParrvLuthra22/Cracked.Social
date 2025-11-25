import { motion } from 'framer-motion'

export default function JoinCTA(){
  const handleJoinClick = () => {
    // Replace with your actual Google Form link
    window.open('https://forms.gle/xrK1XjivvmRp1f2d9', '_blank')
  }

  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="py-16 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Ready to join the community?</h2>
        <p className="text-gray-300 mb-6">Apply to be part of our exclusive founder network. We're looking for early-stage founders who are serious about building and shipping products.</p>
        <button 
          onClick={handleJoinClick}
          className="px-8 py-3 rounded-md bg-white text-black font-semibold hover:bg-gray-100 transition-colors"
        >
          Apply to Join cracked.social
        </button>
        <p className="text-sm text-gray-400 mt-3">We review applications weekly and will get back to you within 5-7 days.</p>
      </div>
    </motion.section>
  )
}
