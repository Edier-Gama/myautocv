'use client'

import { AvatarComponent } from '@/components/Avatar'

function HeaderClient ({ user, data, avatar }: any) {
  return (
    <header className="mt-10 flex justify-right">
        <ul>
            <section>
                <div className='w-96 m-3'>
                    <AvatarComponent user={user} data={data} avatar={avatar}/>
                 </div>
            </section>
        </ul>
    </header>
  )
}

export { HeaderClient }
