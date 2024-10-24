/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				roboto: ['Roboto', 'sans-serif'],
				merriweather: ['Merriweather', 'serif'],
				montserrat: ['Montserrat', 'sans-serif']
			}
		},

		container: {
			padding: {
				default: '1rem',
				sm: '2rem',
				lg: '4rem',
				xl: '5rem'
			}
		}
	}
};
