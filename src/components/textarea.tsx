import { Textarea } from "@chakra-ui/react"
import { useState } from "react"

function TextArea({placeholder}: any) { 
    const [resize, setResize] = useState('none')
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

export {TextArea}