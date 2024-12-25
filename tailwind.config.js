/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        background: "var(--background)",
        filterTablets: "var(--filter-tablets)",
        darkGrayishCyan: "var(--dark-grayish-cyan)",
        veryDarkGrayishCyan: "var(--very-dark-grayish-cyan)",
      },
      boxShadow: {
        'custom-cyan': '0px 3px 7px 4px rgba(91, 164, 164, 0.2)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
  ],
}

