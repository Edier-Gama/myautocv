/* eslint-disable react/react-in-jsx-scope */

import { Button } from "@chakra-ui/react"
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
            <h1 className="text-6xl font-semibold text-left md:text-left">Open Source AutoCV</h1>
            <p className="mt-10 text-2xl text-left md:text-left max-w-3xl">   
              Crea tu CV estilo minimalista en minutos y descárgalo en PDF gratis. 
              Refiere tu perfil para vista web o <b>Inicia sesión con Linkedin y haz tu CV de manera automática con 
              Inteligencia Artificial en segundos</b>  
            </p>
            <div className="flex flex-wrap mt-10">
              <Button className='w-80 mt-3' colorScheme='blue'>Auto CV con Linkedin</Button>
              <Button className='w-80 mt-3 sm:ml-2' colorScheme='blue'>Crear manualmnete</Button>
            </div>
        </section>
      </main>
    </section>
  )
}
export { Home }
