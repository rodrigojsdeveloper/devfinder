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
      height: {
        50: '50px',
        69: '69px',
      },
      borderRadius: {
        def: '12px',
      },
    },
  },
  plugins: [],
}
export default config
