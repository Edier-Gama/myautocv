'use client'

function CVExperience () {
  let experience
  const localData = localStorage?.getItem('experience')
  if (localData !== null) {
    experience = JSON.parse(localData)
  }

  return (
    experience?.map((experience: any) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      const initialDate = new Date(experience.initialDate)
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      const finishDate = new Date(experience.finishDate)

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
        <article className='max-w-96 m-auto md:max-w-4xl' key={experience.company}>

        <section
        className="relative mx-12 pb-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-black/20 dark:before:border-white/15 before:content-[''] md:grid-cols-5 md:gap-10 md:space-x-4]"
        >
        <div className="relative pb-12 md:col-span-2">
          <div className="sticky top-0">
            <span className="text-blue-600 -left-[44px] absolute rounded-full text-5xl"
            >&bull;</span>
            <h4 className="font-semibold text-3xl text-black dark:text-white font-sans">{experience.company}</h4>
            <h3 className="mt-3 text-xl font-bold text-black font-sans">{experience.charge}</h3>
            <div className="flex flex-wrap">
              <time className="mt-3 p-0 m-0 text-xl text-black font-sans">{initParsed}</time>
              <time className="mt-3 p-0 m-0 text-xl text-black ml-3 font-sans"> {finishParsed}</time>
            </div>
          </div>
        </div>
        <div className="text-xl max-w-80 md:max-w-4xl text-black relative flex flex-col gap-2 pb-4  md:col-span-3 font-sans">
          {experience.jobDescription}
        </div>
      </section>
      </article>
      )
    })
  )
}

export { CVExperience }
