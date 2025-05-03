/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff6e5',
          100: '#ffeacc',
          200: '#ffd699',
          300: '#ffc266',
          400: '#ffad33',
          500: '#ff9900',
          600: '#cc7a00',
          700: '#995c00',
          800: '#663d00',
          900: '#331f00',
        },
        secondary: {
          50: '#e5f2ed',
          100: '#cce6db',
          200: '#99ccb7',
          300: '#66b393',
          400: '#33996f',
          500: '#00804b',
          600: '#00663c',
          700: '#004d2d',
          800: '#00331e',
          900: '#001a0f',
        },
        accent: {
          50: '#f9e5e5',
          100: '#f3cccc',
          200: '#e79999',
          300: '#db6666',
          400: '#cf3333',
          500: '#c30000',
          600: '#9c0000',
          700: '#750000',
          800: '#4e0000',
          900: '#270000',
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'ui-sans-serif', 'system-ui'],
        serif: ['Cormorant Garamond', 'ui-serif', 'Georgia'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.75s ease-in-out',
        'slide-up': 'slideUp 0.75s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};