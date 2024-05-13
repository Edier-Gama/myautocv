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
  // function downloadPDF (): any {
  //   setTimeout(() => {
  //     toPDF()
  //     router.push('/')
  //   }, 1000)
  // }
  // downloadPDF()
  return (
    <>
      <div className='flex flex-col justify-center items-center mt-52 m-3'>
        <h2 className="text-4xl font-sans font-bold ">Gracias por usar MyAutoCV 🌸</h2>
        <p className="text-xl mt-5">Tu CV se está descargando en estos momentos ...</p>
      </div>
      <section ref={targetRef} className='p-5 max-w-7xl'>
        <UserCurriculum/>
      </section>
    </>
  )
}
