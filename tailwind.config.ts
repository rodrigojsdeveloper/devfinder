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
        white: '#FFFFFF',
        gray: '#FFFFFFBF',
      },
      width: {
        61: '61.83px',
        106: '106px',
      },
      maxWidth: {
        138: '138px',
        230: '230px',
        730: '730px',
      },
      height: {
        50: '50px',
        69: '69px',
      },
      borderRadius: {
        def: '12px',
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
