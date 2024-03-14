import { TextArea } from "@/components/textareacomponents"

function AboutInfo() {
    return (
        <section className='flex m-auto relative top-60 max-w-7xl flex-wrap mt-10'>
            <div className="flex flex-col">
               <p className='text-xl text-left font-semibold ml-3'>Describe tu perfil profesional</p>
               <TextArea placeholder='+15 años de experiencia. Ingeniero de Software. Especializado en el desarrollo de aplicaciones web únicas de la Universidad Nacional de Colombia'/>
            </div>
            <div className='flex flex-col'>
               <p className='text-xl text-left font-semibold ml-3'>Describe tu perfil personal</p>
               <TextArea placeholder='Me llamo Miguel Ángel pero mis amigos me llaman midu. Empecé en la programación con un Amstrad, tenía 10 años. Actualmente estoy liderando equipos de desarrollo en multinacionales.'/>
            </div>
        </section>
    )
}

export {AboutInfo}