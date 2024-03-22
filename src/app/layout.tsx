import type { Metadata } from 'next';
import { karla } from './fonts';
import './globals.css';
import NavBar from '@/app/ui/navbar';

export const metadata: Metadata = {
  title: 'Nidhi Swamy',
  description: 'My personal portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={karla.className}>
        <div className="selection:bg-secondary-light/[0.3] text-primary-dark h-full min-h-screen bg-primary flex flex-col items-center justify-center p-8">
          <NavBar />
          { children }
        </div>
      </body>
    </html>
  )
}
