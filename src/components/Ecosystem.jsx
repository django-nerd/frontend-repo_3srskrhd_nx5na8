import React from 'react'
import { motion } from 'framer-motion'
import { Cpu, Shield, LineChart } from 'lucide-react'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

const cards = [
  {
    title: 'Software — The Mind',
    desc: 'TAS & FACT analysis suites. Predictive Fatigue Modeling.',
    icon: LineChart,
    accent: 'from-[#00f2ff] to-[#00c4ff]'
  },
  {
    title: 'Hardware — The Muscle',
    desc: 'REAM HMI units. Millisecond Latency Data Acquisition.',
    icon: Cpu,
    accent: 'from-[#e0e0e0] to-[#bdbdbd]'
  },
  {
    title: 'Safety — The Shield',
    desc: 'EWSM modules. Automated Fail-Safe Protocols.',
    icon: Shield,
    accent: 'from-[#ff5e00] to-[#ff7a33]'
  }
]

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="relative w-full bg-[#0a0f1c] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {cards.map((c, i) => (
            <motion.div key={i} variants={item}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0f1526]/80 p-6 shadow-2xl backdrop-blur-md"
            >
              <div className={`absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-br ${c.accent} mix-blend-soft-light`} />
              <div className="relative z-10">
                <c.icon className="h-8 w-8 text-[#00f2ff]" />
                <h3 className="mt-4 font-['Space_Mono',monospace] text-xl text-[#e0e0e0]">{c.title}</h3>
                <p className="mt-2 text-sm text-[#e0e0e0]/70">{c.desc}</p>
                <button className="mt-6 inline-flex items-center text-xs font-semibold text-[#00f2ff] hover:text-[#ff5e00] transition-colors">
                  Learn more →
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
