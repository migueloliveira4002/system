import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './styles/**/*.{css}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#0A0A0A',
          secondary: '#141414',
          tertiary: '#1C1C1C',
        },
        brand: {
          red: '#FF3B3B',
          black: '#0A0A0A',
        },
        accent: {
          DEFAULT: '#2A2A2A',
          subtle: '#FF3B3B1A',
        },
        text: {
          primary: '#F3F4F6',
          secondary: '#9CA3AF',
        },
        border: {
          DEFAULT: '#2A2A2A',
        },
      },
      boxShadow: {
        glow: '0 0 24px rgba(255, 59, 59, 0.25)',
        insetGlow: 'inset 0 0 12px rgba(255, 59, 59, 0.15)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        display: ['var(--font-montserrat)', 'Montserrat', 'Inter', 'sans-serif'],
        inter: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        oswald: ['var(--font-oswald)', 'Oswald', 'Inter', 'sans-serif'],
        jetbrains: ['var(--font-jetbrains)', 'JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'radial-faint': 'radial-gradient(ellipse at center, rgba(255,59,59,0.10), rgba(255,59,59,0.0) 60%)',
      },
      transitionTimingFunction: {
        'egress': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        'border-pulse': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(255, 59, 59, 0.4)' },
          '50%': { boxShadow: '0 0 0 6px rgba(255, 59, 59, 0.0)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-3px)' },
        },
      },
      animation: {
        borderPulse: 'border-pulse 2.4s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          md: '1.5rem',
          lg: '2rem',
          xl: '2.5rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

export default config
