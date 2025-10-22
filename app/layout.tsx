import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import { AppProvider } from './providers/AppProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'VALOR Express - Sistema de Envíos',
  description: 'Sistema de envíos con procesos automatizados con IA',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  )
}
