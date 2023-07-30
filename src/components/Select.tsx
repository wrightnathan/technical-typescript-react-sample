import styled from "@emotion/styled";

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

export default Select;
