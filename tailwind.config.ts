import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#06080b',
        surface: '#0b0f14',
        'surface-2': '#111720',
        border: '#1a2030',
        accent: '#00d4ff',
        'accent-hover': '#00b8dc',
        'text-primary': '#dde4ec',
        'text-secondary': '#8a9bb0',
        'text-muted': '#5e7080',
        green: {
          400: '#34d399',
          500: '#10b981',
        },
        gold: '#e8a44a',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
        display: ['var(--font-syne)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-lora)', 'Georgia', 'serif'],
      },
      maxWidth: {
        '7xl': '80rem',
      },
      keyframes: {
        scanRight: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(400%)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.7', transform: 'translateY(-50%) scale(1)' },
          '50%': { opacity: '1', transform: 'translateY(-50%) scale(1.05)' },
        },
      },
      animation: {
        'scan-right': 'scanRight 2s ease infinite',
        'glow-pulse': 'glowPulse 6s ease infinite',
      },
    },
  },
  plugins: [],
}

export default config
