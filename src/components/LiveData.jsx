import React, { useEffect, useRef, useState } from 'react'

function SineWave({ color = '#00f2ff' }) {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    let raf
    let t = 0

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

    const draw = () => {
      t += 0.02
      const { width, height } = canvas
      ctx.clearRect(0, 0, width, height)
      ctx.lineWidth = 2
      ctx.strokeStyle = color
      ctx.beginPath()
      for (let x = 0; x < width; x += 4) {
        const y = height / 2 + Math.sin((x + t * 120) * 0.02) * 30
        ctx.lineTo(x, y)
      }
      ctx.stroke()

      raf = requestAnimationFrame(draw)
    }

    draw()
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
    }
  }, [color])

  return <canvas ref={ref} className="h-24 w-full" />
}

function TelemetryValue({ channel }) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    let v = Math.random() * 1000
    setValue(v)
    const id = setInterval(() => {
      // random walk
      v += (Math.random() - 0.5) * 20
      if (v < 0) v = 0
      if (v > 2000) v = 2000
      setValue(v)
    }, 120)
    return () => clearInterval(id)
  }, [])
  return (
    <div className="rounded-lg bg-black/30 p-3">
      <div className="text-xs text-[#00f2ff]/80">CH-{channel.toString().padStart(2,'0')}</div>
      <div className="mt-2 text-2xl font-semibold tabular-nums">{value.toFixed(2)}</div>
    </div>
  )
}

export default function LiveData() {
  return (
    <section id="live" className="bg-[#0a0f1c] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="col-span-2 rounded-2xl border border-white/10 bg-[#0f1526]/80 p-6 backdrop-blur-md">
            <div className="flex items-baseline justify-between">
              <h3 className="font-['Space_Mono',monospace] text-[#e0e0e0]">DART: Live Stream</h3>
              <span className="text-xs text-[#00f2ff]">Realtime</span>
            </div>
            <div className="mt-6 space-y-4">
              <SineWave color="#00f2ff" />
              <SineWave color="#ff5e00" />
              <SineWave color="#e0e0e0" />
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#0f1526]/80 p-6 backdrop-blur-md">
            <h3 className="font-['Space_Mono',monospace] text-[#e0e0e0]">Telemetry</h3>
            <div className="mt-4 grid grid-cols-2 gap-4 text-[#e0e0e0]/80">
              {Array.from({ length: 8 }).map((_, i) => (
                <TelemetryValue key={i} channel={i+1} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
