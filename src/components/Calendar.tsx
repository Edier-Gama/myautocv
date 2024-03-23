/* eslint-disable no-tabs */
/* eslint-disable react/react-in-jsx-scope */

import Datepicker from 'tailwind-datepicker-react'
import { useState } from 'react'

const options = {
  title: 'Fecha de inicio',
  autoHide: true,
  todayBtn: false,
  clearBtn: true,
  clearBtnText: 'Clear',
  maxDate: new Date('2030-01-01'),
  minDate: new Date('1950-01-01'),
  icons: {
    prev: () => <span>Back</span>,
    next: () => <span>Next</span>
  },
  datepickerClassNames: 'font-sans ml-10',
  language: 'en',
  disabledDates: [],
  weekDays: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
  inputNameProp: 'date',
  inputIdProp: 'date',
  inputPlaceholderProp: 'Fecha de inicio'
}

const CalendarStartAndFinish = (): any => {
  const [show, setShow] = useState(false)
  const handleChange = (selectedDate: Date): any => {
    console.log(selectedDate)
  }
  const handleClose = (state: boolean): any => {
    setShow(state)
  }

  return (
		<div className='font-sans m-3 w-96'>
			<Datepicker options={options} onChange={handleChange} show={show} setShow={handleClose} classNames='font-sans'/>
		</div>
  )
}

export { CalendarStartAndFinish }
