import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/flowbite-react/lib/**/*.js',
    './node_modules/tailwind-datepicker-react/dist/**/*.js'

  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      spacing: {
        158: '42rem',
        120: '32rem',
        100: '20rem'
      }
    },
    fontFamily: {
      sans: ['Onest Variable'],
      runda: ['Runda']
    }
  },
  plugins: [require('flowbite/plugin'), require('tailwindcss-animate')]
}
export default config
