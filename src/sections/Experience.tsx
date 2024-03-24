'use client'
/* eslint-disable react/react-in-jsx-scope */

import { InputComponent } from '@/components/Inputcomponents'
import { CalendarStartAndFinish } from '@/components/Calendarcomponents'
import { TextArea } from '@/components/textareacomponents'
import { Button, FormLabel } from '@chakra-ui/react'
import { useAddExperience, useCancelExperience } from '@/logic/useAddExperiencecomponents'

import { useState } from 'react'

function Experience (): any {
  const useExperienceAdd = useAddExperience()
  const useExperienceCancel = useCancelExperience()
  const [hasExperience, setHasExperience] = useState(false)
  return (
    <section className='flex m-auto flex-col relative top-80 max-w-7xl flex-wrap' id='add-experience-form'>
        <div>
           <p className='text-xl text-left font-semibold ml-3'>Experiencia Laboral</p>
        </div>
    <div className='flex flex-wrap flex-col'>
        {!hasExperience && (
        <div className='m-3 w-60 add-experience-button'>
           <Button
           className='w-80'
           colorScheme='blue'
           onClick={() => useExperienceAdd.toggleAddExperience(setHasExperience)}
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
                         placeholder='Desarrollé una plataforma de noticias geolocalizadas y una API para consumir la información. Escalé los servicios para soportar la carga de más de cientos de miles de peticiones al día ...'
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
                      onClick={() => useExperienceCancel.cancelExperience(setHasExperience)}
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
