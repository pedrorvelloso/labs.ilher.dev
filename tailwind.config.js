const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ['./app/**/*.{js,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'south-system': '#ff5100',
      },
      fontFamily: {
        sans: ['Nunito', ...defaultTheme.fontFamily.sans],
      },
      minHeight: {
        'index-hero': 'calc(100vh - 87px)',
      },
      backgroundImage: {
        stack:
          'linear-gradient(90deg, rgba(69, 62, 193, 0.05) 0%, rgba(0, 0, 0, 0.05) 100%);',
        'stack-sm':
          'linear-gradient(90deg, rgba(69, 62, 193, 0.1) 0%, rgba(0, 0, 0, 0.05) 100%);',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
}
