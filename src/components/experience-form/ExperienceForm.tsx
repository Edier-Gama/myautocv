'use client'
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable react/react-in-jsx-scope */
import { FormLabel, Input, Textarea } from '@chakra-ui/react'
import { useAddExperience, useCancelExperience } from '@/components/experience-form/use-add-experience'
import { ButtonWithLogo } from '@/components/Button'
import { useState } from 'react'
import { AddSectionButton } from '../add-section-button'
import { Experience } from '@/sections/Experience'
import { addExperience } from '@/components/experience-form/add-experience'
import Datepicker from 'tailwind-datepicker-react'
import { optionsInitialDate } from './options-initial-date'
import { optionsFinishDate } from './options-finish-date'
import { experienceIcon } from '@/consts/experiece-icon'

function ExperienceForm (): any {
  // Funciones para manejar eventos en los formularios
  const [hasExperience, setHasExperience] = useState(false)
  const useExperienceAdd = useAddExperience()
  const useExperienceCancel = useCancelExperience()
  const toggleExperience = useExperienceAdd.toggleAddExperience
  const cancelExperience = useExperienceCancel.cancelExperience

  // Estados de los inputs

  const [company, setCompany]: any = useState()
  const [charge, setCharge]: any = useState()
  const [jobDescription, setJobDescription]: any = useState('')
  const [initialDate, setInitialDate]: any = useState()
  const [finishDate, setFinishDate]: any = useState()

  const [showInitialDate, setShowInitialDate]: any = useState(false)
  const [showFinishDate, setShowFinishDate]: any = useState(false)

  const handleChangeInitDate = (selectedInitDate: Date) => {
    setInitialDate(selectedInitDate)
    console.log(initialDate)
  }
  const handleCloseInitialDate = (state: boolean) => {
    setShowInitialDate(state)
  }
  const handleChangeFinishDate = (selectedFinishDate: Date) => {
    setFinishDate(selectedFinishDate)
    console.log(finishDate)
  }
  const handleCloseFinishDate = (state: boolean) => {
    setShowFinishDate(state)
  }
  const minCaracteres = 160
  return (
    <section className='justify-center flex m-auto flex-col relative top-96 mt max-w-4xl flex-wrap' id='add-experience-form'>
        <div className='flex items-center m-3 mb-10'>
           {experienceIcon}
           <h2 className='text-3xl font-sans font-bold p-3'>Experiencia Laboral</h2>
        </div>
    <div className='flex flex-wrap flex-col'>
      <div className='flex flex-col max-w-4xl'>
        <Experience/>
      </div>
        {!hasExperience && (
        <div className='m-3 w-60 add-experience-button mt-10'>
          <ButtonWithLogo
              text='Añadir experiencia'
              callback={toggleExperience}
              callBackData={setHasExperience}
            />
        </div>
        )}
        {
            hasExperience && (
              <section id='add-experience'>
                  <section className='flex flex-wrap mt-10'>
                    <div className='flex flex-col w-96 m-3 '>
                    <FormLabel className='font-sans text-xl m-3'>Nombre de la empresa</FormLabel>
                    <Input
                      height={'50px'} fontSize={'17px'}
                      onChange={(event) => { setCompany(event.target.value) }}
                      type="text"
                      placeholder='Empresa'
                      className='rounded'/>
                    </div>
                    <div className='flex flex-col w-96 m-3 '>
                    <FormLabel className='font-sans text-xl m-3'>Cargo</FormLabel>
                    <Input
                      height={'50px'} fontSize={'17px'}
                      onChange={(event) => { setCharge(event.target.value) }}
                      type="text"
                      placeholder='Cargo'
                      className='rounded'/>
                    </div>
                    <div className='flex flex-col w-96 m-3 '>
                        <FormLabel className='font-sans text-xl'>Fecha de Inicio</FormLabel>
                        <Datepicker
                           options={optionsInitialDate}
                           onChange={handleChangeInitDate}
                           show={showInitialDate}
                           setShow={handleCloseInitialDate}
                           classNames='font-sans w-96'
                        />
                    </div>
                    <div className='flex flex-col w-96 m-3 '>
                        <FormLabel className='font-sans text-xl'>Fecha de finalización</FormLabel>
                        <Datepicker
                           options={optionsFinishDate}
                           onChange={handleChangeFinishDate}
                           show={showFinishDate}
                           setShow={handleCloseFinishDate}
                           classNames='font-sans w-96'
                        />
                    </div>
                  </section>
                  <section className='flex flex-wrap max-w-4xl'>
                  <div className='flex flex-col max-w-4xl'>
                  <FormLabel className='font-sans text-xl m-3'>Describe las responsabilidades del cargo, logros, metas y premios</FormLabel>
                  <Textarea
                      minLength={87}
                      onChange={(event) => { setJobDescription(event.target.value) }}
                      height={'200px'}
                      width={'790px'}
                      placeholder='Liderar equipos. Hacer mantenimiento a bases de datos hechas en SQL. Crear diseños innovadores para la empresa ...'
                      className='m-3 max-w-96 md:max-w-4xl resize-none rounded'>
                  </Textarea>
                 </div>
                  </section>
                  <div className='flex flex-wrap'>
                    {
                      company && charge && jobDescription.length > 160 && initialDate && finishDate && (
                         <div className='w-60 m-3 add-button'>
                           <AddSectionButton
                             classList="w-60 rounded-xl justify-center font-sans text-xl text-white bg-blue-600 hover:bg-blue-500
                             border border-gray-400 font-medium px-5 py-2.5 text-center inline-flex items-center"
                             text='Añadir'
                             callback={addExperience}
                             functionParams={{ company, charge, jobDescription, initialDate, finishDate, setHasExperience }}
                         />
                         </div>
                      )
                    }
                    <div className='w-60 m-3'>
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

export { ExperienceForm }
