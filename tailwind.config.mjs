module.exports = {
    darkMode: 'selector',
    content: [
      './app/**/*.{js,ts,jsx,tsx}',
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        colors: {
          lightHover: '#fcf4ff',
          darkHover: "#2a004a",
          darkTheme: '#11001F'
        },
        fontFamily: {
          Outfit: ['var(--font-outfit)', 'sans-serif'],
          Ovo: ['var(--font-ovo)', 'serif'],
        },
        boxShadow: {
          'black' : '4px 4px 0 #000',
          'white' : '4px 4px 0 #fff',
        },
        gridTemplateColumns: {
          'auto': 'repeat(auto-fit, minmax(200px, 1fr))',
        }
      },
    },
    plugins: ["@tailwindcss/postcss"],
  };