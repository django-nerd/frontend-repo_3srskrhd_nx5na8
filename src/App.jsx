import React from 'react'
import Hero from './components/Hero'
import Ecosystem from './components/Ecosystem'
import LiveData from './components/LiveData'
import Globe from './components/Globe'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0a0f1c] text-[#e0e0e0]">
      <Hero />
      <section className="bg-[#0a0f1c] py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-['Space_Mono',monospace] text-2xl text-[#00f2ff]">The Ecosystem</h2>
          <p className="mt-2 max-w-2xl text-[#e0e0e0]/70">
            An integrated stack spanning real-time data acquisition, simulation intelligence, and safety orchestration.
          </p>
        </div>
      </section>
      <Ecosystem />

      <section className="bg-[#0a0f1c] py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-['Space_Mono',monospace] text-2xl text-[#00f2ff]">Live Data</h2>
          <p className="mt-2 max-w-2xl text-[#e0e0e0]/70">
            Interact with a simulated DART interface demonstrating streaming telemetry.
          </p>
        </div>
      </section>
      <LiveData />

      <section className="bg-[#0a0f1c] py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-['Space_Mono',monospace] text-2xl text-[#00f2ff]">Global Operations</h2>
          <p className="mt-2 max-w-2xl text-[#e0e0e0]/70">
            Presence across strategic energy corridors to deliver robust procurement and consultancy.
          </p>
        </div>
      </section>
      <Globe />

      <Footer />
    </div>
  )
}

export default App
