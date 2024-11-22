
import { lightTheme } from './src/theme';
import { transform } from 'framer-motion';

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
      keyframes:{
        "infinite-y-scroll":{
          "0%":{opacity:"(0)",
            
          
            
          },
          "20%":{opacity:"(0.5)",
            scale:"(0.8)",
          
            
          },
          "50%":{opacity:"(1)",
            scale:"(1.2)"
          

          
          },
          "80%":{opacity:"(0)",
          
          
            
          },
         
          
          
        },
       
        
      },
      animation:{
        "infinite-y-scroll":"infinite-y-scroll 10s linear infinite ",
        
      }
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
}
