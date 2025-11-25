import { motion } from 'framer-motion'

type EventCardProps = {
  name: string
  date: string
  description: string
  img?: string
}

export default function EventCard({ name, date, description, img }: EventCardProps){
  return (
    <motion.article
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 160, damping: 18 }}
      className="glass p-5 rounded-xl border border-white/6 shadow-lg"
    >
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 rounded-md flex-shrink-0 overflow-hidden bg-gradient-to-br from-white/6 to-white/2 flex items-center justify-center">
          {img ? <img src={img} alt={name} className="w-full h-full object-cover" /> : <div className="text-sm text-gray-300">IMG</div>}
        </div>
        <div className="flex-1">
          <h4 className="text-lg font-medium">{name}</h4>
          <div className="text-xs text-gray-400 mt-1">{date}</div>
          <p className="mt-3 text-sm text-gray-300">{description}</p>
        </div>
      </div>

      <div className="mt-4 flex justify-end">
        <button className="px-4 py-2 bg-white text-black rounded-md text-sm smooth">Coming Soon</button>
      </div>
    </motion.article>
  )
}
