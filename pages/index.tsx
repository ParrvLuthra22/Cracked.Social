import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero3D from '../components/Hero3D'
import Events from '../components/Events'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>cracked.social — Where Founders Rise.</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-black to-charcoal text-white font-sans">
        <Navbar />

        <main className="relative z-10">
          <section className="h-[78vh] flex items-center justify-center">
            <div className="container mx-auto px-6 lg:px-20 flex flex-col-reverse lg:flex-row items-center gap-12">
              <div className="w-full lg:w-1/2 text-center lg:text-left">
                <h1 className="text-4xl lg:text-6xl font-semibold tracking-tight">Where Founders Rise.</h1>
                <p className="mt-4 text-lg text-gray-300">A community built for the bold.</p>
                <div className="mt-8">
                  <a 
                    href="https://forms.gle/xrK1XjivvmRp1f2d9" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-black px-6 py-3 rounded-md backdrop-blur-md shadow-md transition-transform hover:-translate-y-1"
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

          <section className="container mx-auto px-6 lg:px-20 py-16">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-medium">What is cracked.social?</h2>
              <p className="mt-4 text-gray-300">A focused, high-signal community for founders and builders — events, collabs, and the occasional hackathon reveal.</p>
            </div>
          </section>

          <section className="container mx-auto px-6 lg:px-20 py-8">
            <Events />
          </section>

          <section className="container mx-auto px-6 lg:px-20 py-24" id="skyscraper">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-xl font-medium">The Upcoming Hackathon</h3>
              <p className="mt-4 text-gray-400">(Placeholder for the big reveal)</p>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  )
}
