'use client'

import { Textarea, FormLabel } from '@chakra-ui/react'
import { useState } from 'react'

function TextArea (params: any): any {
  const [resize, setResize] = useState()
  const [height, setHeight] = useState('200px')
  const { labelText, placeholder, classList } = params
  return (
        <section className={classList}>
          <FormLabel className='font-sans text-xl'>{labelText}</FormLabel>
          <Textarea
             placeholder={placeholder}
             resize={'none'}
             height={height}
             fontFamily={'Onest Variable'}
             className='font-sans text-xl'

          />
        </section>
  )
}

export { TextArea }
