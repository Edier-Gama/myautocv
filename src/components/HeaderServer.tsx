import { HeaderClient } from '@/sections/Header'
import { getUserSession } from '@/utils/supabase/get-user-session'
import { createSupabaseServerClient } from '@/utils/supabase/server'
export default async function HeaaderServer () {
  const supabase = await createSupabaseServerClient()
  const { data } = await supabase.from('users').select('*')
  const session = await getUserSession()

  const avatar = session?.user.user_metadata.picture
  return <HeaderClient user={session} data={data} avatar={avatar}/>
}
