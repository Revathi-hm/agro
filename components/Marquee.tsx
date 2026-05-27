'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const items = [
  'Desiccated Coconut Powder',
  'Virgin Coconut Oil',
  'Coconut Milk',
  'Coconut Flakes',
  'Coconut Shell',
  'Testa',
  'D-Fat Powder',
  'Coconut Milk Powder',
]

export default function Marquee() {
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(trackRef.current, {
        xPercent: -50,
        ease: 'none',
        duration: 28,
        repeat: -1,
      })
    })
    return () => ctx.revert()
  }, [])

  const doubled = [...items, ...items]

  return (
    <div
      className="bg-forest border-y border-white/10 py-3.5 overflow-hidden"
      onMouseEnter={() => gsap.globalTimeline.pause()}
      onMouseLeave={() => gsap.globalTimeline.resume()}
    >
      <div ref={trackRef} className="flex whitespace-nowrap w-max">
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-3 px-8">
            <span className="w-1.5 h-1.5 rounded-full bg-olive-lt/70 flex-shrink-0" />
            <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-white/55">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
