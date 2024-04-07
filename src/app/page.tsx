/* eslint-disable @typescript-eslint/no-non-null-assertion */
'use client'
import { Home } from '@/sections/Home'
import { HeaderInfo } from '@/sections/HeaderInfo'
import { AboutInfo } from '@/sections/AboutInfo'
import { Experience } from '@/sections/Experience'
import { Education } from '@/sections/Education'

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
