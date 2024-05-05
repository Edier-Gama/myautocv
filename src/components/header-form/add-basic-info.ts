import { saveHeaderDataInLocalStorage } from './save-local-header-info'

function addHeaderInfo ({ functionParams }: any) {
  const setHasBasicInfo = functionParams?.setHasBasicInfo
  let headerInfoForm: any
  let headerInfoSection: any
  if (typeof window !== 'undefined') {
    setHasBasicInfo(true)
    saveHeaderDataInLocalStorage(functionParams)
    headerInfoForm = document.querySelector('#header-form')
    headerInfoSection = document.querySelector('.header-section')
    headerInfoSection?.classList.remove('inactive')
    headerInfoForm?.classList.add('inactive')
  }
}

export { addHeaderInfo }
