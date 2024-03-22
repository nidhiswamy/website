import { Alegreya } from 'next/font/google';
import { Solway } from 'next/font/google';
import { Karla } from 'next/font/google';

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

