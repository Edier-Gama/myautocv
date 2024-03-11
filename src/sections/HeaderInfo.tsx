import { InputComponent } from '@/components/Inputcomponents'

function HeaderInfo() {
    return (
        <section className='flex m-auto relative top-60 max-w-7xl flex-wrap'>
            <h2 className='text-3xl text-left font-semibold ml-3'>Datos básicos</h2>
            <div>
              <InputComponent placeholder='Nombre' labelText='Nombre'/>
            </div>
            <InputComponent placeholder='Nombre' labelText='Nombre'/>
            <InputComponent placeholder='Nombre' labelText='Nombre'/>
        </section>
    )
}

export {HeaderInfo}