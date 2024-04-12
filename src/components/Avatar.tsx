'use client'

import { Avatar, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { SignInWithLinkedin } from '@/utils/supabase/sign-in-with-linkedin'
import { createSupabase } from '@/utils/supabase/client'

function AvatarComponent ({ userAvatar }: any) {
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
           src={userAvatar}>
        </Avatar>
      </MenuButton>
         <MenuList>
         {userAvatar !== undefined && (
            <div>
                <MenuItem>Settings</MenuItem>
                <MenuItem onClick={() => { signOut() }} className='font-sans'>Sign out</MenuItem>
            </div>
         )}
         {userAvatar === undefined && (
             <MenuItem onClick={async () => { await SignInWithLinkedin() }} className='font-sans'>Sign In</MenuItem>
         )}
        </MenuList>
     </Menu>
    </div>
  )
}
export { AvatarComponent }
