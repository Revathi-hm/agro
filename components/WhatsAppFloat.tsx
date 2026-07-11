'use client'
import { useState } from 'react'

export default function WhatsAppFloat() {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href="https://wa.me/919844151267?text=Hello%2C%20I%20am%20interested%20in%20your%20coconut%20products"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 group"
      style={{ filter: 'drop-shadow(0 4px 12px rgba(37,211,102,0.28))' }}
    >
      {/* Label */}
      <span
        className="text-white text-xs font-semibold px-3 py-1.5 rounded-full whitespace-nowrap transition-all duration-300"
        style={{
          background: '#25D366',
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'translateX(0) scale(1)' : 'translateX(8px) scale(0.95)',
          pointerEvents: 'none',
        }}
      >
        Chat with us
      </span>

      {/* Button */}
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
        style={{ background: '#25D366' }}
      >
        <svg viewBox="0 0 32 32" className="w-8 h-8" fill="white">
          <path d="M16 2C8.28 2 2 8.28 2 16c0 2.46.65 4.87 1.9 7L2 30l7.26-1.88A13.94 13.94 0 0016 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm0 25.5a11.46 11.46 0 01-5.85-1.6l-.42-.25-4.31 1.12 1.15-4.2-.27-.44A11.5 11.5 0 1116 27.5zm6.32-8.62c-.35-.17-2.05-1.01-2.37-1.13-.32-.11-.55-.17-.78.18-.23.35-.9 1.13-1.1 1.36-.2.23-.4.26-.75.09-.35-.18-1.47-.54-2.8-1.73-1.03-.92-1.73-2.06-1.93-2.41-.2-.35-.02-.54.15-.71.16-.16.35-.4.52-.61.18-.21.23-.35.35-.58.12-.23.06-.44-.03-.61-.09-.18-.78-1.88-1.07-2.57-.28-.68-.57-.58-.78-.59l-.67-.01c-.23 0-.61.09-.93.44-.32.35-1.21 1.18-1.21 2.88s1.24 3.34 1.41 3.57c.18.23 2.44 3.73 5.91 5.23.83.36 1.47.57 1.98.73.83.26 1.59.22 2.18.14.67-.1 2.05-.84 2.34-1.65.29-.81.29-1.5.2-1.65-.08-.14-.31-.23-.66-.4z"/>
        </svg>
      </div>
    </a>
  )
}
