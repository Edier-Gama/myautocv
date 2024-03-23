'use client'
/* eslint-disable react/react-in-jsx-scope */

import { InputComponent } from '@/components/Inputcomponents'
import { Button, FormLabel } from '@chakra-ui/react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { CalendarStartAndFinish } from '@/components/Calendarcomponents'
import { TextArea } from '@/components/textareacomponents'

function Experience (): any {
  let addExperienceButton: any
  if (typeof window !== 'undefined') {
    addExperienceButton = document.querySelector('.add-experience-button')
  }
  const [hasExperience, setHasExperience] = useState(false)
  const router = useRouter()

  function toggleAddExperience (): void {
    setHasExperience(!hasExperience)
    router.push('/#add-experience-form')
    addExperienceButton?.classList.add('inactive')
  }

  function cancelExperience (): void {
    setHasExperience(false)
    router.push('/#add-experience-form')
    addExperienceButton?.classList.remove('inactive')
  }
  return (
    <section className='flex m-auto flex-col relative top-80 max-w-7xl flex-wrap' id='add-experience-form'>
        <div>
           <p className='text-xl text-left font-semibold ml-3'>Experiencia Laboral ( Opcional )</p>
        </div>
    <div className='flex flex-wrap flex-col'>
        {!hasExperience && (
        <div className='m-3 w-50 add-experience-button'>
           <Button
           colorScheme='blue'
           onClick={toggleAddExperience}
           >Añadir experiencia laboral
           </Button>
        </div>
        )}
        {
            hasExperience && (
                <section>
                  <section id='add-experience' className='flex flex-wrap'>
                   <InputComponent placeholder='Empresa' labelText='Nombre de la empresa'/>
                   <InputComponent placeholder='Cargo' labelText='Cargo'/>
                  </section>
                  <section className='flex flex-wrap max-w-5xl'>
                      <TextArea
                         classList='m-3 w-96'
                         placeholder='Liderar equipos. Hacer mantenimiento a bases de datos hechas en SQL. Crear diseños innovadores para la empresa ...'
                         labelText='Describe las responsabilidades del cargo'
                      />
                      <TextArea
                         classList='m-3 w-96'
                         placeholder='Fomenté buenas prácticas y mejoras en la cultura de rendimiento, Desarrollé una plataforma de noticias geolocalizadas y una API para consumir la información. Escalé los servicios para soportar la carga de más de cientos de miles de peticiones al día ...'
                         labelText='Describe tus logros, metas, premios'
                      />
                      <div className='flex flex-col'>
                        <FormLabel className='font-sans text-xl m-3'>Fecha de inicio</FormLabel>
                        <CalendarStartAndFinish/>
                      </div>
                      <div className='flex flex-col'>
                        <FormLabel className='font-sans text-xl m-3'>Fecha de finalización</FormLabel>
                        <CalendarStartAndFinish/>
                      </div>
                  </section>
                  <div className='flex flex-wrap'>
                  <Button
                      className='m-3'
                      colorScheme='blue'
                      >Añadir
                  </Button>
                  <Button
                      className='m-3'
                      colorScheme='blue'
                      onClick={cancelExperience}
                      >Cancelar
                  </Button>
                  </div>
                </section>
            )
        }
    </div>
</section>
  )
}

export { Experience }
