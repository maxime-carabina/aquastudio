/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Gotham: ['Gotham', 'sans-serif'],
        GothamLight: ['Gotham-Light', 'sans-serif'],
        GothamBook: ['Gotham-Book', 'sans-serif'],
        AvenirNext: ['AvenirNext', 'sans-serif'],
        DegularVariable: ['DegularVariable', 'sans-serif'],
      },
      colors: {
        background: 'rgb(var(--background) / <alpha-value>)',
        primary: 'rgb(var(--blue) / <alpha-value>)',
        secondary: 'rgb(var(--creme) / <alpha-value>)',
        tertiary: 'rgb(var(--white) / <alpha-value>)',
        'f-primary': 'rgb(var(--blue) / <alpha-value>)',
        'f-secondary': 'rgb(var(--creme) / <alpha-value>)',
        'f-black': 'rgb(var(--black) / <alpha-value>)',
        'f-white': 'rgb(var(--white) / <alpha-value>)',
      },
      keyframes: {
        loop: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        'infinite-loop': 'loop 5s linear infinite',
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.aqua-big-banner': {
          fontSize: '120px',
          fontWeight: '400',
          fontFamily: theme('fontFamily.Gotham'),
          lineHeight: '135px',
          fontStyle: 'normal',
        },
        '.aqua-banner': {
          fontSize: '80px',
          fontWeight: '400',
          fontFamily: theme('fontFamily.Gotham'),
          lineHeight: '135px',
          fontStyle: 'normal',
        },
        '.aqua-title': {
          fontSize: '25px',
          fontWeight: '500',
          fontFamily: theme('fontFamily.Gotham'),
          lineHeight: 'normal',
        },
        '.aqua-buttons': {
          fontSize: '20px',
          fontWeight: '500',
          fontFamily: theme('fontFamily.Gotham'),
          lineHeight: '21.24px',
        },
        '.aqua-big-caption': {
          fontSize: '25px',
          fontWeight: '500',
          fontFamily: theme('fontFamily.Gotham'),
        },
        '.aqua-caption': {
          fontSize: '20px',
          fontWeight: '500',
          fontFamily: theme('fontFamily.Gotham'),
        },
        '.aqua-menu-active': {
          fontSize: '25px',
          fontWeight: '500',
          fontFamily: theme('fontFamily.Gotham'),
          lineHeight: 'normal',
          fontStyle: 'normal',
        },
        '.aqua-menu-default': {
          fontSize: '25px',
          fontWeight: '500',
          fontFamily: theme('fontFamily.Gotham'),
          lineHeight: 'normal',
          fontStyle: 'normal',
        },
        '.aqua-menu-underline': {
          fontSize: '25px',
          fontWeight: '500',
          fontFamily: theme('fontFamily.Gotham'),
          lineHeight: 'normal',
          textDecoration: 'underline',
          fontStyle: 'normal',
        },
      });
    }),
  ],
};
