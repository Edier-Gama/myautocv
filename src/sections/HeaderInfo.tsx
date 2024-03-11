import { InputComponent } from '@/components/Inputcomponents'

function HeaderInfo() {
    return (
        <section>
        <h2 className='text-3xl text-left font-semibold m-5 relative top-60'>Datos básicos</h2>
          <section className='flex m-auto relative top-60 w-7xl flex-wrap'>
               <div className='max-w-96 w-11/12'>
                 <InputComponent placeholder='Nombre' labelText='Nombre'/>
               </div>
               <div className='max-w-96 w-11/12'>
                 <InputComponent placeholder='Nombre' labelText='Nombre'/>
               </div>
               <div className='max-w-96 w-11/12'>
                 <InputComponent placeholder='Nombre' labelText='Nombre'/>
               </div>  
          </section>
        </section>
    )
}

export {HeaderInfo}