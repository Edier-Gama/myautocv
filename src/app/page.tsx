/* eslint-disable @typescript-eslint/no-non-null-assertion */
'use client'
import { Home } from '@/sections/homecomponents'
import { HeaderInfo } from '@/sections/headerInfocomponents'
import { AboutInfo } from '@/sections/aboutInfocomponents'
import { Experience } from '@/sections/experiencecomponents'
import { Education } from '@/sections/educationcomponents'

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
