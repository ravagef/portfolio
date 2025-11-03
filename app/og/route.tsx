import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 60,
          background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'system-ui',
        }}
      >
        {/* Logo SVG embedded */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 40,
          }}
        >
          <svg
            width="160"
            height="160"
            viewBox="0 0 160 160"
            fill="white"
            style={{ filter: 'invert(1)' }}
          >
            <path d="M40.55,29.04L4.79,123.76h15.4l14.6-40.36c.21-.58.42-1.15.63-1.73,4.81-13.29,9.61-26.58,14.42-39.87,1.54-4.25,3.08-8.51,4.61-12.76l-2.97,12.79,15.16,41.59h4.94l4.68-12.79c-5.12-13.86-10.23-27.72-15.35-41.58" />
            <rect x="29.62" y="83.42" width="51.41" height="12.54" />
            <polyline points="91.96 29.04 56.2 123.76 71.6 123.76 86.19 83.4 105.85 29.04" />
            <polyline points="157.25 28.65 137.6 83.01 123 123.37 107.6 123.37 143.36 28.65" />
            <polyline points="132.27 63.83 136.6 74.74 76.77 98.47 72.44 87.56" />
            <polyline points="51.47 41.83 49.76 41.83 49.76 29.04 55.42 29.04" />
            <path d="M12.93,144.7" />
          </svg>
        </div>
        {/* Bilingual text */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 20,
            textAlign: 'center',
            maxWidth: '90%',
          }}
        >
          <div style={{ fontSize: 48, fontWeight: 600 }}>
            Click to access my portfolio!
          </div>
          <div style={{ fontSize: 48, fontWeight: 600 }}>
            ¡Haz clic para acceder a mi portafolio!
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
