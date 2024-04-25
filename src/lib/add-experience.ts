function addExperience (setHasExperience: any) {
  let experienceForm: any
  let experienceSection: any
  if (typeof window !== 'undefined') {
    setHasExperience(false)
    experienceForm = document.querySelector('#add-experience')
    experienceSection = document.querySelector('.experience-section')
    experienceSection?.classList.remove('inactive')
    experienceForm?.classList.add('inactive')
  }
}

export { addExperience }
