import { saveDataInLocalStorage } from '@/components/experience-form/local-storage-experience'

function addExperience ({ functionParams }: any, setHasExperience: any) {
  const { company, charge, jobDescription, jobAchievements, date } = functionParams
  let experienceForm: any
  let experienceSection: any
  if (typeof window !== 'undefined') {
    setHasExperience(false)
    saveDataInLocalStorage({ company, charge, jobDescription, jobAchievements, date })
    experienceForm = document.querySelector('#add-experience')
    experienceSection = document.querySelector('.experience-section')
    experienceSection?.classList.remove('inactive')
    experienceForm?.classList.add('inactive')
  }
}

export { addExperience }
