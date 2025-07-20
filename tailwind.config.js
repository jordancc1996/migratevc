/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'gold': '#d4af37',
        'dark-slate': '#0f0f0f',
        'dark-gray': '#1a1a1a',
        'light-gray': '#a0a0a0',
      },
      animation: {
        'fade-in-up': 'fadeInUp 1s ease forwards',
        'expand-line': 'expandLine 2s ease forwards',
        'slow-zoom': 'slowZoom 20s ease-in-out infinite alternate',
        'scroll-pulse': 'scrollPulse 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s ease-in-out infinite',
        'float': 'float 10s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          'from': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        expandLine: {
          'from': { width: '0' },
          'to': { width: '200px' },
        },
        slowZoom: {
          'from': { transform: 'scale(1)' },
          'to': { transform: 'scale(1.1)' },
        },
        scrollPulse: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px) translateX(0px)',
            opacity: '0.1',
          },
          '25%': {
            transform: 'translateY(-20px) translateX(10px)',
            opacity: '0.3',
          },
          '50%': {
            transform: 'translateY(-10px) translateX(-10px)',
            opacity: '0.2',
          },
          '75%': {
            transform: 'translateY(-30px) translateX(5px)',
            opacity: '0.4',
          },
        },
      },
    },
  },
  plugins: [],
}

