/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",        // For files in the app folder
    "./pages/**/*.{js,jsx}",      // For files in the pages folder
    "./components/**/*.{js,jsx}", // IMPORTANT: For your components folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}