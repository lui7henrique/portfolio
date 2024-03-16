import { Roboto_Mono as RobotoMono } from 'next/font/google'
import NextTopLoader from 'nextjs-toploader'

import { GTag } from '@/components/GTag'
import { Footer } from '@/components/Footer'

import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Header } from '@/components/header'
import { PatternBackground } from '@/components/pattern-background'

const robotoMono = RobotoMono({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={robotoMono.className}>
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
        <GTag />
      </head>

      <body className="bg-background antialiased">
        <PatternBackground variant="checkered" />

        <NextTopLoader
          color="#a1a1aa"
          initialPosition={0.3}
          crawlSpeed={200}
          height={4}
        />

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  )
}
