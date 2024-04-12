/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { createSupabase } from './client'

const SignOutSession = async () => {
  const supabase = createSupabase()
  supabase.auth.signOut()
  document.location.reload()
}
export { SignOutSession }
