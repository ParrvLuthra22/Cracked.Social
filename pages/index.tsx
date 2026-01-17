import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero3D from '../components/Hero3D'
import BentoGrid from '../components/BentoGrid'
import StatsTicker from '../components/StatsTicker'
import HackathonReveal from '../components/HackathonReveal'
import Footer from '../components/Footer'
import ParticlesBackground from '../components/ParticlesBackground'

export default function Home() {
  return (
    <>
      <Head>
        <title>cracked.social | Where Founders Rise</title>
        <meta name="description" content="A community built for the bold." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-black min-h-screen text-white selection:bg-white selection:text-black">
        <ParticlesBackground />
        <Navbar />

        <main>
          <Hero3D />
          <BentoGrid />
          <StatsTicker />
          <HackathonReveal />
        </main>

        <Footer />
      </div>
    </>
  )
}
