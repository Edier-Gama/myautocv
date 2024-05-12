/* eslint-disable @typescript-eslint/no-unsafe-argument */
'use client'

function CVEducation () {
  let education
  let localData
  if (typeof window !== 'undefined') {
    localData = localStorage?.getItem('education')
    education = JSON.parse(localData)
  }

  return (
    education?.map((education) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      const initialDate = new Date(education.initialDate)
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      const finishDate = new Date(education.finishDate)

      const months = [
        'Enero', 'Febebro', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiempre', 'Octubre', 'Noviembre', 'Diciembre'
      ]

      const initMonth = months[initialDate.getUTCMonth()]
      const initYear = initialDate.getUTCFullYear()
      const finalMonth = months[finishDate.getUTCMonth()]
      const finalYear = finishDate.getFullYear()

      const initParsed = `${initMonth} ${initYear}`
      const finishParsed = `${finalMonth} ${finalYear}`

      return (
        <article className='max-w-96 m-auto md:max-w-4xl' key={education.name}>

        <section
        className="relative mx-12 pb-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-black/20 dark:before:border-white/15 before:content-[''] md:grid-cols-5 md:gap-10 md:space-x-4]"
        >
        <div className="relative pb-12 md:col-span-2">
          <div className="sticky top-0">
            <span className="text-blue-600 -left-[44px] absolute rounded-full text-5xl"
            >&bull;</span>
            <h4 className="font-bold text-3xl text-black dark:text-white font-sans">{education.title}</h4>
            <h4 className="mt-3 font-semibold text-xl text-black dark:text-white font-sans">{education.name}</h4>
            <div className="flex flex-wrap">
              <time className="mt-3 p-0 m-0 text-xl text-black font-sans">{initParsed}</time>
              <time className="mt-3 p-0 m-0 text-xl text-black ml-3 font-sans"> {finishParsed}</time>
            </div>
          </div>
        </div>
        <div className="text-xl w-[42rem] text-black relative flex flex-col gap-2 pb-4  md:col-span-3 font-sans">
          {education.description}
        </div>
      </section>
      </article>
      )
    })
  )
}

export { CVEducation }
