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
				'clamp-base': 'clamp(1rem, 1.5vw, 1.125rem)', // Example of clamp for base font size
				'clamp-xl': 'clamp(2rem, 5vw, 3rem)', // Example of clamp for title font size
				'clamp-lg': 'clamp(1.5rem, 3vw, 2.5rem)', // Example of clamp for larger font size
				'clamp-sm': 'clamp(0.875rem, 1.5vw, 1.125rem)', // Example of clamp for smaller font size
			},
		},
	},
	plugins: [],
};
