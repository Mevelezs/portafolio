/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        'GC': 'repeat(auto-fit, minmax(250px, 1fr))',
      },
      animation: {
        "infinite-scroll": "infinite-scroll 30s linear infinite",
			},
			keyframes: {
				'infinite-scroll': {
					from: { transform: 'translateX(0)' },
					to: { transform: 'translateX(-100%)' },
				}
			}	 
    },
  },
  plugins: [],
};
