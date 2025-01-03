/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx}',
      './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        perspective: {
          'default': '1000px',
        },
        rotate: {
          'y-180': '180deg',
        },
        transformStyle: {
          'preserve-3d': 'preserve-3d',
        },
        backfaceVisibility: {
          'hidden': 'hidden',
        },
      },
    },
    plugins: [],
  }