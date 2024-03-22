import { TextArea } from '@/components/textareacomponents'
import { InputLeftAddon, InputRightAddon, Input, InputGroup } from '@chakra-ui/react'
import React from 'react'

function AboutInfo (): any {
  return (
        <section className='flex m-auto relative top-60 max-w-7xl flex-wrap mt-10'>
            <div className="flex flex-col">
                <p className='text-xl text-left font-semibold ml-3'>Describe tu perfil profesional</p>
                <TextArea placeholder='+15 años de experiencia. Ingeniero de Software. Especializado en el desarrollo de aplicaciones web únicas de la Universidad Nacional de Colombia'/>
            </div>
            <div className='flex flex-col'>
                <p className='text-xl text-left font-semibold ml-3'>Describe tu perfil personal</p>
                <TextArea placeholder='Me llamo Miguel Ángel pero mis amigos me llaman midu. Empecé en la programación con un Amstrad, tenía 10 años. Actualmente estoy liderando equipos de desarrollo en multinacionales.'/>
            </div>
            <div className="flex flex-col flex-wrap w-96">
              <p className='text-xl text-left font-semibold ml-3'>Redes Sociales ( opcional )</p>
              <div className='mt-3 m-3 w-96'>
                <InputGroup size='sm' fontFamily={'Onest Variable'}>
                    <InputLeftAddon height={'50px'} fontSize={'18px'}>
                     @
                    </InputLeftAddon>
                    <Input placeholder='Tu username de Twitter / X' height={'50px'} fontSize={'18px'}/>
                </InputGroup>
              </div>
              <div className='mt-3 m-3 w-96'>
                <InputGroup size='sm' fontFamily={'Onest Variable'}>
                    <InputLeftAddon height={'50px'} fontSize={'18px'}>
                    https://
                    </InputLeftAddon>
                    <Input placeholder='Tu Linkedin' height={'50px'} fontSize={'18px'}/>
                    <InputRightAddon height={'50px'} fontSize={'18px'}>
                    .com
                    </InputRightAddon>
                </InputGroup>
              </div>
              <div className='mt-3 m-3 w-96'>
                <InputGroup size='sm' fontFamily={'Onest Variable'}>
                    <InputLeftAddon height={'50px'} fontSize={'18px'}>
                    https://
                    </InputLeftAddon>
                    <Input placeholder='Tu Red Social Favorita' height={'50px'} fontSize={'18px'}/>
                    <InputRightAddon height={'50px'} fontSize={'18px'}>
                    .com
                    </InputRightAddon>
                </InputGroup>
              </div>
            </div>
        </section>
  )
}

export { AboutInfo }
