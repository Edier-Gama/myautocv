/* eslint-disable react/react-in-jsx-scope */
'use client'
import { AboutInfo } from '@/sections/AboutInfocomponents'
import { HeaderInfo } from '@/sections/HeaderInfocomponents'
import { Home } from '@/sections/Homecomponents'

export default function HomePage (): any {
  return (
    <main>
      <Home/>
      <HeaderInfo/>
      <AboutInfo/>
    </main>
  )
}
