/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import { Textarea } from '@chakra-ui/react'
import { useState } from 'react'

function TextArea ({ placeholder }: any): any {
  const [resize, setResize] = useState()
  const [height, setHeight] = useState('200px')
  return (
        <section className="w-96 m-3">
          <Textarea
             placeholder={placeholder}
             resize={resize}
             height={height}
             fontFamily={'Onest Variable'}
             fontSize={'20px'}
          />
        </section>
  )
}

export { TextArea }
