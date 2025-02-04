/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        GC: "repeat(auto-fit, minmax(250px, 1fr))",
        IC: "repeat(auto-fit, minmax(90px, 1fr))",
      },
      animation: {
        "infinite-scroll": "infinite-scroll 30s linear infinite",
        "background-shine": "background-shine 2s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "background-shine": {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
      },
    },
  },
  plugins: [
     require('tailwind-scrollbar'),
  ],
};
