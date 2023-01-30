import {
  SelectInputContainer,
  SelectInputLabel,
  SelectInputField,
  SelectInputIcon,
} from "./style";
import { ISelectInput } from "@/utils/interfaces/selectInput";
import Icon from "@/components/icon";

const SelectInput = ({
  label,
  value,
  defaultOption,
  icon,
  onChange,
}: ISelectInput) => {
  return (
    <SelectInputContainer>
      {label && <SelectInputLabel>{label}</SelectInputLabel>}
      {icon && (
        <SelectInputIcon>
          {icon && <Icon data={icon} size="xs" color="black" />}
        </SelectInputIcon>
      )}
      <SelectInputField
        value={value}
        placeholderPosition={icon ? "30px" : "0px"}
        onChange={(e) => onChange(e.target.value)}
      >
        {defaultOption && <option value="">{defaultOption}</option>}

        <option value="urgent">Urgent</option>
        <option value="regular">Regular</option>
        <option value="trivial">Trivial</option>
      </SelectInputField>
    </SelectInputContainer>
  );
};

export default SelectInput;
