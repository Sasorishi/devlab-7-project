/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "node_modules/flowbite-react/lib/esm/**/*.js",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        accent: "var(--accent-color)",
      },
      textColor: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        accent: "var(--accent-color)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
