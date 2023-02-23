import styled from "@emotion/styled"


const FeedbackForm = () => {
  return (
    <FormContainer>
      <img src="./logo_glyph.png" alt="logo" />

      <span
        style={{
          width: "400px",
          textAlign: "center",
          marginTop: "60px",
          fontSize: "24px",
          fontWeight: 600,
        }}
      >
        Add your code here!
      </span>
    </FormContainer>
  )
}

export default FeedbackForm

const FormContainer = styled("div")({
  padding: "40px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#fff",
  height: "50vh",
  borderRadius: "8px",
  boxShadow: "0 0 8px 0 rgba(0,0,0,0.2)",
  justifyContent: "flex-start",
})

