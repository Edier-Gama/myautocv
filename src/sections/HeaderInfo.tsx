/* eslint-disable react/react-in-jsx-scope */
import { InputComponent } from '@/components/Input'

function HeaderInfo (): any {
  return (
        <section className='flex m-auto flex-col relative top-60 max-w-7xl flex-wrap justify-center'>
            <p className='text-xl text-left font-semibold ml-3'>Información básica</p>
            <div className='flex flex-wrap'>
                <InputComponent placeholder='nombre' labelText='Nombre'/>
                <InputComponent placeholder='email' labelText='Email'/>
                <InputComponent placeholder='profesión' labelText='Profesión'/>
            </div>
        </section>
  )
}

export { HeaderInfo }
