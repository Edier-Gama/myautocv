/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { createSupabase } from './client'
const SignInWithLinkedin = async () => {
  const supabase = createSupabase()
  supabase.auth.signInWithOAuth({
    provider: 'linkedin_oidc',
    options: {
      redirectTo: 'http://localhost:3000/auth/callback'
    }
  })
}
const SignInWithGoogle = async () => {
  const supabase = createSupabase()
  supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: 'http://localhost:3000/auth/callback'
    }
  })
}
export { SignInWithLinkedin, SignInWithGoogle }
