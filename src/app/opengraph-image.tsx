import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #1a3a2a 0%, #0d2218 100%)',
          padding: '72px 80px',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        <div
          style={{
            fontSize: 13,
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: '#52b788',
            fontWeight: 700,
            marginBottom: 'auto',
          }}
        >
          CO2.ke
        </div>
        <div
          style={{
            fontSize: 60,
            fontWeight: 700,
            color: '#ffffff',
            lineHeight: 1.2,
            marginBottom: 32,
          }}
        >
          Kenya Carbon Market Intelligence
        </div>
        <div style={{ fontSize: 20, color: 'rgba(255,255,255,0.4)' }}>
          co2.ke
        </div>
      </div>
    ),
    size,
  )
}
