import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

export default function Hero() {
  const scrollToContact = () => {
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#0a0f1c]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle gradient overlays for depth */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a0f1c]/40 via-[#0a0f1c]/40 to-[#0a0f1c]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(0,242,255,0.15),transparent_50%)]" />

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6">
          <motion.div
            initial="hidden"
            animate="show"
            variants={variants}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#e0e0e0]">
              <span className="font-['Space_Mono',monospace] text-[#00f2ff]">Digitizing</span> the Depths.
            </h1>
            <p className="mt-6 text-base sm:text-lg text-[#e0e0e0]/80 max-w-2xl">
              Advanced Telemetry, Real-time Simulation, and Precision Hardware for the Modern Energy Industry.
            </p>

            <div className="mt-10">
              <button
                onClick={scrollToContact}
                className="group relative inline-flex items-center gap-3 rounded-lg bg-[#ff5e00] px-6 py-3 text-sm font-semibold text-black transition-shadow hover:shadow-[0_0_30px_#ff5e00] focus:outline-none"
              >
                <span className="relative z-10">Initialize System</span>
                {/* Loading bar on hover */}
                <span className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-black/10" />
                <span className="pointer-events-none absolute bottom-0 left-0 h-0.5 w-0 bg-black/60 transition-all duration-500 group-hover:w-full" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated data stream lines */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-40 w-px -translate-x-1/2 overflow-hidden">
        <span className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#00f2ff] to-transparent animate-pulse" />
      </div>
    </section>
  )
}
