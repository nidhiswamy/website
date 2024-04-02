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
      'secondary-light': '#339989',
      'secondary-extra-light': '#9FB798',
      'dark-gray': '#36453B',
      'gray': '#808980',
      'primary': '#F0FAF4',
      'primary-dark': '#000000',
      'primary-light': '#9b6a6c',
      'primary-extra-light': '#D2B2B3',
    },
  },
  plugins: [],
}
export default config;
