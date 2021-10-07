module.exports = {
	// mode: "jit",
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/**/*.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				sans: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
				serif: ['Merriweather', 'serif'],
				logo: ['Raleway'],
			},
			stroke: (theme) => ({
				'gray-300': theme('colors.gray.300'),
				'gray-500': theme('colors.gray.500'),
				blue: theme('colors.blue.500'),
			}),
			animation: {
				'spin-slow': 'spin 4s linear infinite',
			},
			outline: {
				green: '1px solid #10B981',
				red: '1px solid #EF4444',
				blue: '1px solid #3B82F6',
			},
		},
		rotate: {
			'-180': '-180deg',
			'-90': '-90deg',
			'-45': '-45deg',
			0: '0',
			45: '45deg',
			90: '90deg',
			135: '135deg',
			180: '180deg',
			270: '270deg',
		},
	},
	variants: {
		extend: { fontWeight: ['hover', 'focus'], margin: ['last'] },
	},
	plugins: [],
};
