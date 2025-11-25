import { motion } from 'framer-motion'

type FounderCardProps = {
  name: string
  role: string
  bio: string
  image?: string
  linkedin?: string
}

export default function FounderCard({ name, role, bio, image, linkedin }: FounderCardProps){
  return (
    <motion.article whileHover={{ y: -8 }} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }} className="glass p-6 rounded-2xl border border-white/6 shadow-md">
      <div className="flex flex-col items-center text-center gap-4">
        <div className="w-28 h-28 rounded-full bg-white/6 flex items-center justify-center overflow-hidden border border-white/8" style={{boxShadow: '0 6px 20px rgba(255,255,255,0.03)'}}>
          {image ? (
            <img 
              src={image} 
              alt={`${name} profile`}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-white/8 to-white/4 flex items-center justify-center text-sm text-gray-300">Photo</div>
          )}
        </div>

        <div>
          <div className="text-lg font-semibold font-sans">{name}</div>
          <div className="text-sm text-gray-400">{role}</div>
        </div>

        <p className="text-sm text-gray-300 leading-relaxed">{bio}</p>

        <div className="flex items-center gap-3">
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.5h4v13h-4v-13zM9.5 8.5h3.84v1.78h.05c.54-1.02 1.86-2.1 3.83-2.1 4.1 0 4.86 2.7 4.86 6.21v7.11h-4v-6.3c0-1.5-.03-3.43-2.09-3.43-2.09 0-2.41 1.63-2.41 3.32v6.4h-4v-13z" fill="currentColor"/></svg>
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}
