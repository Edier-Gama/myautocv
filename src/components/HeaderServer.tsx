import { HeaderClient } from '@/sections/Header'
import { getUserSession } from '@/utils/supabase/get-user-session'
import { createSupabaseServerClient } from '@/utils/supabase/server'
import { scrappyFromPage } from '@/app/scrappy.mjs'
import { getUserProfile } from '@/lib/getUserProfile'
export default async function HeaaderServer () {
  // scrappyFromPage()
  const supabase = await createSupabaseServerClient()
  const { data } = await supabase.from('users').select('*')
  const session = await getUserSession()
  if (session != null) {
    getUserProfile(session?.provider_token)
  }
  const avatar = session?.user.user_metadata.picture
  return <HeaderClient user={session} data={data} avatar={avatar}/>
}
