'use client'
/* eslint-disable react/react-in-jsx-scope */

import { InputComponent } from '@/components/Input'
import { TextArea } from '@/components/textarea'
import { FormLabel } from '@chakra-ui/react'
import { useAddEducation, useCancelEducation } from '@/components/education-form/use-add-education'

import { useState } from 'react'
import { ButtonWithLogo } from '@/components/Button'

function EducationForm (): any {
  const useEducationAdd = useAddEducation()
  const useEducationCancel = useCancelEducation()
  const [hasEducation, setHasEducation] = useState(false)
  const toggleEducation = useEducationAdd.toggleAddEducation
  const cancelEducation = useEducationCancel.cancelEducation
  return (
    <section className='flex m-auto flex-col relative top-96 max-w-7xl flex-wrap' id='add-education-form'>
        <div className='mt-10'>
           <p className='text-xl text-left font-semibold ml-3'>Educación</p>
        </div>
    <div className='flex flex-wrap flex-col'>
        {!hasEducation && (
        <div className='m-3 w-60 add-education-button'>
           <ButtonWithLogo
              text='Añadir nueva educación'
              callback={toggleEducation}
              callBackData={setHasEducation}
            />
        </div>
        )}
        {
            hasEducation && (
                <section>
                  <section id='add-education' className='flex flex-wrap'>
                   <InputComponent placeholder='Institución' labelText='Nombre de la institución'/>
                   <InputComponent placeholder='Título' labelText='¿Qué estudiaste?'/>
                  </section>
                  <section className='flex flex-wrap max-w-5xl'>
                      <TextArea
                         classList='m-3 w-96'
                         placeholder='Obtuve becas académicas por destacado rendimiento en matemáticas y ciencias. Presenté ponencias en conferencias universitarias sobre avances en neurociencia cognitiva...'
                         labelText='Describe tus logros, premios y actividades'
                      />
                      <div className='flex flex-col'>
                        <FormLabel className='font-sans text-xl m-3'>Fecha de inicio</FormLabel>
]                      <div className='flex flex-col'>
                        <FormLabel className='font-sans text-xl m-3'>Fecha de finalización</FormLabel>
                      </div>
                      </div>
                  </section>
                  <div className='flex flex-wrap'>
                    <div className='w-96 m-3'>
                      <ButtonWithLogo
                         text='Añadir'
                      />
                    </div>
                    <div className='w-96 m-3'>
                      <ButtonWithLogo
                         text='Cancelar'
                         callback={cancelEducation}
                         callBackData={setHasEducation}
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

export { EducationForm }
