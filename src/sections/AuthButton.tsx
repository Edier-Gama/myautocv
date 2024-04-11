'use client'

import { Suspense } from 'react'
import AuthButtonLogIn from '@/components/AuthButton'
import { ButtonLoader } from '@/components/Loader'
import { SignInWithLinkedin } from '@/utils/supabase/sign-in-with-linkedin'

export default function AuthButtonClient ({ session }: any) {
  return (
    <section>
      <Suspense fallback={<ButtonLoader/>}>
         {(session != null) && (<div></div>)}
         {session === null && (
           <button
              onClick={async () => { await SignInWithLinkedin() }}
              type="button"
              className="w-96 rounded-xl justify-center font-sans text-sm text-gray-900 bg-white hover:bg-gray-100
              border border-gray-400 font-medium px-5 py-2.5 text-center inline-flex items-center">
              <svg aria-hidden="true" className="font-sans w-6 h-5 me-2 -ms-1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256"><path d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453" fill="#0A66C2"/></svg>
              Iniciar sesión con LinkedIn
          </button>
         )}
      </Suspense>
    </section>
  )
}
