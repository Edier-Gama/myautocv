import { Input, FormLabel } from '@chakra-ui/react'


function InputComponent(params: any) {
    const { labelText, placeholder } = params
    return (
        <div className='m-3'>
            <FormLabel className='font-sans text-xl m-3'>{labelText}</FormLabel>
            <Input className='m-2 font-sans' placeholder={placeholder}/>
        </div>
    )
}

export {InputComponent}