import { useState, FormEvent } from "react";
import styled from "@emotion/styled";

const onSubmit = (e: FormEvent<HTMLFormElement>) => {
  console.log(e);
  console.log(e.currentTarget.elements);
};

const Input = styled("input")({
  width: "100%",
  padding: "8px",
  borderRadius: "4px",
  border: "1px solid #ccc",
});

const Select = styled("select")({
  width: "100%",
  padding: "8px",
  borderRadius: "4px",
  border: "1px solid #ccc",
  marginTop: "8px",
  //** for the dropdown indicator:
  //    https://stackoverflow.com/a/70655732
  appearance: "none",
  backgroundImage:
    "url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e\")",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right 0.5rem center",
  backgroundSize: "1em",
});

const Button = styled("button")({
  width: "100%",
  padding: "8px",
  borderRadius: "4px",
  border: "1px solid #ccc",
  marginTop: "8px",
});

const Form = styled("form")({
  width: "400px",
  textAlign: "center",
  marginTop: "40px",
  fontSize: "24px",
  fontWeight: 600,
});

const FeedbackForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState("");

  return (
    <FormContainer>
      <img src="./logo_glyph.png" alt="logo" />

      <Form
        onSubmit={onSubmit}
      >
        <Input
          placeholder="Name"
          value={name}
          onInput={(e) => setName(e.currentTarget.value)}
        />
        <Input
          placeholder="Email"
          value={email}
          onInput={(e) => setEmail(e.currentTarget.value)}
        />
        <Select
          onChange={(e) => setRating(e.currentTarget.value)}
          value={rating}
        >
          <option value="">Select rating</option>
          <option value="1">1 star</option>
          <option value="2">2 stars</option>
        </Select>
        <Button
          type="submit"
        >
          Submit
        </Button>
      </Form>
    </FormContainer>
  );
};

export default FeedbackForm;

const FormContainer = styled("div")({
  padding: "40px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#fff",
  // height: "50vh", // removed to allow for vertical expansion
  borderRadius: "8px",
  boxShadow: "0 0 8px 0 rgba(0,0,0,0.2)",
  justifyContent: "flex-start",
});
