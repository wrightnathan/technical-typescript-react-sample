import React from "react"

type FormInputProps = {
  label: string
  name: string
  changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const FormInput = ({
  label,
  name,
  changeHandler,
}: FormInputProps) => {
  return (
    <input
      name={name}
      placeholder={label}
      onChange={changeHandler}
      style={{
        padding: "12px 20px",
        margin: "8px 0",
        borderRadius: "8px",
        border: "solid 1px #ccc",
        fontSize: "16px",
      }}
    />
  )
}

export default FormInput
