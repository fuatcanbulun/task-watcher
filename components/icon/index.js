import { IconContainer } from "./style";
import {
  AiOutlinePlus,
  AiOutlineSearch,
  AiOutlineEdit,
  AiOutlineDelete,
  AiOutlineExclamationCircle,
} from "react-icons/ai";

const icons = {
  AiOutlineSearch: (size, color) => {
    return <AiOutlineSearch size={size} color={color} />;
  },
  AiOutlinePlus: (size, color) => {
    return <AiOutlinePlus size={size} color={color} />;
  },
  AiOutlineEdit: (size, color) => {
    return <AiOutlineEdit size={size} color={color} />;
  },
  AiOutlineDelete: (size, color) => {
    return <AiOutlineDelete size={size} color={color} />;
  },
  AiOutlineExclamationCircle: (size, color) => {
    return <AiOutlineExclamationCircle size={size} color={color} />;
  },
};

const sizes = {
  xs: 20,
  sm: 30,
  md: 40,
  lg: 50,
};

const Icon = ({ data, size, color }) => {
  return (
    <IconContainer color={color}>
      {icons[data](sizes[size], color)}
    </IconContainer>
  );
};

export default Icon;
