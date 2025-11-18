import React, { useEffect, useRef } from 'react'

// Simple spinning wireframe globe using Canvas for performance
export default function Globe() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    let raf
    const dpr = window.devicePixelRatio || 1

    const resize = () => {
      const { width, height } = canvas.getBoundingClientRect()
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    const onResize = () => resize()
    window.addEventListener('resize', onResize)

    let t = 0
    const draw = () => {
      t += 0.01
      const { width, height } = canvas
      const r = Math.min(width, height) / 2 - 10
      const cx = width / 2
      const cy = height / 2

      ctx.clearRect(0, 0, width, height)
      ctx.strokeStyle = '#00f2ff'
      ctx.globalAlpha = 0.9
      ctx.lineWidth = 1

      // longitudes
      for (let i = -Math.PI; i <= Math.PI; i += Math.PI / 12) {
        ctx.beginPath()
        for (let j = -Math.PI / 2; j <= Math.PI / 2; j += Math.PI / 60) {
          const x = cx + r * Math.cos(j) * Math.sin(i + t)
          const y = cy + r * Math.sin(j)
          j === -Math.PI / 2 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
        }
        ctx.stroke()
      }

      // latitudes
      for (let k = -Math.PI / 2; k <= Math.PI / 2; k += Math.PI / 12) {
        ctx.beginPath()
        for (let l = -Math.PI; l <= Math.PI; l += Math.PI / 60) {
          const x = cx + r * Math.cos(k) * Math.cos(l + t)
          const y = cy + r * Math.sin(k)
          l === -Math.PI ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
        }
        ctx.stroke()
      }

      // connection points
      const points = [
        { lat: 51.3168, lon: -0.5616 }, // Woking, UK
        { lat: 29.7499, lon: -95.3584 }, // Houston, USA
        { lat: 25.2048, lon: 55.2708 }, // Dubai, Middle East
      ]

      points.forEach((p) => {
        const lat = (p.lat * Math.PI) / 180
        const lon = (p.lon * Math.PI) / 180 + t
        const x = cx + r * Math.cos(lat) * Math.cos(lon)
        const y = cy + r * Math.sin(lat)
        ctx.beginPath()
        ctx.fillStyle = '#ff5e00'
        ctx.arc(x, y, 4, 0, Math.PI * 2)
        ctx.fill()
      })

      raf = requestAnimationFrame(draw)
    }

    draw()
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <section id="global" className="bg-[#0a0f1c] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-2xl border border-white/10 bg-[#0f1526]/80 p-6 backdrop-blur-md">
          <h3 className="font-['Space_Mono',monospace] text-[#e0e0e0]">Global Operations</h3>
          <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="aspect-square w-full overflow-hidden rounded-xl bg-black/30">
              <canvas ref={ref} className="h-full w-full" />
            </div>
            <div className="flex flex-col justify-center gap-4 text-[#e0e0e0]/80">
              <p>We deliver procurement and consultancy across key energy hubs worldwide.</p>
              <ul className="space-y-2 text-[#e0e0e0]">
                <li>• HQ — Woking, United Kingdom</li>
                <li>• United States Operations</li>
                <li>• Middle East Operations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
