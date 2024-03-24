'use client'
/* eslint-disable react/react-in-jsx-scope */
import { Home } from '@/sections/Homecomponents'
import { HeaderInfo } from '@/sections/HeaderInfocomponents'
import { AboutInfo } from '@/sections/AboutInfocomponents'
import { Experience } from '@/sections/Experiencecomponents'
import { Education } from '@/sections/Educationcomponents'

export default function HomePage (): any {
  return (
    <main>
      <Home/>
      <HeaderInfo/>
      <AboutInfo/>
      <Experience/>
      <Education/>
    </main>
  )
}
