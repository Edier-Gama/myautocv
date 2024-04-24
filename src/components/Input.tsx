'use client'

import { Experience } from '@/sections/Experience'
/* eslint-disable react/react-in-jsx-scope */
import { Input, FormLabel } from '@chakra-ui/react'
import { useState } from 'react'

function InputComponent (params: any): any {
  const { labelText, placeholder } = params
  const [inputValue, setInputValue]: any = useState()
  return (
        <section className='w-96 m-3'>
            <FormLabel className='font-sans text-xl'>{labelText}</FormLabel>
            <Input
              onChange={(event) => { setInputValue(event.target.value) }}
              className='font-sans'
              placeholder={placeholder}
            />
        </section>
  )
}

export { InputComponent }
