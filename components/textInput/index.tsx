import {
  TextInputContainer,
  TextInputLabel,
  TextInputField,
  TextInputIcon,
} from "./style";
import { ITextInput } from "@/utils/interfaces/textInput";
import Icon from "@/components/icon";

const TextInput = ({ label, value, icon, onChange, disabled }: ITextInput) => {
  return (
    <TextInputContainer>
      {label && <TextInputLabel>{label}</TextInputLabel>}
      {icon && (
        <TextInputIcon>
          {icon && <Icon data={icon} size="xs" color="black" />}
        </TextInputIcon>
      )}
      <TextInputField
        maxlength="10"
        disabled={disabled}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </TextInputContainer>
  );
};

export default TextInput;
