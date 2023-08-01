import styled from "@emotion/styled";
import RatingRadioButton from "./RatingRadioButton";

const Wrapper = styled.div({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-between",
  width: "100%",
  padding: ".8rem 0",
  border: "none",
});

interface RatingRadioListProps {
  onItemSelected: (item: string) => void;
  selectedItem: string;
}

const RatingRadioList = ({
  onItemSelected,
  selectedItem,
}: RatingRadioListProps) => {
  return (
    <Wrapper>
      <RatingRadioButton
        value="1"
        selectedItem={selectedItem}
        onItemSelected={onItemSelected}
      />
      <RatingRadioButton
        value="2"
        selectedItem={selectedItem}
        onItemSelected={onItemSelected}
      />
      <RatingRadioButton
        value="3"
        selectedItem={selectedItem}
        onItemSelected={onItemSelected}
      />
      <RatingRadioButton
        value="4"
        selectedItem={selectedItem}
        onItemSelected={onItemSelected}
      />
      <RatingRadioButton
        value="5"
        selectedItem={selectedItem}
        onItemSelected={onItemSelected}
      />
    </Wrapper>
  );
};

export default RatingRadioList;
