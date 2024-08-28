/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundColor: {
        'custom-primary': '#8B5CF6', // Example custom theme color
      },
      textColor: {
        'custom-primary': '#FFFFFF',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['light', 'dark', 'custom'],
      textColor: ['light', 'dark', 'custom'],
    },
  },
    plugins: [],
};
