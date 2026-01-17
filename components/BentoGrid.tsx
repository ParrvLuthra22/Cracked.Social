
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

const BentoItem = ({ children, className, delay = 0 }: { children: ReactNode, className?: string, delay?: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
        className={`relative overflow-hidden rounded-3xl bg-[#0a0a0a] border border-white/5 hover:border-white/20 transition-colors duration-500 group ${className}`}
    >
        {/* Inner Glow Hack */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        <div className="relative z-10 h-full">
            {children}
        </div>
    </motion.div>
)

export default function BentoGrid() {
    return (
        <section className="py-32 bg-black relative">
            <div className="container mx-auto px-6 lg:px-12">

                <div className="mb-20 max-w-2xl">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-6"
                    >
                        More than just <br />
                        <span className="text-[#666]">a community.</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 auto-rows-[300px] md:auto-rows-[300px]">

                    {/* Card 1: Large Feature (Talks) */}
                    <BentoItem className="md:col-span-6 lg:col-span-8 row-span-2 relative group bg-neutral-900 overflow-hidden">
                        {/* Background Image */}
                        <div className="absolute inset-0">
                            <img 
                                src="/images/fireside-chat.jpg" 
                                alt="Founder Fireside Chat" 
                                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                        </div>
                        <div className="h-full flex flex-col justify-end p-8 md:p-12 relative z-10">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 text-black">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" /></svg>
                            </div>
                            <h3 className="text-3xl font-medium text-white mb-4">Founder Fireside Chats</h3>
                            <p className="text-gray-300 text-lg max-w-md">No recording, no PR. Just raw, unfiltered stories from founders who have built their startups from scratch.</p>
                        </div>
                    </BentoItem>

                    {/* Card 2: Vertical (Workshops) */}
                    <BentoItem className="md:col-span-3 lg:col-span-4 row-span-2 bg-[#111]" delay={0.1}>
                        <div className="h-full flex flex-col p-8 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <h3 className="text-2xl font-medium text-white mb-2">Build Workshops</h3>
                            <p className="text-gray-500 text-sm mb-auto">Technical deep dives.</p>

                            {/* Visual representation of code/block */}
                            <div className="mt-8 space-y-3 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="h-2 w-full bg-white/10 rounded-full" />
                                <div className="h-2 w-3/4 bg-white/10 rounded-full" />
                                <div className="h-2 w-1/2 bg-white/10 rounded-full" />
                            </div>
                            <div className="mt-8 flex items-center justify-between">
                                <span className="text-xs font-mono text-white/40">01. CORE</span>
                                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">→</div>
                            </div>
                        </div>
                    </BentoItem>

                    {/* Card 3: Metrics/Small (Demo Day) */}
                    <BentoItem className="md:col-span-3 lg:col-span-4 bg-gradient-to-br from-[#1a1a1a] to-black" delay={0.2}>
                        <div className="h-full flex flex-col justify-between p-8">
                            <h3 className="text-xl font-medium text-white">Demo Days</h3>
                            <div className="flex items-end justify-between">
                                <span className="text-5xl font-semibold tracking-tighter text-white">12</span>
                                <span className="text-sm text-gray-500 mb-2 uppercase tracking-widest">Events/Yr</span>
                            </div>
                        </div>
                    </BentoItem>

                    {/* Card 4: Community (Faces) */}
                    <BentoItem className="md:col-span-6 lg:col-span-8 bg-[#0d0d0d] overflow-hidden" delay={0.3}>
                        <div className="h-full flex flex-row items-center justify-between p-8 md:p-12">
                            <div className="max-w-xs">
                                <h3 className="text-2xl font-medium text-white mb-4">The Network</h3>
                                <p className="text-gray-400">Join a high-signal group of vetted founders, operators, and VCs.</p>
                            </div>
                            {/* Abstract Avatars */}
                            <div className="flex -space-x-4">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="w-16 h-16 rounded-full border-2 border-black bg-neutral-800 flex items-center justify-center text-xs text-white/30 font-mono transform group-hover:translate-x-2 transition-transform" style={{ transitionDelay: `${i * 50}ms` }}>
                                        USR_{i}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </BentoItem>

                </div>
            </div>
        </section>
    )
}
