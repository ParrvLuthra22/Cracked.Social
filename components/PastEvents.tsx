import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const samplePast = [
  { title: 'Founders Happy Hour', date: 'Nov 2025' },
  { title: 'Launch Night', date: 'Oct 2025' },
  { title: 'Beta Meetup', date: 'Sep 2025' }
]

export default function PastEvents(){
  const [open, setOpen] = useState(false)
  return (
    <div className="mt-6">
      <button onClick={()=>setOpen(o=>!o)} className="text-sm text-gray-300 smooth">{open ? 'Hide Past Events' : 'Show Past Events'}</button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35 }} className="mt-4 overflow-hidden">
            <ul className="space-y-3">
              {samplePast.map((p, i) => (
                <li key={i} className="text-gray-400">{p.date} — {p.title}</li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
