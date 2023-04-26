import './globals.css'
import { Roboto_Mono } from 'next/font/google'
import Navbar from "./Components/Navbar/page"

export const metadata = {
  title: 'Olalekan Portfolio',
  description: "This site is Olalekan's portfolio for web development and motion design."
}

const roboto = Roboto_Mono({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={roboto.className} >
      <body className=' scrollbar scrollbar-thumb-darkColorLight scrollbar-track-slate-500 overflow-x-clip flex flex-col min-h-screen px-4 md:px-8 lg:px-32 bg-darkColor text-lightColor' >
        <Navbar/>
        {children}
        </body>
    </html>
  )
}
