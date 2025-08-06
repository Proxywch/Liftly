/** @type {import('tailwindcss').Config} */
module.exports = {
    // IMPORTANT: Tell Tailwind where to look for classes
    content: [
      "./App.{js,jsx,ts,tsx}", 
      "./src/**/*.{js,jsx,ts,tsx}",
      "./**/*.{js,jsx,ts,tsx}"  // Fallback to catch everything
    ],
    theme: {
      extend: {
        colors: {
          ruby: {
            500: '#ce1454',
            600: '#c01149',
          },
          slate: {
            800: '#1e293b',
            900: '#0f172a',
          }
        },
      },
    },
    plugins: [],
  }