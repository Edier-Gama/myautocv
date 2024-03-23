'use client'
/* eslint-disable react/react-in-jsx-scope */
import { AboutInfo } from '@/sections/AboutInfocomponents'
import { Experience } from '@/sections/Experiencecomponents'
import { HeaderInfo } from '@/sections/HeaderInfocomponents'
import { Home } from '@/sections/Homecomponents'

export default function HomePage (): any {
  return (
    <main>
      <Home/>
      <HeaderInfo/>
      <AboutInfo/>
      <Experience/>
    </main>
  )
}
