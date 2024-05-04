import { useRouter } from 'next/navigation'

function useAddExperience (): any {
  let addExperienceButton: any
  if (typeof window !== 'undefined') {
    addExperienceButton = document.querySelector('.add-experience-button')
  }
  const router = useRouter()

  function toggleAddExperience (setHasExperience: any): any {
    setHasExperience(true)
    // router.push('/#add-experience-form')
    addExperienceButton?.classList.add('inactive')
  }
  return { toggleAddExperience }
}
function useCancelExperience (): any {
  let addExperienceButton: any
  if (typeof window !== 'undefined') {
    addExperienceButton = document.querySelector('.add-experience-button')
  }
  const router = useRouter()
  function cancelExperience (setHasExperience: any): any {
    setHasExperience(false)
    // router.push('/#add-experience-form')
    addExperienceButton?.classList.remove('inactive')
  }
  return { cancelExperience }
}

export { useAddExperience, useCancelExperience }
