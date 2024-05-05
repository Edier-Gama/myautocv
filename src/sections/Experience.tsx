'use client'

function Experience () {
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
         <section className="experience-section m-3 max-w-7xl justify-center items-center mt-20" key={experience.company}>
           <section className="flex flex-wrap">
             <div className="flex flex-col">
               <h1 className="font-sans text-2xl font-bold text-left">{experience.company}</h1>
               <p className="font-sans text-xl max-w-xl mt-2 font-bold">{experience.charge}</p>
               <div className="flex justify-right">
                 <p className="font-sans text-xl text-left mt-2">{initParsed} - </p>
                 <p className="font-sans text-xl text-left ml-2 mt-2">{finishParsed}</p>
               </div>
             </div>
             <p className="font-sans text-xl mt-5 md:mt-1 max-w-4xl md:max-w-lg md:ml-20 text-left">{experience.jobDescription}</p>
           </section>
         </section>
      )
    })
  )
}

export { Experience }
