import { getUserSession } from '@/utils/supabase/get-user-session'
import AuthButtonClient from '@/sections/AuthButtonClient'

export default async function AuthButtonServer () {
  const session = await getUserSession()
  return <AuthButtonClient session={session}/>
}
