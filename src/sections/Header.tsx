'use client'

import { Suspense } from 'react'
import { AvatarLoader } from '@/components/Loader'
import { Avatar } from '@chakra-ui/react'

function HeaderClient ({ session }: any) {
  return (
    <header className="mt-10 flex justify-right">
        <ul>
            <section>
              <Suspense fallback={<AvatarLoader/>}>
                <div className='w-96 m-3'>
                 <Avatar
                   bg={'gray'}
                   name=' '
                   height={'60px'} width={'60px'}
                   src={session?.user.user_metadata.picture}>
                 </Avatar>
                </div>
              </Suspense>
            </section>
        </ul>
    </header>
  )
}

export { HeaderClient }
