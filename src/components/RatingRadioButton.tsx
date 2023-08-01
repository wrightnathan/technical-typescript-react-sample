import { HTMLProps } from "react";
import styled from "@emotion/styled";

type RadioButtonProps = HTMLProps<HTMLInputElement>;

//TODO: figure out how to style based on checked state and focus/active state
const RadioButton = styled.input((props: RadioButtonProps) => ({
  appearance: "none",
  borderRadius: "100%",
  borderWidth: 0,
  backgroundColor: props.checked ? "turquoise" : "buttonface",
  width: "7rem",
  height: "7rem",
  textAlign: "center",
  fontSize: "2rem",
  color: props.checked ? "black" : "darkgray",

  ":focus": {
    outline: "none",
  },

  ":hover": {
    cursor: "pointer",
  },
}));

interface RatingRadioButtonProps {
  value: string;
  selectedItem: string;
  onItemSelected: (item: string) => void;
}
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  // required prevent warning, but do nothing
};
const RatingRadioButton = ({
  value,
  selectedItem,
  onItemSelected,
}: RatingRadioButtonProps) => {
  return (
    <RadioButton
      value={value}
      checked={selectedItem === value}
      onClick={onItemSelected.bind(null, value)}
      onChange={handleChange}
    />
  );
};

export default RatingRadioButton;
