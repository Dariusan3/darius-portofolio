const config = {
  darkMode: 'selector',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
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
      }
    }
  },
  plugins: ["@tailwindcss/postcss"],
  darkMode: 'class',
};

export default config;
