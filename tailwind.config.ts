import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'highlight-work': "url('/hl-work.png')",
        'highlight-proj': "url('/hl-proj.png')",
      },
    },
    colors: {
      'secondary': '#339989',
      'primary': '#F0FAF4',
      'primary-dark': '#000000',
      'primary-light': '#D2B2B3',
      'secondary-light': '#339989',
    },
  },
  plugins: [],
}
export default config;
