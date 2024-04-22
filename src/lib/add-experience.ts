function addExperience (setExperience: any) {
  let experienceSection: any
  if (typeof window !== 'undefined') {
    experienceSection = document.querySelector('#add-experience')
    setExperience(true)
    experienceSection?.classList.add('inactive')
  }
  return addExperience
}

export { addExperience }
