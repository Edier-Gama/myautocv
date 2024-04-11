import { Suspense } from 'react'
import AuthButtonLogIn from '@/components/AuthButton'
import { getUserSession } from '@/utils/supabase/get-user-session'
import { ButtonLoader } from '@/components/Loader'

export default function AuthButton () {
  return (
    <section>
      <Suspense fallback={<ButtonLoader/>}>
        <AuthButtonLogIn/>
      </Suspense>
    </section>
  )
}
