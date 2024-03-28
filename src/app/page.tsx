/* eslint-disable @typescript-eslint/no-non-null-assertion */
'use client'
import { Home } from '@/sections/Homecomponents'
import { HeaderInfo } from '@/sections/HeaderInfocomponents'
import { AboutInfo } from '@/sections/AboutInfocomponents'
import { Experience } from '@/sections/Experiencecomponents'
import { Education } from '@/sections/Educationcomponents'

import { createBrowserClient } from '@supabase/ssr'

export default function HomePage () {
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
  const connect = async () => {
    const { data: userHeaderInfo } = await supabase.from('userHeaderInfo').select()
    return userHeaderInfo
  }
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
