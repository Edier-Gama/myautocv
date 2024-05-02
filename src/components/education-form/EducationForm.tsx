'use client'
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable react/react-in-jsx-scope */
import { FormLabel } from '@chakra-ui/react'
import { ButtonWithLogo } from '@/components/Button'
import { useState } from 'react'
import { useAddEducation, useCancelEducation } from './use-add-education'

function EducationForm (): any {
  // Funciones para manejar eventos en los formularios
  const useEducationAdd = useAddEducation()
  const useEducationCancel = useCancelEducation()
  const [hasEducation, setHasEducation] = useState(false)
  const toggleEducation = useEducationAdd.toggleAddEducation
  const cancelEducation = useEducationCancel.cancelEducation

  return (
    <section className='flex m-auto flex-col relative top-96 mt max-w-4xl flex-wrap' id='add-education-form'>
        <div>
           <p className='text-xl text-left font-semibold ml-3 mt-10'>Educación</p>
        </div>
    <div className='flex flex-wrap flex-col'>
        {!hasEducation && (
        <div className='m-3 w-60 add-education-button'>
          <ButtonWithLogo
              text='Añadir educación'
              callback={toggleEducation}
              callBackData={setHasEducation}
            />
        </div>
        )}
        {
            hasEducation && (
              <section id='add-education'>
                  <section className='flex flex-wrap'>
                    <div className='flex flex-col'>
                    <FormLabel className='font-sans text-xl m-3'>Nombre de la institución</FormLabel>
                    <input
                      type="text"
                      placeholder='Institución'
                      className='w-96 m-3 rounded'>
                    </input>
                    </div>
                    <div className='flex flex-col'>
                    <FormLabel className='font-sans text-xl m-3'>¿Qué estudiaste?</FormLabel>
                    <input
                      type="text"
                      placeholder='Título o certificado'
                      className='w-96 m-3 rounded'>
                    </input>
                    </div>
                  </section>
                  <section className='flex flex-wrap max-w-5xl'>
                    <div className='flex flex-col'>
                      <FormLabel className='font-sans text-xl m-3'>Describe tus logros, premios y actividades</FormLabel>
                      <textarea
                         placeholder='Obtuve becas académicas por destacado rendimiento en matemáticas y ciencias. Presenté ponencias en conferencias universitarias sobre avances en neurociencia cognitiva...'
                         className='m-3 w-96 resize-none rounded'>
                      </textarea>
                    </div>
                    <div className='flex flex-col'>
                      <FormLabel className='font-sans text-xl m-3'>Habilidades aprendidas</FormLabel>
                      <textarea
                         placeholder='Resolución de problemas, Pensamiento crítico, Creatividad, Diseño conceptual, Programación, Diseño gráfico, Análisis de datos, Gestión de proyectos, Comunicación visual...'
                         className='m-3 w-96 resize-none rounded'>
                      </textarea>
                    </div>
                      <div className='flex flex-col'>
                        <FormLabel className='font-sans text-xl m-3'>Duración de los estudios</FormLabel>
                        <input
                           type="text"
                           placeholder='5 años y 2 meses'
                           className='w-96 m-3 rounded'>
                        </input>
                      </div>
                  </section>
                  <div className='flex flex-wrap'>
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
