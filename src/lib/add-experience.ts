function addExperience ({ setExperience, setHasExperience }: any): any {
  let experienceSection: any
  if (typeof window !== 'undefined') {
    experienceSection = document.querySelector('#add-experience')
    setExperience(true)
    setHasExperience(false)
    experienceSection?.classList.add('inactive')
  }
  return addExperience
}

export { addExperience }
