import { CVEducation } from '@/app/download/cv-components/education'
import { CVExperience } from '@/app/download/cv-components/experience'
import { CVHeaderInfo } from '@/app/download/cv-components/header-info'
import { experienceIcon } from '@/consts/experiece-icon'

function UserCurriculum () {
  return (
    <section>
    <div className='m-auto max-w-4xl p-5'>
      <CVHeaderInfo/>
      <div className='flex mb-10 m-3'>
        <div className='mt-5'>{experienceIcon}</div>
        <h2 className='text-4xl font-sans font-bold w-full m-3'>Work Experience</h2>
      </div>
      <CVExperience/>
      <div className='flex mb-10 m-3'>
        <div className='mt-5'>{experienceIcon}</div>
        <h2 className='text-4xl font-sans font-bold w-full m-3'>Education</h2>
      </div>
      <CVEducation/>
    </div>
  </section>
  )
}

export { UserCurriculum }
