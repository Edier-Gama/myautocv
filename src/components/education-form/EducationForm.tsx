'use client'
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable react/react-in-jsx-scope */
import { FormLabel, Input, Textarea } from '@chakra-ui/react'
import { ButtonWithLogo } from '@/components/Button'
import { useState } from 'react'
import { useAddEducation, useCancelEducation } from './use-add-education'
import DatePicker from 'tailwind-datepicker-react'
import { optionsInitialDate } from './options-initial-date'
import { optionsFinishDate } from './options-finish-date'
import { Education } from '@/sections/Education'
import { AddSectionButton } from '../add-section-button'
import { addEducation } from './add-education'

function EducationForm (): any {
  // Funciones para manejar eventos en los formularios
  const useEducationAdd = useAddEducation()
  const useEducationCancel = useCancelEducation()
  const [hasEducation, setHasEducation] = useState(false)
  const toggleEducation = useEducationAdd.toggleAddEducation
  const cancelEducation = useEducationCancel.cancelEducation

  const [showInitialDate, setShowInitialDate]: any = useState(false)
  const [showFinishDate, setShowFinishDate]: any = useState(false)
  const [initialDate, setInitialDate]: any = useState()
  const [finishDate, setFinishDate]: any = useState()

  const handleChangeInitDate = (selectedInitDate: any) => {
    setInitialDate(selectedInitDate)
  }
  const handleCloseInitialDate = (state: boolean) => {
    setShowInitialDate(state)
  }
  const handleChangeFinishDate = (selectedFinishDate: any) => {
    setFinishDate(selectedFinishDate)
  }
  const handleCloseFinishDate = (state: boolean) => {
    setShowFinishDate(state)
  }
  const [name, setName]: any = useState()
  const [title, setTitle]: any = useState()
  const [description, setDescription]: any = useState()
  return (
    <section className='justify-center flex m-auto flex-col relative top-96 mt max-w-4xl flex-wrap' id='add-education-form'>
    <div className='flex items-center m-3 mb-10'>
        <h2 className='text-4xl font-sans font-bold p-3'>Educación</h2>
    </div>
    <div className='flex flex-wrap flex-col'>
        <div className='flex flex-col max-w-4xl'>
            <Education/>
        </div>
    </div>
    {!hasEducation && (
        <div className='m-3 w-60 add-education-button mt-10'>
            <ButtonWithLogo
                text='Añadir educación'
                callback={toggleEducation}
                callBackData={setHasEducation}
            />
        </div>
    )}
    {hasEducation && (
        <section id='add-education'>
            <section className='flex flex-wrap mt-10'>
                <div className='flex flex-col w-96 m-3 '>
                    <FormLabel className='font-sans text-xl m-3'>Nombre de la institución</FormLabel>
                    <Input
                        height={'50px'} fontSize={'17px'}
                        onChange={(event) => { setName(event.target.value) }}
                        type="text"
                        placeholder='Universidad Nacional'
                        className='rounded'/>
                </div>
                <div className='flex flex-col w-96 m-3 '>
                    <FormLabel className='font-sans text-xl m-3'>Título</FormLabel>
                    <Input
                        height={'50px'} fontSize={'17px'}
                        onChange={(event) => { setTitle(event.target.value) }}
                        type="text"
                        placeholder='Ingeniero Mecánico'
                        className='rounded'/>
                </div>
                <div className='flex flex-col w-96 m-3 '>
                    <FormLabel className='font-sans text-xl'>Fecha de Inicio</FormLabel>
                    <DatePicker
                        options={optionsInitialDate}
                        onChange={handleChangeInitDate}
                        show={showInitialDate}
                        setShow={handleCloseInitialDate}
                        classNames='font-sans w-96'
                    />
                </div>
                <div className='flex flex-col w-96 m-3 '>
                    <FormLabel className='font-sans text-xl'>Fecha de finalización</FormLabel>
                    <DatePicker
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
                        onChange={(event) => { setDescription(event.target.value) }}
                        height={'200px'}
                        width={'790px'}
                        placeholder='Liderar equipos. Hacer mantenimiento a bases de datos hechas en SQL. Crear diseños innovadores para la empresa ...'
                        className='m-3 max-w-96 md:max-w-4xl resize-none rounded'>
                    </Textarea>
                </div>
            </section>
            <div className='flex flex-wrap'>
                {name && title && description && initialDate && finishDate && (
                    <div className='w-60 m-3 add-button'>
                        <AddSectionButton
                            classList="w-60 rounded-xl justify-center font-sans text-xl text-white bg-blue-600 hover:bg-blue-500 border border-gray-400 font-medium px-5 py-2.5 text-center inline-flex items-center"
                            text='Añadir'
                            callback={addEducation}
                            functionParams={{ name, title, description, initialDate, finishDate, setHasEducation }}
                        />
                    </div>
                )}
                <div className='w-60 m-3'>
                    <ButtonWithLogo
                        text='Cancelar'
                        callback={cancelEducation}
                        callBackData={setHasEducation}
                    />
                </div>
            </div>
        </section>
    )}
</section>
  )
}

export { EducationForm }
