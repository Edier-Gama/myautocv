function saveHeaderDataInLocalStorage (functionParams: any) {
  const existingData = localStorage.getItem('basic_info')
  const { name, email, profession, x, linkedin, social, description } = functionParams

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
      x,
      linkedin,
      social
    }

  ]

  localStorage.setItem('basic_info', JSON.stringify(data))
}

export { saveHeaderDataInLocalStorage }
