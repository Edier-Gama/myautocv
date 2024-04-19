import { HeaderClient } from '@/sections/Header'
import { getUserSession } from '@/utils/supabase/get-user-session'
import { createSupabaseServerClient } from '@/utils/supabase/server'
export default async function HeaaderServer () {
  const supabase = await createSupabaseServerClient()
  const { data } = await supabase.from('users').select('*')

  const session = await getUserSession()
  const selectedUser = data?.find((user: any) => {
    const userData = user.provider_id === session?.user.user_metadata.provider_id
    return userData
  })
  const userAvatar = selectedUser.picture
  return <HeaderClient avatar={userAvatar} user={selectedUser}/>
}
