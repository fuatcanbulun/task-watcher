import { ButtonContainer, ButtonIcon, ButtonLabel } from "./style";
import { IButton } from "@/utils/interfaces/button";
import Icon from "@/components/icon";

const Button = ({ label, icon, type, color, onClick }: IButton) => {
  return (
    <ButtonContainer type={type} color={color} onClick={() => onClick()}>
      {icon && (
        <ButtonIcon color={color} type={type}>
          <Icon
            data={icon}
            size="xs"
            color={
              color == "primary"
                ? "#ffffff"
                : color == "secondary"
                ? "#000000"
                : color == "danger"
                ? "#ffffff"
                : "#ffffff"
            }
          />
        </ButtonIcon>
      )}
      <ButtonLabel color={color} type={type}>
        {label}
      </ButtonLabel>
    </ButtonContainer>
  );
};

export default Button;
