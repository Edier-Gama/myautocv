export const optionsInitialDate = {
  title: 'Fecha de Inicio',
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
  datepickerClassNames: 'w-96 relative ml-10 -top-64',
  defaultDate: new Date('2024-05-05'),
  language: 'en',
  disabledDates: [],
  weekDays: ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa', 'Do'],
  inputNameProp: 'date',
  inputIdProp: 'date',
  inputPlaceholderProp: 'Seleccionar'
}
