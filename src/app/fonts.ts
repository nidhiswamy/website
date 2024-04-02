import { Alegreya, Solway, Karla, Inter } from 'next/font/google';

export const alegreya = Alegreya({
  subsets: ['latin'],
})

export const solway = Solway({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

export const karla = Karla({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-karla',
})

export const inter = Inter({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-inter',
})
