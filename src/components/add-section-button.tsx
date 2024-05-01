interface ButtonProps {
  text: any
  callback: any
  functionParams: any
}

const AddSectionButton = (props: any) => {
  const { text, callback, functionParams } = props
  console.log(functionParams)
  const setHasExperience = functionParams.setHasExperience
  return (
        <button
          onClick={() => callback({ functionParams }, setHasExperience)}
          type="button"
          className="w-96 rounded-xl justify-center font-sans text-sm text-white bg-blue-600 hover:bg-blue-500
          border border-gray-400 font-medium px-5 py-2.5 text-center inline-flex items-center">
          {text}
        </button>
  )
}

export { AddSectionButton }
