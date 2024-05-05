'use client'
function HeaderInfo () {
  let userInfo
  const localData = localStorage?.getItem('basic_info')
  if (localData !== null) {
    userInfo = JSON.parse(localData)
  }
  return (
    userInfo?.map((information: any) => {
      return (
        <section
          key={information.name}
          className="header-section relative max-w-4xl flex flex-col justify-center m-3">
          <div>
            <h2 className="text-5xl font-sans font-bold">{information.name}</h2>
            <p className="text-xl text-left max-w-4xl md:text-2xl mt-3">{information.profession}</p>
          </div>
          <div className="mt-32">
            <p className="text-xl text-left max-w-4xl md:text-2xl mt-3">{information.description}</p>
          </div>
        </section>
      )
    })
  )
}

export { HeaderInfo }
