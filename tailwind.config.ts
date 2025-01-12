import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate"

export default {
	darkMode: ["class", "class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],

	theme: {
		screens: {
			'desktop-lg': '1519px',
			'desktop-md': '1200px',
			'tablet-lg': '996px',
			'tablet-md': '882px',
			'tablet-sm': '768px',
			'mobile-xl': '640px',
			'mobile-lg': '524px',
			'mobile-md': '420px',
			'mobile-sm': '360px'
		},
		container: {
			center: true,
			padding: '1rem',
			screens: {
				desktop: 'w-full',
				'mobile-sm': '100%'
			}
		},
		extend: {
			backgroundImage: {
				homePageImage: "url('/home-background.png')",
				customGradient: 'linear-gradient(200.23deg, #e5e4e2 11.34%, #e9e8e6 19.75%, #e4e3e1 25.67%, #e9e9e7 35.15%, #f2f2f2 47.75%, #f8f8f8 65.16%)'
			},
			colors: {
				brand: {
					text: {
						primary: '#5B5B5B',
						secondary: '#787273',
						tertiary: '#000000',
						customBlue: '#426CC0',
						footer: '#153074'
					}
				},
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [tailwindcssAnimate],
} satisfies Config;
