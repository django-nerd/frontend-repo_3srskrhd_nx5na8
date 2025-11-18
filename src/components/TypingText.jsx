import React, { useEffect, useState } from 'react'

export default function TypingText({ text = '', speed = 25, className = '' }) {
  const [display, setDisplay] = useState('')

  useEffect(() => {
    let i = 0
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setDisplay(text)
      return
    }
    const id = setInterval(() => {
      i += 1
      setDisplay(text.slice(0, i))
      if (i >= text.length) clearInterval(id)
    }, speed)
    return () => clearInterval(id)
  }, [text, speed])

  return (
    <span className={className}>
      {display}
      <span className="ml-1 inline-block h-5 w-2 animate-pulse bg-[#00f2ff] align-middle" style={{ boxShadow: '0 0 10px #00f2ff' }} />
    </span>
  )
}
