const options = {
  title: 'Selecciona una fecha',
  autoHide: true,
  todayBtn: false,
  clearBtn: true,
  clearBtnText: 'Clear',
  maxDate: new Date('2030-01-01'),
  minDate: new Date('1950-01-01'),
  // theme: {
  //   background: 'bg-white',
  //   todayBtn: '',
  //   clearBtn: '',
  //   icons: '',
  //   text: 'Onest Variable',
  //   input: '',
  //   inputIcon: '',
  //   selected: ''
  // },
  icons: {
    prev: () => <span>Back</span>,
    next: () => <span>Next</span>
  },
  datepickerClassNames: 'font-sans ml-10 mt-60 md:mt-1',
  language: 'en',
  disabledDates: [],
  weekDays: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
  inputNameProp: 'date',
  inputIdProp: 'date',
  inputPlaceholderProp: 'Fecha de inicio'
  // inputDateFormatProp: {
  //   day: 'numeric',
  //   month: 'long',
  //   year: 'numeric'
  // }
}

export { options }
