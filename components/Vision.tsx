import { motion } from 'framer-motion'

export default function Vision(){
  return (
    <motion.section initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="py-12">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-xl font-semibold">Vision</h3>
          <p className="mt-3 text-gray-300">We envision becoming the go-to community for India's next generation of successful founders. By 2026, we aim to have facilitated 50+ successful product launches, 20+ funded startups, and countless founder-to-founder connections that create lasting business value. Quality over quantity, always.</p>
        </div>

        <div className="h-48 rounded-lg overflow-hidden border border-white/10">
          <img 
            src="/images/vision-image.jpg" 
            alt="Our vision - founders collaborating and building together"
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              const parent = target.parentElement;
              if (parent) {
                parent.innerHTML = `
                  <div class="w-full h-full bg-white/6 flex items-center justify-center text-gray-300">
                    <div class="text-center">
                      <div>Vision Image</div>
                      <div class="text-xs mt-1">Add image to /images/vision-image.jpg</div>
                    </div>
                  </div>
                `;
              }
            }}
          />
        </div>
      </div>
    </motion.section>
  )
}
