/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        colors: {
          primary: '#0A192F',
          accent: '#00FF9F',
          lightGray: '#E0E0E0',
          darkBg: '#121212'
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
          mono: ['Fira Code', 'monospace'],
        },
        animation: {
          'slide-up': 'slideUp 0.5s ease-out',
          'slide-right': 'slideRight 0.5s ease-out',
          'slide-left': 'slideLeft 0.5s ease-out',
          scroll: 'scroll 30s linear infinite',
          
          // NEW: The Radar Spin Animation
          'spin-slow': 'spin 4s linear infinite', 
          'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        },
        keyframes: {
          // ... (keep your existing keyframes for slideUp, scroll, etc.) ...
          slideUp: {
            '0%': { transform: 'translateY(100%)', opacity: '0' },
            '100%': { transform: 'translateY(0)', opacity: '1' }
          },
          slideRight: {
            '0%': { transform: 'translateX(-100%)', opacity: '0' },
            '100%': { transform: 'translateX(0)', opacity: '1' }
          },
          slideLeft: {
            '0%': { transform: 'translateX(100%)', opacity: '0' },
            '100%': { transform: 'translateX(0)', opacity: '1' }
          },
          scroll: {
            '0%': { transform: 'translateX(0)' },
            '100%': { transform: 'translateX(-50%)' }
          }
        }
      }
    },
    plugins: []
  };