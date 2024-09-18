/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          '50': '#ecf2ff',
          '100': '#dde7ff',
          '200': '#c2d2ff',
          '300': '#9db3ff',
          '400': '#7689ff',
          '500': '#5863fe',
          '600': '#3937f4',
          '700': '#302bd7',
          '800': '#2825ae',
          '900': '#262689',
          '950': '#17174f',
        },
        secondary: {
        '50': '#f4f4f6',
        '100': '#ebebee',
        '200': '#dbdbe2',
        '300': '#c3c4cd',
        '400': '#a5a5b5',
        '500': '#908fa2',
        '600': '#817e92',
        '700': '#747184',
        '800': '#625f6e',
        '900': '#514f59',
        '950': '#333239',
       },
      }
    },
  },
  plugins: [],
};

