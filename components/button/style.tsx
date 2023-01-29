import styled from "styled-components";

const ButtonContainer = styled.div<{ type: string }>`
  height: 30px;
  background-color: ${(props) =>
    props.color == "primary"
      ? "#276ed9"
      : props.color == "secondary"
      ? "#cfcfcf"
      : props.color == "danger"
      ? "#bd0000"
      : "white"};
  width: ${(props) =>
    props.type == "icon"
      ? "30px"
      : props.type == "text"
      ? "100%"
      : props.type == "mixed"
      ? "100%"
      : "100%"};
  display: flex;
  justify-content: ${(props) =>
    props.type == "mixed" ? "flex-start" : "center"};
  align-items: center;
  cursor: pointer;
  &:hover {
    filter: brightness(110%);
  }
`;

const ButtonIcon = styled.div<{ type: string }>`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) =>
    props.color == "primary"
      ? "#ffffff"
      : props.color == "secondary"
      ? "#000000"
      : props.color == "danger"
      ? "#ffffff"
      : "#ffffff"};
  margin-left: ${(props) =>
    props.type == "icon"
      ? "0px"
      : props.type == "text"
      ? "0px"
      : props.type == "mixed"
      ? "5px"
      : "5px"};
`;

const ButtonLabel = styled.div<{ type: string }>`
  height: 30px;
  line-height: 32px;
  font-size: 14px;
  font-family: RobotoRegular;
  color: ${(props) =>
    props.color == "primary"
      ? "#ffffff"
      : props.color == "secondary"
      ? "#000000"
      : props.color == "danger"
      ? "#ffffff"
      : "#ffffff"};
  margin-left: ${(props) =>
    props.type == "icon"
      ? "0px"
      : props.type == "text"
      ? "0px"
      : props.type == "mixed"
      ? "5px"
      : "5px"};
`;

export { ButtonContainer, ButtonIcon, ButtonLabel };
