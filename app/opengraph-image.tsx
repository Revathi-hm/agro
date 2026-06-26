import { ImageResponse } from 'next/og'

export const runtime     = 'edge'
export const alt         = 'Dhanalakshmi Agro Products — Premium Coconut Products from Tiptur, Karnataka'
export const size        = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          padding: '72px 80px',
          background: 'linear-gradient(135deg, #FAF7F2 0%, #F0E8DC 40%, #DDD4C0 100%)',
          position: 'relative',
          fontFamily: 'serif',
        }}
      >
        {/* Green accent bar top-left */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: 8, height: '100%', background: '#125426' }} />

        {/* Brand name */}
        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 32 }}>
          <span style={{ fontSize: 56, fontWeight: 700, color: '#2F2913', lineHeight: 1.1, letterSpacing: '-1px' }}>
            Dhanalakshmi
          </span>
          <span style={{ fontSize: 56, fontWeight: 700, color: '#5D6B36', lineHeight: 1.1, letterSpacing: '-1px' }}>
            Agro Products
          </span>
        </div>

        {/* Tagline */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 40 }}>
          <div style={{ width: 48, height: 2, background: '#125426' }} />
          <span style={{ fontSize: 22, color: '#7A5230', fontWeight: 400, letterSpacing: '0.06em' }}>
            Premium Coconut Products · Est. 2007
          </span>
        </div>

        {/* Product pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          {['Desiccated Coconut Powder', 'Virgin Coconut Oil', 'Coconut Milk Powder', 'D-Fat Coconut Powder'].map((p) => (
            <div
              key={p}
              style={{
                padding: '8px 20px',
                borderRadius: 999,
                background: 'rgba(18,84,38,0.10)',
                border: '1px solid rgba(18,84,38,0.20)',
                fontSize: 15,
                color: '#125426',
                fontWeight: 600,
              }}
            >
              {p}
            </div>
          ))}
        </div>

        {/* URL bottom right */}
        <div style={{ position: 'absolute', bottom: 40, right: 80, fontSize: 15, color: '#858367', letterSpacing: '0.06em' }}>
          dhanalakshmiagroproducts.com
        </div>
      </div>
    ),
    { ...size }
  )
}
