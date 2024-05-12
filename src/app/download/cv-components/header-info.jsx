/* eslint-disable @typescript-eslint/no-unsafe-argument */
'use client'
import Image from 'next/image'
import { phone } from '@/consts/phone-logo'
import { email } from '@/consts/email-logo'
import { worldWideLogo } from '@/consts/world-icon'
import { AboutMeIcon } from '@/consts/about-me-icon'

function CVHeaderInfo () {
  let userInfo
  let localData
  if (typeof window !== 'undefined') {
    localData = localStorage?.getItem('basic_info')
    userInfo = JSON.parse(localData)
  }
  return (
    userInfo?.map((information) => {
      return (
        <section
          key={information.name}
          className="header-section relative flex flex-col p-3">
          <div>
            <h2 className="text-4xl font-sans font-bold w-full">{information.name}</h2>
            <p className="text-xl text-left max-w-4xl mt-5">{information.profession}</p>
            <section className="mt-5 inline-flex">
              <div className='flex'>
                <div className='border-neutral-500 border rounded-md p-3'>{phone}</div>
                <a href={'/'} className='ml-3 font-semibold mt-1'>{information.phone}</a>
              </div>
              <div className='flex mt-0'>
                <div className='flex border-neutral-500 border rounded-md p-3 ml-3 mt-0'>{email}</div>
                <a
                  className='ml-3 font-semibold mt-1'
                  title={`Enviar un correo electrónico a ${information.name} al correo ${information.email}`}
                  href={`mailto:${information.email}`}>
                  {information.email}
                </a>
              </div>
              <div className='flex mt-0'>
                <div className='flex border-neutral-500 border rounded-md p-3 ml-3 mt-0'>{email}</div>
                <a
                  className='ml-3 font-semibold mt-1'
                  title={`Enviar un correo electrónico a ${information.name} al correo ${information.email}`}
                  href={`mailto:${information.email}`}>
                  {information.ubication}
                </a>
              </div>
            </section>
          </div>
          <div className="mt-10">
            <div className='flex items-center'>
             {AboutMeIcon}
             <h2 className="text-4xl font-sans font-bold p-3">Sobre Mí</h2>
            </div>
            <p className="text-left text-2xl mt-3 w-[42rem]">{information.description}</p>
          </div>
        </section>
      )
    })
  )
}

export { CVHeaderInfo }
