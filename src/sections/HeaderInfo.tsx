/* eslint-disable react/react-in-jsx-scope */
import { InputComponent } from '@/components/Input'

function HeaderInfo (): any {
  return (
        <section className='flex m-auto flex-col relative top-80 max-w-7xl flex-wrap justify-center'>
            <h1 className="text-4xl font-semibold m-3">Inicia manualmente</h1>
            <div className='flex flex-wrap'>
                <InputComponent placeholder='nombre' labelText='Nombre'/>
                <InputComponent placeholder='email' labelText='Email'/>
                <InputComponent placeholder='profesión' labelText='Profesión'/>
            </div>
        </section>
  )
}

export { HeaderInfo }
