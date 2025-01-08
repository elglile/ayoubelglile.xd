import scrollbarHide from 'tailwind-scrollbar-hide';
import scrollbar from 'tailwind-scrollbar';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      colors: {
        'regal-blue': '#243c5a',
        'secinde_Color': 'bg-gray-100',
        'Tird_Color': '#0077B6',
        'my-text-color': 'black',
        'navbar_clr': '#cbd1dd',    
      },
    },
  },
  plugins: [
    scrollbarHide,
    scrollbar,   
  ],
};