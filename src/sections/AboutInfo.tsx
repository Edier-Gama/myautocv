import { TextArea } from '@/components/textareacomponents'
import { InputAddon } from '@/components/InputAddoncomponents'
import React from 'react'

function AboutInfo (): any {
  return (
        <section className='flex m-auto relative top-60 max-w-7xl flex-wrap mt-10'>
            <div className="flex flex-col">
                <TextArea
                   classList='w-96 m-3'
                   labelText='Describe tu perfil personal'
                   placeholder='+15 años de experiencia. Ingeniero de Software. Especializado en ...'
                />
            </div>
            <div className='flex flex-col'>
                <TextArea
                   classList='w-96 m-3'
                   labelText='Describe tu perfil profesional'
                   placeholder='Me llamo Miguel Ángel pero mis amigos me llaman midu. Empecé en la programación ...'
                />
            </div>
            <div className="flex flex-col flex-wrap w-96">
              <p className='text-xl text-left font-semibold ml-3 mt-2'>Redes Sociales ( opcional )</p>
              <div className='m-3 w-96'>
                <InputAddon placeholder='Usuario de X' leftAddonHolder='@'/>
              </div>
              <div className='mt-3 m-3 w-96'>
                <InputAddon placeholder='Linkedin' leftAddonHolder='https://'/>
              </div>
              <div className='mt-3 m-3 w-96'>
                <InputAddon placeholder='Cualquier red social' leftAddonHolder='https://'/>
              </div>
            </div>
        </section>
  )
}

export { AboutInfo }
