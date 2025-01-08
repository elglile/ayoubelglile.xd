// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
  
//   theme: {    container: {
//     center: true,
//     padding:"2rem",
//   },
//     extend: {
//       colors: {
//         'regal-blue': '#243c5a',
//         // 'primary_Color':'bg-gray-200',
//         'secinde_Color':'bg-gray-100 ',
//         'Tird_Color': 'red',
//         'navbar_clr':'#cbd1dd',        
//       },
//     },
//   },
//   plugins: [
//     require('tailwind-scrollbar'),
//   ],
// }


// tailwind.config.js
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
        // 'primary_Color':'bg-gray-200',
        'secinde_Color':'bg-gray-100 ',
        'Tird_Color': '#0077B6',
        'my-text-color':'black',

        'navbar_clr':'#cbd1dd',    
      },
    },
  },
  // plugins: [
  //     require('tailwind-scrollbar-hide'),
  //     require('tailwind-scrollbar'),   
  //   ],
  plugins: [forms, typography],
}
  
