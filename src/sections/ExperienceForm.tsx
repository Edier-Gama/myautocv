'use client'
/* eslint-disable react/react-in-jsx-scope */

import { InputComponent } from '@/components/Input'
import { CalendarStartAndFinish } from '@/components/Calendar'
import { TextArea } from '@/components/textarea'
import { FormLabel } from '@chakra-ui/react'
import { useAddExperience, useCancelExperience } from '@/lib/use-add-experience'
import { ButtonWithLogo } from '@/components/Button'
import { useState } from 'react'
import { addExperience } from '@/lib/add-experience'
import { Experience } from './Experience'

function ExperienceComponent (): any {
  const useExperienceAdd = useAddExperience()
  const useExperienceCancel = useCancelExperience()
  const [hasExperience, setHasExperience] = useState(false)
  const toggleExperience = useExperienceAdd.toggleAddExperience
  const cancelExperience = useExperienceCancel.cancelExperience
  const [experience, setExperience] = useState(false)

  return (
    <section className='flex m-auto flex-col relative top-96 mt max-w-7xl flex-wrap' id='add-experience-form'>
        <div>
           <p className='text-xl text-left font-semibold ml-3'>Experiencia Laboral</p>
        </div>
    <div className='flex flex-wrap flex-col'>
        {!hasExperience && (
        <div className='m-3 w-60 add-experience-button'>
          <ButtonWithLogo
              text='Añadir nueva educación'
              callback={toggleExperience}
              callBackData={setHasExperience}
            />
        </div>
        )}
        {
            hasExperience && (
              <section>
                  {experience && (
                    <Experience/>
                  )}
                  <section id='add-experience' className='flex flex-wrap'>
                   <InputComponent
                      placeholder='Empresa'
                      labelText='Nombre de la empresa'
                    />
                   <InputComponent
                      placeholder='Cargo'
                      labelText='Cargo'
                    />
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
                    <div className='w-96 m-3 add-button' onClick={ () => cancelExperience(setHasExperience)}>
                      <ButtonWithLogo
                         text='Añadir'
                         callback={addExperience}
                         callBackData={setExperience}
                      />
                    </div>
                    <div className='w-96 m-3'>
                      <ButtonWithLogo
                         text='Cancelar'
                         callback={cancelExperience}
                         callBackData={setHasExperience}
                      />
                    </div>
                  </div>
                </section>
            )
        }
    </div>
</section>
  )
}

export { ExperienceComponent }
