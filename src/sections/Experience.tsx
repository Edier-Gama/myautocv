'use client'

function Experience () {
  const localData = localStorage.getItem('experience')
  let experience
  if (localData !== null) {
    experience = JSON.parse(localData)
  }
  console.log(experience)

  return (
    experience?.map((experience: any) => (
    <section className="experience-section m-3" key={experience.company}>
      <div>
        <div className="flex flex-wrap">
        <h1 className="font-sans max-w-4xl text-3xl font-semibold text-left mt-5">{experience.company}</h1>
        </div>
        <p className="font-sans text-xl max-w-xl mt-4 font-semibold">{experience.charge}</p>
      </div>
      <p className="font-sans text-xl max-w-xl mt-4">{experience.jobDescription}</p>
      <p className="font-sans text-xl max-w-xl mt-4">{experience.jobAchievements}</p>
      <div className="flex flex-wrap">
        <h1 className="font-sans max-w-4xl text-xl font-bold text-left mt-5">Duración en el cargo de</h1>
        <p className="font-sans max-w-4xl text-xl font-semibold text-left mt-5 text-blue-700 ml-2">{experience.date}</p>
      </div>
    </section>
    ))
  )
}

export { Experience }
