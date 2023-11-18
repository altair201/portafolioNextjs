'use client'
import './globals.css'
import NavBar from '../components/NavBar/Navbar'
import { Providers } from '@/redux/providers'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Providers >
        <body>
          <NavBar />
          {children}
        </body>
      </Providers>
    </html>
  )
}
