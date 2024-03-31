/* eslint-disable @typescript-eslint/no-non-null-assertion */
'use client'
import { Home } from '@/sections/Homecomponents'
import { HeaderInfo } from '@/sections/HeaderInfocomponents'
import { AboutInfo } from '@/sections/AboutInfocomponents'
import { Experience } from '@/sections/Experiencecomponents'
import { Education } from '@/sections/Educationcomponents'

export default function HomePage () {
  return (
    <main>
      <section className='relative z-10'>
         <Home/>
      </section>
      <section className='relative'>
         <HeaderInfo/>
         <AboutInfo/>
         <Experience/>
         <Education/>
      </section>
    </main>
  )
}
