'use client'

/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react'
import { AddSectionButton } from '@/components/add-section-button'
import { saveHeaderDataInLocalStorage } from '@/lib/save-local-header-info'
import { InputGroup, InputLeftAddon, Input, FormLabel, Textarea } from '@chakra-ui/react'

function HeaderInfo (): any {
  const [name, setName]: any = useState()
  const [email, setEmail]: any = useState()
  const [profession, setProfession]: any = useState()
  const [x, setX]: any = useState()
  const [linkedin, setLinkedin]: any = useState()
  const [social, setSocial]: any = useState()

  return (
        <section className='relative max-w-4xl m-auto top-80 flex flex-col justify-center' id='cv-maker'>
            <h1 className="text-4xl font-semibold m-3 text-left">Vamos a crear algo nuevo...</h1>
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
                <FormLabel className='font-sans text-xl m-3'>Titular</FormLabel>
                <input
                  onChange={(event) => { setProfession(event.target.value) }}
                  type="text"
                  placeholder='Product Manager con 2 años de experiencia'
                  className='w-96 m-3 rounded'>
                </input>
              </div>
              <div className='m-3 w-96' >
              <FormLabel className='font-sans text-xl'>Twitter</FormLabel>
              <InputGroup size='sm' fontFamily={'Onest Variable'}>
                 <InputLeftAddon height={'50px'} fontSize={'17px'}>
                 @
                 </InputLeftAddon>
                 <Input
                   placeholder='Usuario de X'
                   onChange={(event) => { setX(event.target.value) }}
                   height={'50px'} fontSize={'17px'}/>
             </InputGroup>
              </div>
              <div className='mt-3 m-3 w-96'>
              <FormLabel className='font-sans text-xl'>LinkedIn</FormLabel>
              <InputGroup size='sm' fontFamily={'Onest Variable'}>
                 <InputLeftAddon height={'50px'} fontSize={'17px'}>
                 https://
                 </InputLeftAddon>
                 <Input
                   placeholder='Usuario de LinkedIn'
                   onChange={(event) => { setLinkedin(event.target.value) }}
                   height={'50px'} fontSize={'17px'}/>
             </InputGroup>
              </div>
              <div className='mt-3 m-3 w-96'>
              <FormLabel className='font-sans text-xl'>Red de preferencia</FormLabel>
              <InputGroup size='sm' fontFamily={'Onest Variable'}>
                 <InputLeftAddon height={'50px'} fontSize={'17px'}>
                 https://
                 </InputLeftAddon>
                 <Input
                   placeholder='Cualquier Red Social'
                   onChange={(event) => { setSocial(event.target.value) }}
                   height={'50px'} fontSize={'17px'}/>
             </InputGroup>
              </div>
                <div className='flex flex-col max-w-4xl'>
                  <FormLabel className='font-sans text-xl m-3'>Describe tu perfil personal y profesional</FormLabel>
                  <Textarea
                      height={'200px'}
                      width={'790px'}
                      placeholder='Liderar equipos. Hacer mantenimiento a bases de datos hechas en SQL. Crear diseños innovadores para la empresa ...'
                      className='m-3 max-w-96 md:max-w-4xl resize-none rounded'>
                  </Textarea>
                </div>
            </div>
            {
              // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
              name && email && profession && x && linkedin && social && (
                <AddSectionButton
                  classList="m-3 mt-10 w-32 rounded-xl justify-center font-sans text-sm text-white bg-blue-600 hover:bg-blue-500
                  border border-gray-400 font-medium px-5 py-2.5 text-center inline-flex items-center"sss
                  functionParams={{ name, email, profession, x, linkedin, social }}
                  text='Añadir'
                  callback={saveHeaderDataInLocalStorage}
                />
              )
            }
        </section>
  )
}

export { HeaderInfo }
