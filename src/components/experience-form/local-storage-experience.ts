function saveDataInLocalStorage ({ company, charge, jobDescription, initialDate, finishDate }: any) {
  const existingData = localStorage.getItem('experience')
  let data = []
  console.log(initialDate, finishDate)

  if (existingData !== null) {
    data = JSON.parse(existingData)
  }

  data = [
    ...data,
    {
      company,
      charge,
      jobDescription,
      initialDate,
      finishDate
    }

  ]

  localStorage.setItem('experience', JSON.stringify(data))
}

export { saveDataInLocalStorage }
