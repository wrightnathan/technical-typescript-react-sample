import React from "react"
import styled from "@emotion/styled"

type RatingDropDownProps = {
  label: string
  name: string
  changeHandler: (event: React.ChangeEvent<HTMLSelectElement>) => void
  values: Array<{ value: string; label: string }>
  currentValue: string
}

const RatingDropdown = ({
  label,
  name,
  changeHandler,
  values,
  currentValue,
}: RatingDropDownProps) => {
  return (
    <SelectElement name={name} onChange={changeHandler} value={currentValue}>
      <option value="" disabled>
        Rating
      </option>
      {values.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </SelectElement>
  )
}

export default RatingDropdown

const SelectElement = styled("select")({
  padding: "12px 20px",
  margin: "8px 0",
  borderRadius: "8px",
  border: "solid 1px #ccc",
  fontSize: "16px",
})
