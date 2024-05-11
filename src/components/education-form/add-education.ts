import { saveEducationDataInLocalStorage } from '@/components/education-form/local-storage-education'

function addEducation ({ functionParams }: any) {
  const { name, title, description, initialDate, finishDate, setHasEducation } = functionParams
  let experienceForm: any
  let experienceSection: any
  if (typeof window !== 'undefined') {
    setHasEducation(false)
    saveEducationDataInLocalStorage({ name, title, description, initialDate, finishDate })
    experienceForm = document.querySelector('#add-experience')
    experienceSection = document.querySelector('.experience-section')
    experienceSection?.classList.remove('inactive')
    experienceForm?.classList.add('inactive')
  }
}

export { addEducation }
