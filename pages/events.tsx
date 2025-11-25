import Head from 'next/head'
import Navbar from '../components/Navbar'
import FeaturedEvent from '../components/FeaturedEvent'
import EventCard from '../components/EventCard'
import PastEvents from '../components/PastEvents'
import Footer from '../components/Footer'

export default function EventsPage(){
  const upcoming = [
    { name: 'Upcoming Hackathon', date: 'Coming Soon', description: 'A vertical challenge for teams to build scalable solutions.' },
    { name: 'Founders Roundtable', date: 'Coming Soon', description: 'Invite-only discussions with experienced founders.' },
    { name: 'Product Teardown', date: 'Coming Soon', description: 'Community-led product reviews and feedback.' }
  ]

  return (
    <>
      <Head>
        <title>Events — cracked.social</title>
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-black to-charcoal text-white font-sans">
        <Navbar />

        <main className="container mx-auto px-6 lg:px-20 pt-28 pb-16">
          <section className="text-center">
            <h1 className="text-4xl lg:text-5xl font-semibold">Events at cracked.social</h1>
            <p className="mt-3 text-gray-300">Where builders meet, innovate, and create.</p>
          </section>

          <section className="mt-12">
            <FeaturedEvent />
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-medium">Upcoming Events</h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              {upcoming.map((e, i) => (
                <EventCard key={i} name={e.name} date={e.date} description={e.description} />
              ))}
            </div>
          </section>

          <section className="mt-12">
            <h3 className="text-xl font-medium">Past Events</h3>
            <PastEvents />
          </section>
        </main>

        <Footer />
      </div>
    </>
  )
}
