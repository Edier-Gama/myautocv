import { getUserSessionStatus } from '@/logic/get-user-session'
import { getUserSession } from '@/utils/supabase/get-user-session'
import { Avatar } from '@chakra-ui/react'

export default async function AvatarComponent () {
  const session = await getUserSession()
  return (
        <section className='w-96 m-3'>
            <Avatar
              height={'60px'} width={'60px'}
              src={session?.user.user_metadata.picture}>
            </Avatar>
        </section>
  )
}
