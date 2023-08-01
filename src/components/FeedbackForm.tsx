import { useState, FormEvent, MouseEvent, useEffect, useRef } from "react";
import styled from "@emotion/styled";
import RatingRadioList from "./RatingRadioList";
import Buttons from "./Buttons";
import Labels from "./Labels";

const Form = styled("form")({
  width: "100%",
  textAlign: "center",
});

const HeaderText = styled.h1({
  fontSize: "2.8rem",
  fontWeight: 600,
  marginBottom: ".8rem",
});

const DescriptionText = styled.p({
  fontSize: "1.8rem",
  fontWeight: 400,
});

const FeedbackForm = () => {
  const [rating, setRating] = useState<string>("");
  const formContainerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (formContainerRef.current) {
      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          setRating("");
        }
      };
      formContainerRef.current.addEventListener("keydown", handleEscape);
      return formContainerRef.current.removeEventListener(
        "keydown",
        () => handleEscape
      );
    }
  }, [formContainerRef]);

  const buttonEnabled = rating.length > 0;
  // useCallback could be used here to memoize these functions
  const handleCancel = (event: MouseEvent<HTMLButtonElement>) => {
    // not sure what to do, so just stop propagation and clear rating
    event.stopPropagation();
    setRating("");
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.stopPropagation();
    console.log(`rating was ${rating}`);
  };

  return (
    <FormContainer ref={formContainerRef}>
      <HeaderText>We love to hear your feedback!</HeaderText>
      <DescriptionText>
        On a scale of 1-5, how likely are you to recommend this service?
      </DescriptionText>
      <Form onSubmit={handleSubmit}>
        <RatingRadioList selectedItem={rating} onItemSelected={setRating} />
        <Labels />
        <Buttons primaryEnabled={buttonEnabled} handleCancel={handleCancel} />
      </Form>
    </FormContainer>
  );
};

export default FeedbackForm;

const FormContainer = styled("div")({
  padding: "4rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#fff",
  // height: "50vh", // removed to allow for vertical expansion
  borderRadius: ".8rem",
  boxShadow: "0 0 8px 0 rgba(0,0,0,0.2)",
  justifyContent: "flex-start",
  width: "50rem",
});
