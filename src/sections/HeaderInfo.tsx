'use client'

/* eslint-disable react/react-in-jsx-scope */
import { InputComponent } from '@/components/Input'
import { FormLabel } from '@chakra-ui/react'
import { useState } from 'react'

function HeaderInfo (): any {
  const [name, setName]: any = useState()
  const [email, setEmail]: any = useState()
  const [profession, setProfession]: any = useState()

  return (
        <section className='flex m-auto flex-col relative top-80 max-w-7xl flex-wrap justify-center' id='cv-maker'>
            <h1 className="text-4xl font-semibold m-3">Vamos a crear algo nuevo...</h1>
            <div className='flex flex-wrap'>
              <div className='flex flex-col'>
                <FormLabel className='font-sans text-xl m-3'>Nombre</FormLabel>
                <input
                  onChange={(event) => { setName(event.target.value) }}
                  type="text"
                  placeholder='Edier Gama'
                  className='w-96 m-3 rounded'>
                </input>
              </div>
              <div className='flex flex-col'>
                <FormLabel className='font-sans text-xl m-3'>Email</FormLabel>
                <input
                  onChange={(event) => { setEmail(event.target.value) }}
                  type="text"
                  placeholder='ediergama@gmail.com'
                  className='w-96 m-3 rounded'>
                </input>
              </div>
              <div className='flex flex-col'>
                <FormLabel className='font-sans text-xl m-3'>Profesión</FormLabel>
                <input
                  onChange={(event) => { setProfession(event.target.value) }}
                  type="text"
                  placeholder='Desarrollador web'
                  className='w-96 m-3 rounded'>
                </input>
              </div>
            </div>
        </section>
  )
}

export { HeaderInfo }
