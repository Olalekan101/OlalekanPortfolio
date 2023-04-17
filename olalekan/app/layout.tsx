import './globals.css'
import { Inter } from 'next/font/google'

export const metadata = {
  title: 'Olalekan Portfolio',
  description: "This site is Olalekan's portfolio for web development and motion design."
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
