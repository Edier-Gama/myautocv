interface ButtonProps {
  svg?: any
  text: any
  callback?: any
  callBackData?: any
}

const ButtonWithLogo = (props: ButtonProps) => {
  const svg = props.svg
  const text = props.text
  const callback = props.callback
  const data = props.callBackData
  return (
      <button
        onClick={() => callback(data)}
        type="button"
        className="w-96 rounded-xl justify-center font-sans text-sm text-gray-900 bg-white hover:bg-gray-100
        border border-gray-400 font-medium px-5 py-2.5 text-center inline-flex items-center">
        {svg}
        {text}
      </button>
  )
}

export { ButtonWithLogo }
