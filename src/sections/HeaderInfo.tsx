/* eslint-disable react/react-in-jsx-scope */
import { InputComponent } from '@/components/Inputcomponents'

function HeaderInfo (): any {
  return (
        <section className='flex m-auto flex-col relative top-60 max-w-7xl flex-wrap'>
            <p className='text-xl text-left font-semibold ml-3'>Datos básicos</p>
            <div className='flex flex-wrap'>
                <InputComponent placeholder='nombre' labelText='Nombre'/>
                <InputComponent placeholder='email' labelText='Email'/>
                <InputComponent placeholder='profesión' labelText='Profesión'/>
            </div>
        </section>
  )
}

export { HeaderInfo }
