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
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.neutral.800'),
            a: {
              color: theme('colors.primary.600'),
              '&:hover': {
                color: theme('colors.primary.800'),
              },
            },
          },
        },
        invert: {
          css: {
            color: theme('colors.neutral.200'),
            a: {
              color: theme('colors.primary.400'),
              '&:hover': {
                color: theme('colors.primary.300'),
              },
            },
            h1: {
              color: theme('colors.neutral.100'),
            },
            h2: {
              color: theme('colors.neutral.100'),
            },
            h3: {
              color: theme('colors.neutral.100'),
            },
            h4: {
              color: theme('colors.neutral.100'),
            },
            strong: {
              color: theme('colors.neutral.100'),
            },
            code: {
              color: theme('colors.neutral.100'),
            },
            blockquote: {
              color: theme('colors.neutral.100'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};