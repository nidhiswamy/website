import type { Metadata } from 'next';
import { alegreya } from './fonts';
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
      <body className={alegreya.className}>
        <div className="min-h-screen bg-blue-950 flex flex-col items-center justify-center p-8">
          <NavBar />
          { children }
        </div>
      </body>
    </html>
  )
}
