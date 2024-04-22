'use client'

import { Avatar, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { SignInWithLinkedin } from '@/utils/supabase/sign-in-functions'
import { createSupabase } from '@/utils/supabase/client'

function AvatarComponent ({ user, data, avatar }: any) {
  const supabase = createSupabase()
  const router = useRouter()
  const signOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

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
                  <MenuItem className='font-sans font-semibold'>Hola, {user?.user.user_metadata.name}</MenuItem>
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
