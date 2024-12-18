import { lightTheme } from './src/theme';  // Importing lightTheme, ensure it's properly defined
import { transform } from 'framer-motion'; // This import is not needed here unless you're using it elsewhere

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',  // This enables dark mode based on a class, e.g., 'dark'
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '376px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        dark: '#1E2422',
        dark2: '#181C14',
        light: '#ffffff',
        blue1: '#4A90E2'
      },
      keyframes: {
        // Infinite scrolling animation for fading in/out and scaling
        "infinite-y-scroll": {
          "0%": {
            opacity: 0,
            transform: "scale(0.8)",
          },
          "20%": {
            opacity: 0.5,
            transform: "scale(1)",
          },
          "50%": {
            opacity: 1,
            transform: "scale(1.2)",
          },
          "80%": {
            opacity: 0.5,
            transform: "scale(1)",
          },
          "100%": {
            opacity: 0,
            transform: "scale(0.8)",
          },
        },
        // Slide down animation (good for notifications or elements sliding in from top)
        "slideDown": {
          '0%': { 
            transform: 'translateY(-100%)', 
            opacity: 0 
          },
          '100%': { 
            transform: 'translateY(0)', 
            opacity: 1 
          },
        },
      },
      animation: {
        // Infinite y scroll animation
        "infinite-y-scroll": "infinite-y-scroll 10s linear infinite",
        // Slide down animation
        slideDown: 'slideDown 1s ease-out',
      },
    },
  },
  plugins: [],
}
