/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#86198f',
				secondaryOnNav: '#4a044e',
				hoverOnNav: '#374151',
				secondaryText: 'white',
				bgDark: '#0a0a0a',
				primaryDark: '#CA26CC',
				primaryTextDark: 'white'
			},
			fontSize: {
				sm: '1rem',
				base: '1.5rem',
				lg: '2rem',
				xl: '2.5rem',
				'2xl': '4rem'
			}
		},
	},
	plugins: [],
	darkMode: 'class'
}
