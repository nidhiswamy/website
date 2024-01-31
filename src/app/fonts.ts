import { Alegreya } from 'next/font/google';
import { Solway } from 'next/font/google';

export const alegreya = Alegreya({
  subsets: ['latin'],
})

export const solway = Solway({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})
