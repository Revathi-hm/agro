'use client'
import { useEffect, useRef, useState } from 'react'

function CountUp({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref     = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return
        started.current = true
        observer.disconnect()

        const duration  = 1800
        const startTime = performance.now()

        const tick = (now: number) => {
          const elapsed  = now - startTime
          const progress = Math.min(elapsed / duration, 1)
          const eased    = 1 - Math.pow(1 - progress, 3)
          setCount(Math.floor(eased * target))
          if (progress < 1) requestAnimationFrame(tick)
          else setCount(target)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.1 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return <span ref={ref}>{count}{suffix}</span>
}

const stats = [
  { target: 15,  suffix: '+', label: 'Years of Excellence' },
  { target: 8,   suffix: '',  label: 'Premium Products'    },
  { target: 30,  suffix: '+', label: 'Countries Served'    },
  { target: 500, suffix: '+', label: 'Satisfied Clients'   },
]

export default function Stats() {
  return (
    <section className="py-16 bg-text-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(93,107,54,0.12),transparent_70%)]" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map(({ target, suffix, label }) => (
            <div key={label} className="text-center py-4">
              <div className="font-playfair text-5xl font-bold leading-none mb-2" style={{ color: '#c8d8a8' }}>
                <CountUp target={target} suffix={suffix} />
              </div>
              <div className="text-[11px] font-semibold tracking-widest uppercase text-white/40">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
