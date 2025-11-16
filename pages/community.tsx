import Head from 'next/head'
import Navbar from '../components/Navbar'
import CommunityIntro from '../components/CommunityIntro'
import WhoIsThisFor from '../components/WhoIsThisFor'
import Values from '../components/Values'
import Gallery from '../components/Gallery'
import JoinCTA from '../components/JoinCTA'
import Footer from '../components/Footer'

export default function CommunityPage(){
  return (
    <>
      <Head>
        <title>Community — cracked.social</title>
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-black to-charcoal text-white font-sans">
        <Navbar />

        <main className="container mx-auto px-6 lg:px-20 pt-28">
          <CommunityIntro />
          <WhoIsThisFor />
          <Values />
          <Gallery />
          <JoinCTA />
        </main>

        <Footer />
      </div>
    </>
  )
}
