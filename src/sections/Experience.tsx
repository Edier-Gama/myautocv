function Experience ({ company, charge, jobDescription, jobAchievements, date }: any) {
  return (
    <section className="experience-section inactive">
      <p>{company}</p>
      <p>{charge}</p>
      <p>{jobDescription}</p>
      <p>{jobAchievements}</p>
      <p>{JSON.stringify(date)}</p>
    </section>
  )
}

export { Experience }
