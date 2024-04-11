/* eslint-disable react/react-in-jsx-scope */

import SignInButton from '@/sections/AuthButton'

export default function Login (): any {
  return (
    <section className="max-w-7xl m-auto">
      <main className="">
        <section className="flex flex-col relative top-20 max-w-7xl flex-wrap m-3">
            <h1 className="text-5xl font-semibold text-center md:text-left">My AutoCV Inicio de Sesión</h1>
            <p className="mt-10 text-2xl text-center md:text-left max-w-3xl">
            </p>
            <SignInButton/>
        </section>
      </main>
    </section>
  )
}
