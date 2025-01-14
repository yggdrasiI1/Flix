import type { Config } from 'tailwindcss';
import { black, white } from 'tailwindcss/colors';
import plugin from 'tailwindcss/plugin';

const primary = '#E30B13';

export default {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				primary,
				black,
				white,
				yellow: {
					700: '#F5C521',
				},
				gray: {
					300: '#d9dae8',
					500: '#999AA5',
					600: '#66676E',
					700: '#39393f',
					800: '#242529',
					900: '#191B1F',
					950: '#101215',
				},
			},
			spacing: {
				0.5: '0.12rem',
				layout: '2.75rem',
			},
			fontSize: {
				'2lg': '1.38rem',
			},
			borderRadius: {
				image: '0.5rem',
				layout: '0.8rem',
			},
			transitionTimingFunction: {
				DEFAULT: 'ease-in-out',
			},
			transitionDuration: {
				DEFAULT: '200ms',
			},
			zIndex: {
				1: '1',
				2: '2',
				3: '3',
			},
			keyframes: {
				fade: {
					from: { opacity: '0' },
					to: { opacity: '1' },
				},
				scaleIn: {
					'0%': {
						opacity: '0',
						transform: 'scale(0.9)',
					},
					'50%': {
						opacity: '0.3',
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)',
					},
				},
			},
			animation: {
				fade: 'fade .5s ease-in-out',
				scaleIn: 'scaleIn .35s ease-in-out',
			},
		},
	},
	plugins: [
		plugin(({ addComponents, theme, addUtilities }) => {
			addComponents({
				'.btn-primary': {
					backgroundColor: 'primary',
					color: '#fff',
					borderRadius: '0.65rem',
					transition: 'background-color, .3s ease-in-out',
					'&:hover': {
						backgroundColor: '#ff0009',
					},
				},

				'.text-link': {
					textUnderlineOffset: '4',
					color: 'rgba(255, 255, 255, .9)',
					transition: 'text-decoration-color .3s ease-in-out',
					textDecorationLine: 'underline',
					textDecorationColor: 'rgba(255, 255, 255, 0.2)',
					'&:hover': {
						textDecorationColor: 'rgba(255, 255, 255, 0.9)',
					},
				},

				'.air-block': {
					borderRadius: theme('borderRadius.layout'),
					backgroundColor: theme('colors.gray.800'),
					color: theme('colors.white'),
					boxShadow: theme('colors.lg'),
				},
			}),
				addUtilities({
					'.text-shadow': {
						textShadow: '1px 1px rgba(0, 0, 0, 0.4)',
					},

					'.outline-border-none': {
						border: 'none',
						outline: 'none',
					},

					'.flex-center-between': {
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					},

					'.image-like-bg': {
						objectPosition: 'center',
						objectFit: 'cover',
						pointerEvents: 'none',
					},
				});
		}),
	],
} satisfies Config;
