import styled from "@emotion/styled";

const Labels = () => {
  const Wrapper = styled.div({
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    padding: "0 .8rem",
  });

  const Label = styled.p({
    textTransform: "uppercase",
    fontSize: "1.2rem",
    margin: 0,
  });

  return (
    <Wrapper>
      <Label>Not Likely</Label>
      <Label>Very Likely</Label>
    </Wrapper>
  );
};

export default Labels;
