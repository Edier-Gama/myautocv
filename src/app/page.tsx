/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Home } from '@/sections/Home'
import { HeaderInfoForm } from '@/components/header-form/HeaderInfoForm'
import { ExperienceForm } from '@/components/experience-form/ExperienceForm'
import { EducationForm } from '@/components/education-form/EducationForm'
import { FormLabel } from '@chakra-ui/react'
export default function HomePage () {
  return (
    <main>
      <section className='max-w-96 m-auto md:max-w-4xl'>
         <Home/>
         <div className='mt-80 mb-0 m-3'>
         <p className='font-sans text-2xl'>⚠️ Warnings: Descriptions must have a minimum of 100 characters.
         Otherwise, they will not be able to be added. There are some optional fields</p>
         </div>
         <HeaderInfoForm/>
         <ExperienceForm/>
         <EducationForm/>
         <div className='mt-32 cursor-pointer mb-20 p-3 w-60'>
         <button
              type="button"
              className="w-80 mt-3 md:w-72 md:mt-0 rounded-xl justify-center font-sans text-xl text-gray-900 bg-white hover:bg-gray-100
              border border-gray-400 font-medium px-5 py-2.5 text-center inline-flex items-center">
             <a href='/download' className=''>Ya Ready? Download 😎</a>
          </button>
         </div>
      </section>
    </main>
  )
}
