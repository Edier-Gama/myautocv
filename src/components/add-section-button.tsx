interface ButtonProps {
  text: string
  callback: any
  functionParams: any
  classList?: string
}

const AddSectionButton = (props: ButtonProps) => {
  const { text, callback, functionParams, classList } = props
  return (
        <button
          onClick={() => callback({ functionParams })}
          type="button"
          className={classList}>
          {text}
        </button>
  )
}

export { AddSectionButton }
