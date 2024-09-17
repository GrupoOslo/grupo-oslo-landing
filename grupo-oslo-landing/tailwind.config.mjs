/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				orangeoslo: '#ff4001',
				greyoslo: '#535c54',
				greyoslodark: '#232323',
				beigeoslo: '#E8E4E1'
			}
		},
	},
	plugins: [],
}
