import { getUserSessionStatus } from '@/logic/get-user-session'
import { HeaderClient } from '@/sections/Header'
import { getUserSession } from '@/utils/supabase/get-user-session'
import { Avatar } from '@chakra-ui/react'

export default async function HeaaderServer () {
  const session = await getUserSession()
  return <HeaderClient session={session}/>
}
