// tailwind.config.js
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'fadeInDrop': 'fadeInDrop 0.6s ease-out',
      },
      keyframes: {
        fadeInDrop: {
          '0%': {
            opacity: 0,
            transform: 'translateY(-20px) rotate(-3deg)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0) rotate(0deg)',
          },
        },
      },
    },
  },
  plugins: [],
}
