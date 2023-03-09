"use client"
import './globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './components/Navbar/page'
import NextNProgress from 'nextjs-progressbar';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body><Navbar />
        <NextNProgress color="#29D" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true} />
        {children}</body>
    </html>
  )
}
