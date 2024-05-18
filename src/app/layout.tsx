import { PropsWithChildren } from 'react'
import type { Metadata } from 'next'
import { Space_Mono as SpaceMono } from 'next/font/google'
import Providers from '@/contexts'
import { cn } from '@/utils/cn'
import './globals.css'

const spaceMono = SpaceMono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
})

export const metadata: Metadata = {
  title: 'devFinder',
  description: 'devFinder simplifies user search on GitHub.',
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body
        className={cn(
          'font-space-mono scroll-smooth antialiased',
          spaceMono.className,
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
