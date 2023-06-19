import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import NextThemeProvider from './NextThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={inter.className}>
        <NextThemeProvider>
          <Navbar></Navbar>
          {children}
        </NextThemeProvider>
        </body>
    </html>
  )
}
