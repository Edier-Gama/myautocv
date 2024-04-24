interface ButtonProps {
  text: any
  callback: any
  functionParams: any
}

const AddSectionButton = (props: any) => {
  const { text, callback, functionParams } = props
  return (
        <button
          onClick={() => callback(functionParams)}
          type="button"
          className="w-96 rounded-xl justify-center font-sans text-sm text-gray-900 bg-white hover:bg-gray-100
          border border-gray-400 font-medium px-5 py-2.5 text-center inline-flex items-center">
          {text}
        </button>
  )
}

export { AddSectionButton }
