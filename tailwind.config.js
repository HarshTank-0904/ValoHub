/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"], // Changed `purge` to `content` (Tailwind v3+)
  theme: {
    extend: {
      colors: {
        rd: "rgb(var(--rd) / <alpha-value>)",
        rdDark: "rgb(var(--rd-dark) / <alpha-value>)",
        blk: "rgb(var(--blk) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
