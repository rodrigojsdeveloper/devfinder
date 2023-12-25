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
        spaceMono: ['--space-mono'],
      },
      colors: {
        blue: {
          100: '#141D2E',
          200: '#1E2B48',
          300: '#0077FF',
          400: '#4B689B',
          500: '#61ABFF',
        },
        gray: '#FFFFFFBF',
      },
      borderRadius: {
        def: '0.75rem',
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
