import { useRouter } from 'next/navigation'

function useAddEducation (): any {
  let addEducationButton: any
  if (typeof window !== 'undefined') {
    addEducationButton = document.querySelector('.add-education-button')
  }
  const router = useRouter()

  function toggleAddEducation (setHasEducation: any): any {
    setHasEducation(true)
    router.push('/#add-education-form')
    addEducationButton?.classList.add('inactive')
  }
  return { toggleAddEducation }
}
function useCancelEducation (): any {
  let addEducationButton: any
  if (typeof window !== 'undefined') {
    addEducationButton = document.querySelector('.add-education-button')
  }
  const router = useRouter()
  function cancelEducation (setHasEducation: any): any {
    setHasEducation(false)
    router.push('/#add-education-form')
    addEducationButton?.classList.remove('inactive')
  }
  return { cancelEducation }
}

export { useAddEducation, useCancelEducation }
