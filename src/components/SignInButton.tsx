'use client'

import { createBrowserClient } from '@supabase/ssr'
import { Button } from '@chakra-ui/react'

export default function SignInButton () {
  const NEXT_PUBLIC_SUPABASE_URL: string = process.env.NEXT_PUBLIC_SUPABASE_URL
  const NEXT_PUBLIC_SUPABASE_ANON_KEY: string = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  const SignInWithLinkedin = async () => {
    const supabase = createBrowserClient(NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY)
    supabase.auth.signInWithOAuth({
      provider: 'linkedin_oidc',
      options: {
        redirectTo: 'http://localhost:3000/auth/callback'
      }
    })
  }
  return (
    <Button
    onClick={async () => { await SignInWithLinkedin() }}
    className='w-96 mt-3 md:m-0'
    colorScheme='blue'>Auto CV con Linkedin
    </Button>
  )
}
