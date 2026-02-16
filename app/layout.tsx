import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'SouKore • Laboratório de Alta Performance',
  description:
    'Plataforma premium de infoprodutos focada em alta performance, saúde, biohacking e desenvolvimento masculino.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${inter.variable} ${montserrat.variable} font-sans bg-background`}>
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}
