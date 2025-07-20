import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'MigrateVC - Freedom is the Ultimate Investment',
  description: 'Elite consultancy helping venture capitalists, fund managers, and founders unlock global freedom through citizenship and residency by investment.',
  keywords: 'citizenship by investment, residency, global mobility, venture capital, crypto, family office',
  authors: [{ name: 'MigrateVC' }],
  creator: 'MigrateVC',
  publisher: 'MigrateVC',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://migratevc.com',
    title: 'MigrateVC - Freedom is the Ultimate Investment',
    description: 'Strategic intelligence meets global mobility. Elite consultancy for VCs, crypto whales, and international family offices.',
    siteName: 'MigrateVC',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MigrateVC - Freedom is the Ultimate Investment',
    description: 'Strategic intelligence meets global mobility.',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#000000',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-inter bg-black text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}

