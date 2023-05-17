"use client"
import './globals.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  display: 'swap',
  subsets: ['latin-ext'],
  weight: ['300', '400', '500', '700'],
 })

import { darkTheme } from "./theme/themes";
import { ThemeProvider, CssBaseline } from "@mui/material";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={roboto.className}>
      <ThemeProvider theme={darkTheme}>
      <body id="__next">
        <CssBaseline />
        {children}
      </body>
      </ThemeProvider>
    </html>
  )
}
