'use client'

import { Avatar, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { SignInWithGoogle, SignInWithLinkedin } from '@/utils/supabase/sign-in-functions'
import { createSupabase } from '@/utils/supabase/client'
import { googleLogo } from '@/consts/google-logo'
import { linkedinLogo } from '@/consts/linkedin-logo'

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
           bg={'gray'}
           color={'white'}
           height={'60px'} width={'60px'}
           src={avatar}>
        </Avatar>
      </MenuButton>
         <MenuList className='z-50 absolute w-2xl'>
         {avatar !== undefined && (
            <div>
              {
              <MenuItem className='font-sans font-semibold'>Hi, {user?.user.user_metadata.name}</MenuItem>
              }
              <MenuItem>Settings</MenuItem>
              <MenuItem
                onClick={() => { signOut() }}
                className='font-sans'>Sign Out
              </MenuItem>
            </div>
         )}
         {avatar === undefined && (
          <div>
            <MenuItem
              onClick={async () => { await SignInWithLinkedin() }}
              className='font-sans bg-white'
            >
              {linkedinLogo}
              SignIn with LinkedIn
            </MenuItem>
            <MenuItem
              onClick={async () => { await SignInWithGoogle() }}
              className='font-sans bg-white'
            >
              {googleLogo}
              SignIn with Google
            </MenuItem>
          </div>
         )}
        </MenuList>
     </Menu>
    </div>
  )
}
export { AvatarComponent }
