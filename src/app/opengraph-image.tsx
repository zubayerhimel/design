import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Rifat Ashfiha Khan - Graphic Designer Portfolio'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to right, #f43f5e, #a855f7)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '48px',
        }}
      >
        <h1
          style={{
            fontSize: '64px',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '24px',
            textAlign: 'center',
          }}
        >
          Rifat Ashfiha Khan
        </h1>
        <p
          style={{
            fontSize: '32px',
            color: 'rgba(255, 255, 255, 0.9)',
            textAlign: 'center',
          }}
        >
          Creative Graphic Designer
        </p>
      </div>
    )
  )
} 