/* eslint-disable react/react-in-jsx-scope */

import SignInButton from '@/sections/AuthButton'
import { Header } from './Header'

function Home (): any {
  return (
    <section className="max-w-7xl m-auto static">
      <Header/>
      <main className="">
        <section className="animate-in fade-in zoom-in duration-500 m-3 min-w-96 flex relative top-20 max-w-7xl flex-wrap mt-10 justify-center">
          <div className='z-10 flex flex-col justify-center items-center'>

            <section className='m-0 w-96 md:w-full'>
            <h1 className="max-w-4xl text-3xl font-semibold text-left md:text-center md:text-6xl">Haz un CV gratis anti ATS usando Inteligencia Artificial</h1>
            <p className="mt-10 text-xl text-left max-w-4xl md:text-center md:text-2xl">
              Crea un CV manualmente y descárgalo gratis o <a
                className='. text-blue-700 text-xl md:text-center md:text-2xl font-sans'
                href='https://localhost:3001/auth/callback'>
                  Inicia sesión con LinkedIn
              </a> y crea un CV de manera automática usando <b>Inteligencia Artificial en un segundo</b>
            </p>
            </section>
            <section className='flex flex-wrap mt-10 justify-center'>
              <div className=''>
                <SignInButton/>
              </div>
                <a
                  href='#cv-maker'
                  className='mt-3 md:ml-3 md:mt-0 h-11 bg-blue-600 flex justify-center items-center rounded-xl w-96 text-sm text-white font-sans'>Crear CV manualmente
                </a>
            </section>
          </div>
          {/* Pensando si añadirlo: */}
          {/* <div className='relative top-32 rounded-lg'>
           <h1 className="max-w-4xl text-3xl font-semibold text-center md:text-3xl">Con un diseño minimalista...</h1>
           <img className='relative mt-5 rounded-lg' src='/cv.jpg' alt='CV example' width={800}/>
          </div> */}
        </section>
      </main>
    </section>
  )
}
export { Home }
