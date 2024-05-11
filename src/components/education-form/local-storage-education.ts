function saveEducationDataInLocalStorage ({ name, title, description, initialDate, finishDate }: any) {
  const existingData = localStorage.getItem('education')
  let data = []

  if (existingData !== null) {
    data = JSON.parse(existingData)
  }

  data = [
    ...data,
    {
      name,
      title,
      description,
      initialDate,
      finishDate
    }

  ]

  localStorage.setItem('education', JSON.stringify(data))
}

export { saveEducationDataInLocalStorage }
