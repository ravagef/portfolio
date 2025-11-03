import type { Metadata } from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import ParallaxBG from '@/components/ParallaxBG';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const space = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' });
const jet = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jet' });

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Modern bilingual portfolio',
  openGraph: {
    type: 'website',
    title: 'Portfolio',
    description: 'Click to access my portfolio! / ¡Haz clic para acceder a mi portafolio!',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${space.variable} ${jet.variable}`}>
      <body>
        <ParallaxBG />
        <div className="relative min-h-screen">{children}</div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

