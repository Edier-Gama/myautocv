import { Suspense } from 'react'
import AvatarComponent from '@/components/Avatar'
import { AvatarLoader } from '@/components/Loader'

function Header () {
  return (
    <header className="mt-10 flex justify-right">
        <ul>
            <section>
              <Suspense fallback={<AvatarLoader/>}>
                 <AvatarComponent/>
              </Suspense>
            </section>
        </ul>
      </header>
  )
}

export { Header }
