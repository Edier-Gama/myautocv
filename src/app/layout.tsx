/* eslint-disable react/react-in-jsx-scope */
import type { Metadata } from 'next'
import { Providers } from './providers'
import '@fontsource-variable/onest'
import '@fontsource-variable/nunito'
import './globals.css'

export const metadata: Metadata = {
  title: 'Auto cv',
  description: 'Crea tu CV minimalista totalmente con auto cv'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>): any {
  return (
    <html lang='en'>
      <head>
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
