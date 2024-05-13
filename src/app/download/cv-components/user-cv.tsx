import { CVEducation } from '@/app/download/cv-components/education'
import { CVExperience } from '@/app/download/cv-components/experience'
import { CVHeaderInfo } from '@/app/download/cv-components/header-info'
import { experienceIcon } from '@/consts/experiece-icon'

function UserCurriculum () {
  return (
  <section className=' mt-96 pt-96'>
  <CVHeaderInfo/>
  <div className='flex mb-10 m-3'>
    <div className='mt-5'>
    {experienceIcon}
    </div>
    <h2 className='text-4xl font-sans font-bold m-2'>Experiencia Laboral</h2>
 </div>
  <CVExperience/>
  <div className='flex mb-10 m-5'>
    <h2 className='text-4xl font-sans font-bold mt-5'>Educación</h2>
 </div>
  <CVEducation/>
  </section>
  )
}

export { UserCurriculum }
