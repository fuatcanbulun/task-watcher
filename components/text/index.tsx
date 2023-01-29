import { TextContainer } from "./style";
import { IText } from "@/utils/interfaces/text";

const Text = ({ label, size, weight, align }: IText) => {
  return (
    <TextContainer size={size} weight={weight} align={align}>
      {label}
    </TextContainer>
  );
};

export default Text;
