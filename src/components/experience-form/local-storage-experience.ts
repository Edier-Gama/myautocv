function saveDataInLocalStorage ({ company, charge, jobDescription, jobAchievements, date }: any) {
  const existingData = localStorage.getItem('experience')
  let data = []

  if (existingData !== null) {
    data = JSON.parse(existingData)
  }

  // Agregar los nuevos datos al objeto existente
  data = [
    ...data,
    {
      company,
      charge,
      jobDescription,
      jobAchievements,
      date
    }

  ]

  localStorage.setItem('experience', JSON.stringify(data))
}

export { saveDataInLocalStorage }
