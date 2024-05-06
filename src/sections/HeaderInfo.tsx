'use client'
import Image from 'next/image'
import { phone } from '@/consts/phone-logo'
import { email } from '@/consts/email-logo'
import { ubication } from '@/consts/ubication-logo'

function HeaderInfo () {
  let userInfo
  const localData = localStorage?.getItem('basic_info')
  if (localData !== null) {
    userInfo = JSON.parse(localData)
  }
  return (
    userInfo?.map((information: any) => {
      return (
        <section
          key={information.name}
          className="header-section relative max-w-4xl flex flex-col justify-center m-3">
          <div>
            <h2 className="text-5xl font-sans font-bold">{information.name}</h2>
            <p className="text-xl text-left max-w-4xl md:text-2xl mt-3">{information.profession}</p>
            <section className="flex flex-wrap mt-5 md:inline-flex">
              <div className='flex'>
                <div className='border-neutral-500 border rounded-md p-3'>{phone}</div>
                <a href={'/'} className='ml-3 font-semibold mt-3'>{information.phone}</a>
              </div>
              <div className='flex md:mt-0'>
                <div className='flex border-neutral-500 border rounded-md p-3 sm:ml-3 sm:mt-0 mt-2'>{email}</div>
                <a
                  className='ml-3 font-semibold mt-5 sm:mt-3'
                  title={`Enviar un correo electrónico a ${information.name} al correo ${information.email}`}
                  href={`mailto:${information.email}`}>
                  {information.email}
                </a>
              </div>
            </section>
          </div>
          <div className="mt-24">
            <h2 className="text-4xl font-sans font-bold">Sobre Mi</h2>
            <p className="text-xl text-left max-w-4xl md:text-2xl mt-3">{information.description}</p>
          </div>
        </section>
      )
    })
  )
}

export { HeaderInfo }
