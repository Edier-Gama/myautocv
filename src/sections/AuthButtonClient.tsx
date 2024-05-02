'use client'

import { googleLogo } from '@/consts/google-logo'
import { linkedinLogo } from '@/consts/linkedin-logo'
import { SignInWithLinkedin, SignInWithGoogle } from '@/utils/supabase/sign-in-functions'

export default function AuthButtonClient ({ session }: any) {
  return (
    <section>
         {(session != null) && (<div></div>)}
         {session === null && (
          <section className='m-auto flex flex-wrap justify-center'>
           <button
              onClick={async () => { await SignInWithLinkedin() }}
              type="button"
              className="w-96 md:w-60 rounded-xl justify-center font-sans text-sm text-gray-900 bg-white hover:bg-gray-100
              border border-gray-400 font-medium px-5 py-2.5 text-center inline-flex items-center">
              {linkedinLogo}
              Continuar con LinkedIn
          </button>
          <button
              onClick={async () => { await SignInWithGoogle() }}
              type="button"
              className="w-96 mt-3 md:w-60 md:ml-3 md:mt-0 rounded-xl justify-center font-sans text-sm text-gray-900 bg-white hover:bg-gray-100
              border border-gray-400 font-medium px-5 py-2.5 text-center inline-flex items-center">
              {googleLogo}
              Continuar con Google
              </button>
          </section>
         )}
    </section>
  )
}
