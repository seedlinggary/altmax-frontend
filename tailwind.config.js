/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'regal-blue': {
          DEFAULT: '#063779',
          50: '#eaf1fb',
          100: '#cfe0f5',
          200: '#9fc0ea',
          300: '#6a9cdb',
          400: '#3a72c0',
          500: '#0d4d9e',
          600: '#0a3f85',
          700: '#063779',
          800: '#052a5c',
          900: '#031d3e',
          950: '#02132a',
        },
        'sky': {
          DEFAULT: '#80C7F8',
          light: '#B7E1FB',
          dark: '#4FA6E8',
        },
        'charcoal': {
          DEFAULT: '#262827',
          light: '#3d403e',
        },
        'ivory': '#F7F8FA',
      },
      fontFamily: {
        serif: ['"PT Serif"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        wordmark: ['Poppins', '"Inter"', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '90rem',
      },
      boxShadow: {
        soft: '0 4px 24px -6px rgba(6, 55, 121, 0.15)',
        card: '0 2px 12px -2px rgba(38, 40, 39, 0.10)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(16px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
