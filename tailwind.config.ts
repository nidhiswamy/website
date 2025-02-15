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
        sans: ['var(--font-karla)'],
        blogBody: ['var(--font-inter)'],
      },
      content: {
      },
      backgroundImage: {
        'inline-link': "url('/inline-link.png')",
        'highlight-work': "url('/hl-work.png')",
        'highlight-proj': "url('/hl-proj.png')",
      },
    },
    colors: {
      'secondary': '#339989',
      'secondary-light': '#60BBAF',
      'dark-secondary': '#45A194',
      'dark-gray': '#36453B',
      'gray': '#808980',
      'tiffany-blue': '#94BFBE',
      'primary': '#F0FAF4',
      'dark-primary': '#66CCBD',
      'primary-dark': '#2c2c2c',
      'primary-light': '#DAE2DF',
      'primary-extra-light': '#D2B2B3',
      'accent': '#C58C83'
    },
  },
  plugins: [],
}
export default config;
