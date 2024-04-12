'use client'

import { AvatarLoader } from '@/components/Loader'
import { AvatarComponent } from '@/components/Avatar'

function HeaderClient ({ session }: any) {
  const userAvatar = session?.user.user_metadata.picture
  return (
    <header className="mt-10 flex justify-right">
        <ul>
            <section>
                <div className='w-96 m-3'>
                  {(userAvatar !== null) && (
                    <AvatarComponent userAvatar={userAvatar}/>
                  )}
                  {(userAvatar === null) && (
                     <AvatarLoader/>
                  )}
                 </div>
            </section>
        </ul>
    </header>
  )
}

export { HeaderClient }
