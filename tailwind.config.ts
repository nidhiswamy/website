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
      'secondary': '#344e41',
      'secondary-light': '#a3b18a',
      'dark-secondary': '#588157',
      'dark-secondary-light': '#a3b18a',
      'dark-gray': '#36453B',
      'gray': '#808980',
      'tiffany-blue': '#94BFBE',
      'primary': '#F0FAF4',
      'dark-primary': '#3a5a40',
      'primary-dark': '#2c2c2c',
      'primary-light': '#DAE2DF',
      'primary-extra-light': '#D2B2B3',
      'accent': '#2c2c2c',
      'dark-accent': '#dad7cd'
    },
  },
  plugins: [],
}
export default config;
