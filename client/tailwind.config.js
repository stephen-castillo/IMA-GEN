/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
        animation: {
            bubble: 'bubble 10s infinite',
        },
        keyframes: {
            bubble: {
            '0%': { transform: 'translateY(0) scale(0.5)', opacity: 0.1 },
            '100%': { transform: 'translateY(-100vh) scale(1.2)', opacity: 1 },
            },
        },
        transitionDelay: {
            '1s': '1s',
            '2s': '2s',
            '3s': '3s',
            '4s': '4s',
            // continue as needed
        },
    },
  },
  plugins: [],
}
