'use client'

import { Avatar } from '@chakra-ui/react'
import { getUserSessionStatus } from '@/logic/get-user-session'

function Header () {
  const { session, userAvatar } = getUserSessionStatus()
  return (
    <header className="mt-10 flex justify-right m-5">
        <ul>
            <section>
              <Avatar name='user_avatar' src={userAvatar} cursor={'pointer'}/>
            </section>
        </ul>
      </header>
  )
}

export { Header }
