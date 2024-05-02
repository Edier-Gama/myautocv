interface ButtonProps {
  text: any
  callback: any
  functionParams: any
}

const AddSectionButton = (props: any) => {
  const { text, callback, functionParams, classList } = props
  const setHasExperience = functionParams?.setHasExperience
  return (
        <button
          onClick={() => callback({ functionParams }, setHasExperience)}
          type="button"
          className={classList}>
          {text}
        </button>
  )
}

export { AddSectionButton }
