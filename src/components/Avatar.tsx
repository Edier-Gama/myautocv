'use client'

import { Avatar, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { SignInWithLinkedin } from '@/utils/supabase/sign-in-with-linkedin'
import { createSupabase } from '@/utils/supabase/client'

function AvatarComponent ({ user, data, avatar }: any) {
  const supabase = createSupabase()
  const router = useRouter()
  const signOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }
  const selectedUser = data?.find((userInfo: any) => {
    const userData = userInfo.provider_id === user?.user.user_metadata.provider_id
    return userData
  })
  return (
    <div>
    <Menu>
      <MenuButton>
        <Avatar
           name='user'
           bg={'gray'}
           color={'white'}
           height={'60px'} width={'60px'}
           src={avatar}>
        </Avatar>
      </MenuButton>
         <MenuList className='z-50 absolute'>
         {avatar !== undefined && (
            <div>
              {
                  <MenuItem className='font-sans font-semibold'>Hola, {selectedUser.given_name}</MenuItem>
              }
              <MenuItem>Settings</MenuItem>
              <MenuItem onClick={() => { signOut() }} className='font-sans'>Sign out</MenuItem>
            </div>
         )}
         {avatar === undefined && (
             <MenuItem onClick={async () => { await SignInWithLinkedin() }} className='font-sans'>Sign In</MenuItem>
         )}
        </MenuList>
     </Menu>
    </div>
  )
}
export { AvatarComponent }
