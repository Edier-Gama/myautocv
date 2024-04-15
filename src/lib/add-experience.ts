function addExperience (setHasExperience: any): any {
  let experienceSection: any
  if (typeof window !== 'undefined') {
    experienceSection = document.querySelector('#add-experience')
    setHasExperience(false)
    experienceSection?.classList.add('inactive')
  }
  return addExperience
}

export { addExperience }
