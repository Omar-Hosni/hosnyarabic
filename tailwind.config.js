module.exports = {
    darkMode: 'class', // <- this is required
    content: [
      './index.html',
      './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        fontFamily: {
          decoThuluth: ['DecoType Thuluth II', 'serif'],
          aThuluth: ['A Thuluth', 'serif'],
        },
      },
    },
    plugins: [],
  }
  