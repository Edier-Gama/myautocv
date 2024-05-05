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
         <section className="experience-section m-3 max-w-4xl justify-center items-center" key={experience.company}>
           <div>
             <div className="flex flex-wrap justify-between">
               <h1 className="font-sans text-3xl font-semibold text-left mt-5">{experience.company}</h1>
               <div className="flex justify-right">
                 <p className="font-sans text-xl text-left mt-7">{initParsed} - </p>
                 <p className="font-sans text-xl text-left mt-7 ml-2">{finishParsed}</p>
               </div>
             </div>
             <div className="flex">
               <p className="font-sans text-xl max-w-xl mt-4 font-semibold">{experience.charge}</p>
             </div>
           </div>
           <p className="font-sans text-xl max-w-96 md:max-w-4xl mt-4 text-left">{experience.jobDescription}</p>
           <div className="flex flex-wrap">
           </div>
         </section>
      )
    })
  )
}

export { Experience }
