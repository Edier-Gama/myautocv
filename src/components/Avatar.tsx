'use client'

import { Avatar, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { SignOutSession } from '@/utils/supabase/sign-out-session'
import { useRouter } from 'next/navigation'
import { SignInWithLinkedin } from '@/utils/supabase/sign-in-with-linkedin'

function AvatarComponent ({ userAvatar }: any) {
  const router = useRouter()
  function signOut (): any {
    SignOutSession()
  }
  return (
    <div>
    <Menu>
      <MenuButton>
        <Avatar
           height={'60px'} width={'60px'}
           src={userAvatar}>
        </Avatar>
      </MenuButton>
         <MenuList>
         {userAvatar !== undefined && (
            <div>
                <MenuItem>Settings</MenuItem>
                <MenuItem onClick={() => signOut()} className='font-sans'>Sign out</MenuItem>
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
