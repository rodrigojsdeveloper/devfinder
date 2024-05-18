import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        spaceMono: ['var(--font-space-mono)'],
      },
      colors: {
        blue: {
          100: '#61ABFF',
          200: '#0077FF',
          300: '#1E2B48',
          400: '#141D2E',
        },
        gray: {
          100: '#FFFFFFBF',
        },
      },
      keyframes: {
        swing: {
          '0%': { transform: 'rotateX(-100deg)', opacity: '0' },
          '100%': { transform: 'rotateX(0)', opacity: '1' },
        },
      },
      animation: {
        swing: 'swing 3s both',
      },
    },
  },
  plugins: [],
}

export default config
