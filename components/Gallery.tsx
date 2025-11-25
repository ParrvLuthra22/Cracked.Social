import { motion } from 'framer-motion'

// Add your gallery images here - replace with actual image paths
const galleryImages = [
  {
    src: '/images/gallery/event1.jpg',
    alt: 'Community event - founders networking'
  },
  {
    src: '/images/gallery/event2.jpg', 
    alt: 'Workshop session with founders'
  },
  {
    src: '/images/gallery/event3.jpg',
    alt: 'Product demo day'
  },
  {
    src: '/images/gallery/event4.jpg',
    alt: 'Community meetup'
  },
  {
    src: '/images/gallery/event5.jpg',
    alt: 'Founders collaborating'
  },
  {
    src: '/images/gallery/event6.jpg',
    alt: 'Team building session'
  }
]

export default function Gallery(){
  return (
    <section className="py-12">
      <h2 className="text-2xl font-medium text-center">Community Gallery</h2>
      <p className="text-center text-gray-300 mt-2 mb-8">Moments from our events and meetups</p>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {galleryImages.map((image, i) => (
          <motion.div 
            key={i} 
            whileHover={{ scale: 1.03 }} 
            className="h-40 rounded-lg overflow-hidden border border-white/10 bg-white/6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <img 
              src={image.src} 
              alt={image.alt}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              onError={(e) => {
                // Fallback to placeholder if image fails to load
                const target = e.target as HTMLImageElement;
                const parent = target.parentElement;
                if (parent) {
                  parent.innerHTML = `
                    <div class="w-full h-full flex items-center justify-center text-gray-300">
                      <div class="text-sm text-center">
                        <div>Photo ${i+1}</div>
                        <div class="text-xs mt-1">Add image to<br/>/images/gallery/</div>
                      </div>
                    </div>
                  `;
                }
              }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
