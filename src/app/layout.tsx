/* eslint-disable react/react-in-jsx-scope */
import type { Metadata } from 'next'
import { Providers } from './providers'
import '@fontsource-variable/onest'
import '@fontsource-variable/nunito'
import './globals.css'

export const metadata: Metadata = {
  title: 'Auto CV - Crea CV en segundos con Inteligencia Artificial',
  description: 'Auto CV te permite crear un CV minimalista y anti ATS manualmente o de manera automática usando inteligencia artificial y tu perfil de LinkedIn.',
  openGraph: {
    title: 'Auto CV - Crea CV en segundos con Inteligencia Artificial',
    description: 'Auto CV te permite crear un CV minimalista y anti ATS manualmente o de manera automática usando inteligencia artificial y tu perfil de LinkedIn.'
  }
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>): any {
  return (
    <html lang='es'>
      <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href='https://myautocv.vercel.app/' />
      <meta name="viewport" content="width=device-width" />
      <meta name="theme-color" content="#0000" />
      <meta name="keywords" content="auto cv, Auto cv, AutoCV, EdierGama, Edier Gama, auto CV, AutoCV, CV, Cv rapido, crear CV con IA, cv maker" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@edier_gama" />
      <meta name="twitter:creator" content="@edier_gama" />
      <meta name="twitter:title" content='AutoCV CEO'/>
      <meta name="twitter:description" content='Auto CV te permite crear un CV minimalista y anti ATS manualmente o de manera automática usando inteligencia artificial y tu perfil de LinkedIn' />
      <meta name="og:image" content='' />
      <meta name="og:title" content='Auto CV - Crea CV en segundos con Inteligencia Artificial' />
      <meta name="og:description" content='Auto CV te permite crear un CV minimalista y anti ATS manualmente o de manera automática usando inteligencia artificial y tu perfil de LinkedIn' />
      <meta name="og:url" content='https://myautocv.vercel.app' />
      <meta name="og:site_name" content="Auto cv" />
      <meta name="og:type" content="website" />
      <meta name="og:locale" content="co_CO" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <meta name="msapplication-config" content="/browserconfig.xml" />

      <link rel="manifest" href="/manifest.webmanifest" />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
