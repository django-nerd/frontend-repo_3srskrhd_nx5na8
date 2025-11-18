import React from 'react'

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0a0f1c] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row">
          <div>
            <h4 className="font-['Space_Mono',monospace] text-[#e0e0e0]">Medcotas</h4>
            <p className="mt-2 text-sm text-[#e0e0e0]/70">Woking, United Kingdom</p>
          </div>
          <div className="flex items-center gap-4">
            {['LinkedIn','Twitter','GitHub'].map((s) => (
              <a
                key={s}
                href="#"
                className="relative inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-semibold text-[#e0e0e0] transition hover:text-[#00f2ff]"
              >
                {s}
                <span className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 scale-x-0 bg-[#00f2ff] transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 text-xs text-[#e0e0e0]/50">© {new Date().getFullYear()} Medcotas. All rights reserved.</div>
      </div>
    </footer>
  )
}
