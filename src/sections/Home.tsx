/* eslint-disable react/react-in-jsx-scope */

import SignInButton from '@/components/SignInButton'
import { ButtonWithLogo } from '@/components/Button'
import Image from 'next/image'
import cvImage from '../../public/cv_example.jpg'
import { Button } from '@chakra-ui/react'
function Home (): any {
  return (
    <section className="max-w-7xl m-auto">
      {/* <header className="pc-navbar mt-10 flex m-auto justify-end md:none">
        <ul>
            <ButtonWithLogo
              text={<a href='https://github.com/Edier-Gama/myautocv' className='text-sm'>Ver código fuente del proyecto</a>}
              svg={<svg
                aria-hidden="true"
                className="font-sans w-6 h-5 me-2 -ms-1"
                viewBox="0 0 256 250"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid"
                >
               <path
                d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z" />
               </svg>}
            />
        </ul>
      </header> */}
      <main className="">
        <section className="animate-in fade-in zoom-in duration-500 m-3 min-w-96 flex relative top-20 max-w-7xl flex-wrap mt-10 justify-center">
          <div className='z-10 flex flex-col justify-center items-center'>

            <section className='m-0'>
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
