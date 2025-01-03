module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // This will work with your existing dark-mode class
  theme: {
    extend: {
      colors: {
        // Your custom accent colors
        accent: {
          home: '#e63946',
          about: '#FFD429',
          portfolio: '#7757FF',
          contact: '#FF3E0F',
        }
      },
      gridTemplateColumns: {
        'auto-fit-60': 'repeat(auto-fit, minmax(60px, 1fr))',
      },
      scale: {
        '102': '1.02',
      }
    },
  },
  plugins: [],
}