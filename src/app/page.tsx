/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Home } from '@/sections/Home'
import { HeaderInfoForm } from '@/components/header-form/HeaderInfoForm'
import { ExperienceForm } from '@/components/experience-form/ExperienceForm'
import { EducationForm } from '@/components/education-form/EducationForm'
import { pdfLogo } from '@/consts/pdf-logo'
export default function HomePage () {
  return (
    <main>
      <section className='max-w-96 m-auto md:max-w-4xl'>
         <Home/>
         <HeaderInfoForm/>
         <ExperienceForm/>
         <EducationForm/>
         <div className='mt-96 cursor-pointer mb-20 pt-20 p-3 w-60'>
           <a href='/download' className='p-4 w-60 rounded bg-red-700 text-white'>Descargar PDF</a>
         </div>
      </section>
    </main>
  )
}
