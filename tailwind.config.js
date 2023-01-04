/** @type {import('tailwindcss').Config} */
module.exports = {
	content:[
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
	],
	theme:{
		colors:{
			gray:"#383838b3",
			dark:"#383838",
			dark7:"#383838B3",
			dark6:"#38383899",
			red:"#DB0060",
			orange:"#E35A43",
			purple:"#8338EC"
		},
		container:{
			padding:{
				DEFAULT:'1rem',
				ph:'1rem',
				ph5:'1rem',
				sm:'1rem',
				md:'1rem',
				lg:'1rem',
				xl:'2rem',
				'2xl':'1rem',
			},
		},
		screens:{
			'ph':'400px',
			// => @media (min-width: 400px) { ... }
			'ph5':'500px',
			// => @media (min-width: 500px) { ... }
			'sm':'600px',
			// => @media (min-width: 640px) { ... }
			'md':'768px',
			// => @media (min-width: 768px) { ... }
			'lg':'1024px',
			// => @media (min-width: 1024px) { ... }
			'xl':'1280px',
			// => @media (min-width: 1280px) { ... }
			'2xl':'1562px',
			// => @media (min-width: 1562px) { ... }
		},
		extend:{},
	},
	plugins:[],
}
  