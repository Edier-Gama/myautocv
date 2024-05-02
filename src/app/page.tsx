/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Home } from '@/sections/Home'
import { HeaderInfo } from '@/sections/HeaderInfo'
import { ExperienceForm } from '@/components/experience-form/ExperienceForm'
import { EducationForm } from '@/components/education-form/EducationForm'

export default function HomePage () {
  return (
    <main>
      <section className='relative z-10'>
         <Home/>
      </section>
      <section className='relative'>
         <HeaderInfo/>
         <ExperienceForm/>
         <EducationForm/>
      </section>
    </main>
  )
}
