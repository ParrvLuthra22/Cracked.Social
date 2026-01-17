import { motion } from 'framer-motion'

const stats = [
    "250+ Active Founders",
    "12 Startups Launched",
    "8M+ Venture Capital Raised",
    "50+ Events Hosted",
    "Global Community",
    "Y Combinator Alumni",
    "Techstars Grads"
]

export default function StatsTicker() {
    return (
        <div className="relative z-10 bg-black border-y border-white/5">
            {/* Vision 2026 Badge */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 bg-black px-3 py-1 text-xs font-mono text-gray-500 uppercase tracking-widest border border-white/10 rounded-full">
                Vision 2026
            </div>

            <div className="py-12 overflow-hidden relative">
                {/* Fade Gradients */}
                <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10" />
                <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10" />

                <div className="flex">
                    <motion.div
                        className="flex space-x-16 items-center whitespace-nowrap"
                        animate={{ x: "-50%" }}
                        transition={{
                            duration: 20,
                            ease: "linear",
                            repeat: Infinity
                        }}
                    >
                        {/* Double repetition for seamless loop */}
                        {[...stats, ...stats, ...stats, ...stats].map((stat, index) => (
                            <div key={index} className="flex items-center space-x-4 group cursor-default">
                                <span className="text-4xl md:text-6xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-white/5 group-hover:from-white group-hover:to-white/80 transition-all duration-500">
                                    {stat}
                                </span>
                                <div className="w-2 h-2 rounded-full bg-white/20" />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
