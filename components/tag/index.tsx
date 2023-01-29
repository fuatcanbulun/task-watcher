import { TagContainer } from "./style";
import { ITag } from "@/utils/interfaces/tag";

const Tag = ({ label, color }: ITag) => {
  return (
    <TagContainer label={label} color={color}>
      {label}
    </TagContainer>
  );
};

export default Tag;
