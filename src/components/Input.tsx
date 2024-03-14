import { Input, FormLabel } from '@chakra-ui/react'


function InputComponent(params: any) {
    const { labelText, placeholder } = params
    return (
        <section className='w-96 m-3'>
            <FormLabel className='font-sans text-xl'>{labelText}</FormLabel>
            <Input className='font-sans' placeholder={placeholder}/>
        </section>
    )
}

export {InputComponent}