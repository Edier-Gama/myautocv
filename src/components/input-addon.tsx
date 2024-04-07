/* eslint-disable react/react-in-jsx-scope */
import { InputGroup, InputLeftAddon, Input } from '@chakra-ui/react'
interface Props {
  placeholder: string
  leftAddonHolder: string
}
function InputAddon (params: Props): any {
  const { placeholder, leftAddonHolder } = params
  return (
        <InputGroup size='sm' fontFamily={'Onest Variable'}>
            <InputLeftAddon height={'50px'} fontSize={'17px'}>
            {leftAddonHolder}
            </InputLeftAddon>
            <Input placeholder={placeholder} height={'50px'} fontSize={'17px'}/>
        </InputGroup>
  )
}
export { InputAddon }
