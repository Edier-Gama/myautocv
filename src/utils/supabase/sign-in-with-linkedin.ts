/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { createSupabase } from './client'
const SignInWithLinkedin = async () => {
  const supabase = createSupabase()
  supabase.auth.signInWithOAuth({
    provider: 'linkedin_oidc',
    options: {
      redirectTo: 'https://myautocv.vercel.app/auth/callback'
    }
  })
}
export { SignInWithLinkedin }
