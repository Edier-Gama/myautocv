function Experience ({ company, charge, jobDescription, jobAchievements, date }: any) {
  return (
    <section className="experience-section m-3 max-w-3xl inactive">
      <div>
        <div className="flex flex-wrap">
        <h1 className="font-sans max-w-4xl text-3xl font-semibold text-left mt-5">{company}</h1>
        </div>
        <p className="font-sans text-xl max-w-xl mt-4 font-semibold">{charge}</p>
      </div>
      <p className="font-sans text-xl max-w-xl mt-4">{jobDescription}</p>
      <p className="font-sans text-xl max-w-xl mt-4">{jobAchievements}</p>
      <div className="flex flex-wrap">
        <h1 className="font-sans max-w-4xl text-xl font-bold text-left mt-5">Duración en el cargo de</h1>
        <p className="font-sans max-w-4xl text-xl font-semibold text-left mt-5 text-blue-700 ml-2">{date}</p>
      </div>
    </section>
  )
}

export { Experience }
