import { saveDataInLocalStorage } from '@/components/experience-form/local-storage-experience'

function addExperience ({ functionParams }: any) {
  const { company, charge, jobDescription, initialDate, finishDate, setHasExperience } = functionParams
  let experienceForm: any
  let experienceSection: any
  if (typeof window !== 'undefined') {
    setHasExperience(false)
    saveDataInLocalStorage({ company, charge, jobDescription, initialDate, finishDate })
    experienceForm = document.querySelector('#add-experience')
    experienceSection = document.querySelector('.experience-section')
    experienceSection?.classList.remove('inactive')
    experienceForm?.classList.add('inactive')
  }
}

export { addExperience }
