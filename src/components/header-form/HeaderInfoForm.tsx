/* eslint-disable @typescript-eslint/strict-boolean-expressions */
'use client'

/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react'
import { AddSectionButton } from '@/components/add-section-button'
import { Input, FormLabel, Textarea } from '@chakra-ui/react'
import { HeaderInfo } from '@/sections/HeaderInfo'
import { addHeaderInfo } from './add-basic-info'

function HeaderInfoForm (): any {
  let userInfo
  const localData = localStorage?.getItem('basic_info')
  if (localData !== null) {
    userInfo = JSON.parse(localData)
  }
  const [name, setName]: any = useState()
  const [email, setEmail]: any = useState()
  const [profession, setProfession]: any = useState()
  const [phone, setPhone]: any = useState()
  const [linkedin, setLinkedin]: any = useState()
  const [ubication, setUbication]: any = useState()
  const [description, setDescription]: any = useState('')

  const [hasBasicInfo, setHasBasicInfo]: any = useState(null)

  return (
    <>
      {
        userInfo && (
          <section className='relative max-w-4xl m-auto top-10 flex flex-col justify-center'>
            <HeaderInfo/>
          </section>
        )
      }
      {
        !userInfo && (
        <section className='relative max-w-4xl m-auto top-10 flex flex-col justify-center' id='header-form'>
            <h1 className="text-3xl font-semibold m-3 text-left">Basic information</h1>
            <div className='flex flex-wrap'>
              <div className='flex flex-col m-3 w-96'>
                <FormLabel className='font-sans text-xl'>Full name</FormLabel>
                <Input
                  onChange={(event) => { setName(event.target.value) }}
                  type="text"
                  placeholder='Edier Gama'
                  className='rounded'
                  height={'50px'} fontSize={'17px'}
                />
              </div>
              <div className='flex flex-col m-3 w-96'>
                <FormLabel className='font-sans text-xl'>Email</FormLabel>
                <Input
                  onChange={(event) => { setEmail(event.target.value) }}
                  type="email"
                  placeholder='ediergama@gmail.com'
                  className='rounded'
                  height={'50px'} fontSize={'17px'}
                 />
              </div>
              <div className='flex flex-col m-3 w-96'>
                <FormLabel className='font-sans text-xl'>Title</FormLabel>
                <Input
                  onChange={(event) => { setProfession(event.target.value) }}
                  type="text"
                  placeholder='Product Manager'
                  className='rounded'
                  height={'50px'} fontSize={'17px'}
                />
              </div>
              <div className='m-3 w-96' >
              <FormLabel className='font-sans text-xl'>Phone</FormLabel>
                 <Input
                   placeholder='3227657039'
                   onChange={(event) => { setPhone(event.target.value) }}
                   height={'50px'} fontSize={'17px'}/>
              </div>
              <div className='mt-3 m-3 w-96'>
              <FormLabel className='font-sans text-xl'>LinkedIn - optional</FormLabel>
                 <Input
                   placeholder='ediergama'
                   onChange={(event) => { setLinkedin(event.target.value) }}
                   height={'50px'} fontSize={'17px'}/>
              </div>
              <div className='mt-3 m-3 w-96'>
              <FormLabel className='font-sans text-xl'>Country</FormLabel>
                 <Input
                   placeholder='USA, Mexico, Colombia, España'
                   onChange={(event) => { setUbication(event.target.value) }}
                   height={'50px'} fontSize={'17px'}/>
              </div>
                <div className='flex flex-col max-w-4xl'>
                  <FormLabel className='font-sans text-xl m-3'>Describe yourself - min 160 characters</FormLabel>
                  <Textarea
                      onChange={(event) => { setDescription(event.target.value) }}
                      height={'200px'}
                      width={'790px'}
                      placeholder='Liderar equipos. Hacer mantenimiento a bases de datos hechas en SQL. Crear diseños innovadores para la empresa ...'
                      className='m-3 max-w-96 md:max-w-4xl resize-none rounded'>
                  </Textarea>
                </div>
            </div>
            {
              // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
              name && email && profession && description.length > 100 && (
                <AddSectionButton
                  classList="m-3 mt-10 w-60 rounded-xl justify-center font-sans text-sm text-white bg-blue-600 hover:bg-blue-500
                  border border-gray-400 font-medium px-5 py-2.5 text-center inline-flex items-center"
                  callback={addHeaderInfo}
                  functionParams={{ name, email, profession, phone, linkedin, ubication, description, setHasBasicInfo }}
                  text='Añadir'
                />
              )
            }
        </section>

        )
      }
    </>
  )
}

export { HeaderInfoForm }
