/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#051125',
        secondary: '#9d4300',
        'secondary-container': '#fd761a',
        'on-secondary': '#ffffff',
        'on-secondary-container': '#5c2400',
        'on-primary': '#ffffff',
        'on-primary-container': '#828da7',
        background: '#fdf8f8',
        'on-background': '#1c1b1b',
        surface: '#fdf8f8',
        'surface-container': '#f1edec',
        'surface-container-low': '#f7f3f2',
        'surface-container-high': '#ebe7e7',
        'on-surface': '#1c1b1b',
        'on-surface-variant': '#45474d',
        outline: '#75777d',
        'outline-variant': '#c5c6cd',
      },
      fontFamily: {
        headline: ['Space Grotesk', 'sans-serif'],
        body: ['Work Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}