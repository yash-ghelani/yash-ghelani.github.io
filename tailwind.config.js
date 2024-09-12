/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			fontSize: { //TODO: make note of clamps in notion
				'clamp-base': 'clamp(1rem, 1.25vw, 1.2rem)', // base responsive font size
				'clamp-xl': 'clamp(2rem, 7vw, 3rem)', // title responsive font size
				'clamp-lg': 'clamp(1.5rem, 3vw, 2.5rem)', // larger font size
				'clamp-sm': 'clamp(0.8rem, 2.75vw, 1.25rem)', // smaller font size
				'clamp-xs': 'clamp(0.4rem, 2.4vw, 0.9rem)', // smallest font size
			},
		},
	},
	plugins: [],
};
