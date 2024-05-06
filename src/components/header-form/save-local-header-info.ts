function saveHeaderDataInLocalStorage (functionParams: any) {
  const existingData = localStorage.getItem('basic_info')
  const { name, email, profession, phone, linkedin, ubication, description } = functionParams

  let data = []

  if (existingData !== null) {
    data = JSON.parse(existingData)
  }

  data = [
    ...data,
    {
      name,
      email,
      profession,
      description,
      phone,
      linkedin,
      ubication
    }

  ]

  localStorage.setItem('basic_info', JSON.stringify(data))
}

export { saveHeaderDataInLocalStorage }
