import type { Metadata } from 'next';
import { karla } from './fonts';
import './globals.css';
import NavBar from '@/app/ui/NavBar';
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: 'Nidhi Swamy',
  description: 'Nidhi Swamy personal website',
  creator: 'Nidhi Swamy',
  keywords: ['nidhiswamy.com', 'Nidhi Swamy', 'Nidhi Swamy Penn State']
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={karla.className}>
        <NavBar />
        <div className="selection:bg-secondary-light/[0.3] text-primary-dark h-full min-h-screen bg-primary flex flex-col items-center justify-center p-8 pt-16 sm:pt-0 sm:p-20">
          { children }
          <Analytics />
        </div>
      </body>
    </html>
  )
}
