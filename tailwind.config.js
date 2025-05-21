/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#0A0A0A',
          800: '#121212',
          700: '#1A1A1A',
          600: '#242424',
          500: '#2E2E2E',
          400: '#383838',
          300: '#424242',
          200: '#4C4C4C',
          100: '#565656',
          50: '#606060',
        },
        secondary: {
          900: '#1A1A1A',
          800: '#242424',
          700: '#2E2E2E',
          600: '#383838',
          500: '#424242',
          400: '#4C4C4C',
          300: '#565656',
          200: '#606060',
          100: '#6A6A6A',
          50: '#747474',
        },
        accent: {
          light: '#FFFFFF',
          dark: '#0A0A0A',
          gray: '#808080',
        },
        success: {
          DEFAULT: '#4A4A4A',
          light: '#5A5A5A',
          dark: '#3A3A3A',
        },
        warning: {
          DEFAULT: '#808080',
          light: '#909090',
          dark: '#707070',
        },
        error: {
          DEFAULT: '#A0A0A0',
          light: '#B0B0B0',
          dark: '#909090',
        },
      },
      fontFamily: {
        mono: ['IBM Plex Mono', 'monospace'],
        display: ['Courier Prime', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulse-subtle 4s ease-in-out infinite',
        'gradient': 'gradient 8s ease infinite',
        'slide-up': 'slide-up 0.9s ease-out forwards',
        'slide-down': 'slide-down 0.6s ease-out forwards',
        'fade-in': 'fade-in 0.8s ease-out forwards',
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: 0.8 },
          '50%': { opacity: 1 },
        },
        'gradient': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        'slide-down': {
          '0%': { transform: 'translateY(-20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'subtle': '0 0 15px 0 rgba(255, 255, 255, 0.1)',
        'glow': '0 0 25px 0 rgba(255, 255, 255, 0.15)',
        'strong': '0 0 40px 0 rgba(255, 255, 255, 0.2)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'tech-pattern': "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%231A1A1A\" fill-opacity=\"0.4\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
      },
    },
  },
  plugins: [],
};