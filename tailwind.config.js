import { lightTheme } from './src/theme';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#1E2422',
        dark2: '#181C14',
        light: '#ffffff',
      },
    },
  },
  plugins: [],
}