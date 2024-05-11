'use client'

/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { HeaderInfo } from '@/sections/HeaderInfo'
import { Experience } from '@/sections/Experience'
import { Education } from '@/sections/Education'
import { experienceIcon } from '@/consts/experiece-icon'
import { usePDF } from 'react-to-pdf'
import { UserCurriculum } from '@/app/download/cv-components/user-cv'
import { Button } from '@chakra-ui/react'

export default function Download () {
  const { toPDF, targetRef } = usePDF({ filename: 'page.pdf' })

  return (
    <main className='max-w-96 m-auto p-3 md:max-w-4xl'>
      <Button
          onClick={() => { toPDF() }}
          className='btn btn-primary mt-20 cursor-pointer m-3'>
          Descarga tu CV
      </Button>
      <section ref={targetRef} className='p-5'>
        <UserCurriculum/>
      </section>
    </main>
  )
}
