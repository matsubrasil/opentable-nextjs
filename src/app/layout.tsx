import { ReactNode } from 'react'
import './globals.css'
import { Inter } from 'next/font/google'
import { NavBar } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'OpenTable',
  description: 'OpenTable restaurant reserve',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen w-screen bg-gray-100">
          <main className="m-auto max-w-screen-2xl bg-white">
            <NavBar />
            {children}
          </main>
        </main>
      </body>
    </html>
  )
}

/*
<main className="min-h-screen w-screen bg-gray-100">
          <main className="m-auto max-w-screen-2xl bg-white">
            <NavBar />
            {children}
          </main>
        </main>
*/
