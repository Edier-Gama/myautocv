/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Home } from '@/sections/Home'
import { HeaderInfoForm } from '@/components/header-form/HeaderInfoForm'
import { ExperienceForm } from '@/components/experience-form/ExperienceForm'
import { EducationForm } from '@/components/education-form/EducationForm'
import { ButtonWithLogo } from '@/components/Button'
export default function HomePage () {
  return (
    <main>
      <section className='max-w-96 m-auto md:max-w-4xl'>
         <Home/>
         <HeaderInfoForm/>
         <ExperienceForm/>
         <EducationForm/>
         <div className='btn btn-primary mt-96 cursor-pointer mb-20 pt-20 p-5'>
           <a href='/download'>Descargar PDF</a>
         </div>
      </section>
    </main>
  )
}
