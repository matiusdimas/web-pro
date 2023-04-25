/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
   screens: {
      'lg': {'min': '1024px'},
      '2xl': {'min': '1800px'},
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
       keyframes: {
        wiggle: {
           "from": {
            opacity: '0%'
          },
           "to": {
             opacity: '100%'
            }
        }
      }
    },
  },
  plugins: [],
}

