/* eslint-disable react/react-in-jsx-scope */
function Home (): any {
  return (
    <section className="max-w-7xl m-auto">
      <header className="mt-10 flex m-auto ml-2">
        <ul>
            <a href="" className="m-2 text-xl hover:scale-105">Log In</a>
            <a href="" className="m-2 text-xl">Sign Up</a>
            <a href="" className="m-2 text-xl">Home</a>
            <a href="" className="m-2 text-xl">About</a>
        </ul>
      </header>
      <main className="">
        <section className="flex flex-col relative top-20 p-3 max-w-4xl">
            <h1 className="text-6xl font-semibold text-left md:text-left">Open Source Project</h1>
            <h1 className="text-6xl font-semibold text-left md:text-left">Free CV Maker</h1>
            <p className="mt-10 text-2xl text-left md:text-left max-w-3xl">Crea tu CV estilo minimalista en minutos y descárgalo en PDF totalmente gratis o refiere tu perfil para vista web</p>
        </section>
      </main>
    </section>
  )
}
export { Home }
