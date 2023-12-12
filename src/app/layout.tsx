import type { Metadata } from 'next'
import './globals.css'
import { Header } from './header'
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
        <body className="m-screen h-auto flex flex-col">
          <Header />
          {children}
        </body>
      </html>
  )
}
