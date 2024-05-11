/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Home } from '@/sections/Home'
import { HeaderInfoForm } from '@/components/header-form/HeaderInfoForm'
import { ExperienceForm } from '@/components/experience-form/ExperienceForm'
import { EducationForm } from '@/components/education-form/EducationForm'
import { Button } from '@chakra-ui/react'

export default function HomePage () {
  return (
    <main>
      <section className='max-w-96 m-auto md:max-w-4xl'>
         <Home/>
         <HeaderInfoForm/>
         <ExperienceForm/>
         <EducationForm/>
         <Button className='btn btn-primary mt-96 cursor-pointer'>
          <a href="/download">Lets see you beauty CV</a>
         </Button>
      </section>
    </main>
  )
}
