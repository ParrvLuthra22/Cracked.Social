import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero3D from '../components/Hero3D'
import Events from '../components/Events'
import Footer from '../components/Footer'
import HackathonReveal from '../components/HackathonReveal'
import StatsSection from '../components/StatsSection'
import { useEffect, useRef } from 'react'

import FadeIn from '../components/FadeIn'

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const { left, top } = containerRef.current.getBoundingClientRect()
        const x = e.clientX - left
        const y = e.clientY - top
        containerRef.current.style.setProperty('--mouse-x', `${x}px`)
        containerRef.current.style.setProperty('--mouse-y', `${y}px`)
      }
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <>
      <Head>
        <title>cracked.social — Where Founders Rise.</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <div ref={containerRef} className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] text-white font-sans relative overflow-hidden">
        <div className="absolute inset-0 grid-bg pointer-events-none opacity-20" />
        <div className="absolute inset-0 spotlight pointer-events-none z-0" />

        <div className="relative z-10">
          <Navbar />

          <main>
            <section className="h-[78vh] flex items-center justify-center animate-float">
              <div className="container mx-auto px-6 lg:px-20 flex flex-col-reverse lg:flex-row items-center gap-12">
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                  <h1 className="text-4xl lg:text-6xl font-semibold tracking-tight animate-fade-in-up text-glow">Where Founders Rise.</h1>
                  <p className="mt-4 text-lg text-gray-300">A community built for the bold.</p>
                  <div className="mt-10">
                    <a 
                      href="https://forms.gle/xrK1XjivvmRp1f2d9" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block bg-white text-black px-8 py-4 text-lg font-semibold rounded-full shadow-lg transition-all duration-300 hover:bg-black hover:text-white hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] animate-pulse-glow border border-transparent hover:border-white"
                    >
                      Join the Community
                    </a>
                  </div>
                </div>

                <div className="w-full lg:w-1/2 h-96">
                  <Hero3D />
                </div>
              </div>
            </section>

            <section className="py-24 bg-[#0a0a0a]">
              <FadeIn className="container mx-auto px-6 lg:px-20">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-2xl font-medium">What is cracked.social?</h2>
                  <p className="mt-4 text-gray-300">A focused, high-signal community for founders and builders — events, collabs, and the occasional hackathon reveal.</p>
                </div>
              </FadeIn>
            </section>

            <StatsSection />

            <section className="py-24 bg-[#1a1a1a]">
              <FadeIn className="container mx-auto px-6 lg:px-20">
                <Events />
              </FadeIn>
            </section>

            <HackathonReveal />
        </main>

        <Footer />
        </div>
      </div>
    </>
  )
}
