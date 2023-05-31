/** @type {import('tailwindcss').Config} */
module.exports = {
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Custom Font", "sans-serif"],
      },
      keyframes: {
        'fade-in-down': {
            '0%': {
                opacity: '0',
                transform: 'scaleY(0)'
            },
            '100%': {
                opacity: '1',
                transform: 'scaleY(1)'
            },
        },
        'fade-in-right': {
          '0%': {
              opacity: '0',
            transform: 'scaleX(0)'
              
          },
          '100%': {
              opacity: '1',
              transform: 'scaleX(1)'
          },          
        },
        'fade-out': {
          '0%': {
            opacity: '0',
            
          },
          '100%': {
            opacity: '1',
            
          },
        }
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-out',
        'fade-in-down-nav': 'fade-in-down 1s ease-out',
        'fade-in-right': 'fade-in-right 0.5s ease-out',
        'fade-out': 'fade-out 0.5s ease-out'
      }
    },
  },
  plugins: [],
};

