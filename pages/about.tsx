import Head from 'next/head'
import Navbar from '../components/Navbar'
import AboutIntro from '../components/AboutIntro'
import Mission from '../components/Mission'
import Vision from '../components/Vision'
import Story from '../components/Story'
import FoundersSection from '../components/FoundersSection'
import WhyExists from '../components/WhyExists'
import Footer from '../components/Footer'

export default function AboutPage(){
  return (
    <>
      <Head>
        <title>About — cracked.social</title>
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-black to-charcoal text-white font-sans">
        <Navbar />

        <main className="container mx-auto px-6 lg:px-20 pt-28 pb-16">
          <AboutIntro />
          <Mission />
          <Vision />
          <Story />
          <FoundersSection />
          <WhyExists />
        </main>

        <Footer />
      </div>
    </>
  )
}
