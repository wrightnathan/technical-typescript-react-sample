import { MouseEvent } from "react";
import styled from "@emotion/styled";
import { HTMLProps } from "react";

const darkgray = "rgb(50, 50, 50);";
const blueBackground = "rgb(0,120,255);";

const commonButtonStyles = {
  width: "15rem",
  padding: "1.2rem 0",
  borderRadius: "4rem",
  borderWidth: "2.5px", // intentionally not using rem
  borderStyle: "solid",
  fontSize: "1.8rem",
  fontWeight: 600,

  ":hover:enabled": {
    cursor: "pointer",
  },

  ":focus:enabled": {
    boxShadow: "0 0 0 0.25rem lightgray",
  },

  // could style active also
};

const SecondaryButton = styled("button")(
  (props: HTMLProps<HTMLButtonElement>) => {
    return {
      ...commonButtonStyles,
      borderColor: darkgray,
      color: darkgray,
      backgroundColor: "transparent",
    };
  }
);

const PrimaryButton = styled("button")(
  (props: HTMLProps<HTMLButtonElement>) => {
    return {
      ...commonButtonStyles,
      borderColor: "transparent",
      color: "white",
      backgroundColor: blueBackground,
      // could style for disabled
    };
  }
);

const ButtonWrapper = styled.div({
  display: "flex",
  justifyContent: "space-between",
  marginTop: "2rem",
});

interface ButtonsProps {
  // Note: disabling buttons is questionable UX
  primaryEnabled: boolean;
  handleCancel: (event: MouseEvent<HTMLButtonElement>) => void;
  // primary click handled by form submit
}

const Buttons = ({ primaryEnabled, handleCancel }: ButtonsProps) => {
  return (
    <ButtonWrapper>
      <SecondaryButton onClick={handleCancel}>Skip</SecondaryButton>
      <PrimaryButton type="submit" disabled={!primaryEnabled}>
        Submit
      </PrimaryButton>
    </ButtonWrapper>
  );
};

export default Buttons;
