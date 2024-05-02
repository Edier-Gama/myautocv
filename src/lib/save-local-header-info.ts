function saveHeaderDataInLocalStorage ({ functionParams }: any) {
  const existingData = localStorage.getItem('basic_info')
  const { name, email, profession, x, linkedin, social } = functionParams

  let data = []

  if (existingData !== null) {
    data = JSON.parse(existingData)
  }

  // Agregar los nuevos datos al objeto existente
  data = [
    ...data,
    {
      name,
      email,
      profession,
      x,
      linkedin,
      social
    }

  ]

  localStorage.setItem('basic_info', JSON.stringify(data))
}

export { saveHeaderDataInLocalStorage }
