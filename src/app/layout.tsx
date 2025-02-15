import type { Metadata } from 'next';
import { karla } from './fonts';
import './globals.css';
import NavBar from '@/app/ui/NavBar';
import { Analytics } from "@vercel/analytics/react";
import { Suspense } from 'react';
import Loading from './loading';

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
        <Suspense fallback={<Loading />}>
        <div className="selection:bg-secondary-light/[0.3] text-primary-dark h-full min-h-screen bg-primary dark:bg-primary-dark dark:text-primary-light/[0.8] flex flex-col items-center p-8 pt-20 xs:pt-0 md:pt-24">
          { children }
          <Analytics />
        </div>
        </Suspense>
      </body>
    </html>
  )
}
