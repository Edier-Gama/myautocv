/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Home } from '@/sections/Home'
import { HeaderInfoForm } from '@/components/header-form/HeaderInfoForm'
import { ExperienceForm } from '@/components/experience-form/ExperienceForm'
import { EducationForm } from '@/components/education-form/EducationForm'

export default function HomePage () {
  return (
    <main>
      <section className='relative'>
         <Home/>
         <HeaderInfoForm/>
         <ExperienceForm/>
         <EducationForm/>
      </section>
    </main>
  )
}
