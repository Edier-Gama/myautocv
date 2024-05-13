/* eslint-disable @typescript-eslint/no-unsafe-argument */
'use client'
import Image from 'next/image'
import { phoneLogo } from '@/consts/phone-logo'
import { emailLogo } from '@/consts/email-logo'
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
      const phone = information.phone.replace(' ', '')
      const ubication = information.ubication.replace(' ', '')
      const email = information.email.replace(' ', '')

      return (
        <section
          key={information.name}
          className="header-section relative flex flex-col p-3">
          <div>
            <h2 className="text-4xl font-sans font-bold w-full">{information.name}</h2>
            <p className="text-xl text-left max-w-4xl mt-5">{information.profession}</p>
            <section className="mt-5 inline-flex">
              <div className='flex'>
                <div className='border-neutral-500 border rounded-md p-3'>{phoneLogo}</div>
                <a href={'/'} className='ml-3 font-semibold mt-1'>{phone}</a>
              </div>
              <div className='flex mt-0'>
                <div className='flex border-neutral-500 border rounded-md p-3 ml-3 mt-0'>{emailLogo}</div>
                <a
                  className='ml-3 font-semibold mt-1'>
                  {email}
                </a>
              </div>
              <div className='flex mt-0'>
                <div className='flex border-neutral-500 border rounded-md p-3 ml-3 mt-0'>{worldWideLogo}</div>
                <a
                  className='ml-3 font-semibold mt-1'>
                  {ubication}
                </a>
              </div>
            </section>
          </div>
          <div className="mt-10">
            <div className='flex items-center'>
             {AboutMeIcon}
             <h2 className="text-4xl font-sans font-bold p-3 mb-5">Sobre Mí</h2>
            </div>
            <p className="text-left text-2xl mt-3 w-[52rem]">{information.description}</p>
          </div>
        </section>
      )
    })
  )
}

export { CVHeaderInfo }
