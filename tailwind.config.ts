import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0a0b0f',
        accent: '#6cf0ff',
        primary: '#b8f3ff',
        muted: '#9aa5b1',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        display: ['Space Grotesk', 'Inter', 'ui-sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace'],
      },
      backgroundImage: {
        topo: "url('/bg-topo.svg')",
      },
    },
  },
  plugins: [],
};

export default config;

