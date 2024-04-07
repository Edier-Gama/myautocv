/* eslint-disable @typescript-eslint/no-non-null-assertion */
'use client'
import { Home } from '../sections/home'
import { HeaderInfo } from '@/sections/headerInfo'
import { AboutInfo } from '@/sections/aboutInfo'
import { Experience } from '@/sections/experience'
import { Education } from '@/sections/education'

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
