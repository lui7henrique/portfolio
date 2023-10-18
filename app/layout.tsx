import { Header } from 'src/components/Header'
import { Montserrat } from 'next/font/google'
import NextTopLoader from 'nextjs-toploader'

import './globals.css'
import { Footer } from 'src/components/Footer'
import { GTag } from 'src/components/GTag'

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={montserrat.className}>
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />

        <GTag />
      </head>

      <body>
        <NextTopLoader
          color="#a1a1aa"
          initialPosition={0.3}
          crawlSpeed={200}
          height={4}
        />

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
