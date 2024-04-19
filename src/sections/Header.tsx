'use client'

import { AvatarLoader } from '@/components/Loader'
import { AvatarComponent } from '@/components/Avatar'

function HeaderClient ({ avatar, user }: any) {
  return (
    <header className="mt-10 flex justify-right">
        <ul>
            <section>
                <div className='w-96 m-3'>
                    <AvatarComponent avatar={avatar} user={user}/>
                 </div>
            </section>
        </ul>
    </header>
  )
}

export { HeaderClient }
