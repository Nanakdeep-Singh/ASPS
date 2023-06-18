"use client"

import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import { ThemeProvider } from "next-themes"

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider attribute="class">
        <Navbar></Navbar>
        {children}
      </ThemeProvider>
        </body>
    </html>
  )
}
