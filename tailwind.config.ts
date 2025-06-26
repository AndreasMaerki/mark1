import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'grid-white': 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 32 32\' width=\'100\' height=\'100\' fill=\'none\' stroke=\'rgb(255 255 255 / 0.03)\'%3E%3Cpath d=\'M0 .5H31.5V32\'/%3E%3C/svg%3E")',
        'grid-black': 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 32 32\' width=\'100\' height=\'100\' fill=\'none\' stroke=\'rgb(0 0 0 / 0.2)\'%3E%3Cpath d=\'M0 .5H31.5V32\'/%3E%3C/svg%3E")',
      },
      colors: {
        'primary-dark': '#0d0420',
        'primary-light': '#E2CBFF',
        'muted': '#BEC1DD',
        'muted-dark': '#8B8BA3',
        'light': '#c5d1ff',
        'dark': '#110627',
        black: {
          DEFAULT: '#000',
          100: '#000319',
          200: 'rgba(17, 25, 40, 0.75)',
          300: 'rgba(255, 255, 255, 0.125)',
        },
        white: {
          DEFAULT: '#FFF',
          100: '#BEC1DD',
          200: '#C1C2D3',
        },
        blue: {
          100: '#E4ECFF',
        },
        purple: {
          DEFAULT: '#CBACF9',
          400: '#B794F6',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'spin-slow': 'spin 3s linear infinite',
        spotlight: 'spotlight 2s ease .75s 1 forwards',
        shimmer: 'shimmer 2s linear infinite',
        'floating': 'floating 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        spotlight: {
          '0%': {
            opacity: '0',
            transform: 'translate(-72%, -62%) scale(0.5)',
          },
          '100%': {
            opacity: '1',
            transform: 'translate(-50%,-40%) scale(1)',
          },
        },
        shimmer: {
          from: {
            backgroundPosition: '0 0',
          },
          to: {
            backgroundPosition: '-200% 0',
          },
        },
        floating: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem'
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'Fira Code', 'monospace']
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '2rem',
        xl: '3rem'
      }
    },
    screens: {
      ...defaultTheme.screens,
      xs: '480px'
    }
  },
  plugins: [
    function({ addUtilities }: { addUtilities: any }) {
      const newUtilities = {
        '.bg-grid-white\\/\\[0\\.03\\]': {
          backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 32 32\' width=\'100\' height=\'100\' fill=\'none\' stroke=\'rgb(255 255 255 / 0.03)\'%3E%3Cpath d=\'M0 .5H31.5V32\'/%3E%3C/svg%3E")',
        },
        '.bg-grid-black\\/\\[0\\.2\\]': {
          backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 32 32\' width=\'100\' height=\'100\' fill=\'none\' stroke=\'rgb(0 0 0 / 0.2)\'%3E%3Cpath d=\'M0 .5H31.5V32\'/%3E%3C/svg%3E")',
        },
        '.bg-grid-white\\/\\[0\\.02\\]': {
          backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 32 32\' width=\'100\' height=\'100\' fill=\'none\' stroke=\'rgb(255 255 255 / 0.02)\'%3E%3Cpath d=\'M0 .5H31.5V32\'/%3E%3C/svg%3E")',
        },
        '.bg-grid-black\\/\\[0\\.02\\]': {
          backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 32 32\' width=\'100\' height=\'100\' fill=\'none\' stroke=\'rgb(0 0 0 / 0.02)\'%3E%3Cpath d=\'M0 .5H31.5V32\'/%3E%3C/svg%3E")',
        },
      }
      addUtilities(newUtilities)
    }
  ]
} satisfies Config
