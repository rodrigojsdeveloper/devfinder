import { Space_Mono as SpaceMono } from 'next/font/google'
import { PropsWithChildren } from 'react'
import type { Metadata } from 'next'
import Providers from '@/contexts'
import './globals.css'

const spaceMono = SpaceMono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--space-mono',
})

export const metadata: Metadata = {
  title: 'DevFinder',
  description: 'DevFinder simplifies user search on GitHub.',
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={`${spaceMono.className} font-space-mono`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
