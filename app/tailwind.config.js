module.exports = {
  // mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "Helvetica", "Arial", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      stroke: (theme) => ({
        "gray-300": theme("colors.gray.300"),
        "gray-500": theme("colors.gray.500"),
        blue: theme("colors.blue.500"),
      })
    },
  },
  variants: {
    extend: { fontWeight: ["hover", "focus"] },
  },
  plugins: [],
};
