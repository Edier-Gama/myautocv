'use client'

/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { HeaderInfo } from '@/sections/HeaderInfo'
import { Experience } from '@/sections/Experience'
import { Education } from '@/sections/Education'
import { experienceIcon } from '@/consts/experiece-icon'
import { usePDF } from 'react-to-pdf'
import { UserCurriculum } from '@/app/download/cv-components/user-cv'
import { Button } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'

export default function Download () {
  const { toPDF, targetRef } = usePDF({ filename: 'page.pdf' })
  const router = useRouter()
  function downloadPDF (): any {
    setTimeout(() => {
      toPDF()
      router.push('/')
    }, 1000)
  }
  return (
    <main className='max-w-4xl'>
      <Button
          onClick={downloadPDF()}
          className='btn btn-primary mt-20 cursor-pointer m-3'>
          Revisa tus descargas, Gracias por usar MyAutoCV
      </Button>
      <section ref={targetRef} className='p-5 mt-96'>
        <UserCurriculum/>
      </section>
    </main>
  )
}
