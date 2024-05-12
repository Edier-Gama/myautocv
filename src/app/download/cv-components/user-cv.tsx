import { CVEducation } from '@/app/download/cv-components/education'
import { CVExperience } from '@/app/download/cv-components/experience'
import { CVHeaderInfo } from '@/app/download/cv-components/header-info'
import { experienceIcon } from '@/consts/experiece-icon'

function UserCurriculum () {
  return (
        <section className='mt-20'>
         <CVHeaderInfo/>
         <div className='flex m-5 mb-10'>
           <h2 className='text-4xl font-sans font-bold m-3'>Experiencia Laboral</h2>
        </div>
         <CVExperience/>
         <div className='flex m-5 mb-10'>
           <h2 className='text-4xl font-sans font-bold m-3'>Educación</h2>
        </div>
         <CVEducation/>
      </section>
  )
}

export { UserCurriculum }
