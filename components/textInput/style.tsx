import styled from "styled-components";

const TextInputContainer = styled.div`
  width: 100%;
  height: auto;
  position: relative;
`;

const TextInputLabel = styled.div`
  width: -webkit-fill-available;
  height: 20px;
  line-height: 20px;
  font-size: 12px;
  color: gray;
  font-family: RobotoRegular;
`;

const TextInputField = styled.input<{ maxlength: string }>`
  width: -webkit-fill-available;
  height: 27px;
  lineheight: 0px;
  padding: 0 10px;
`;

const TextInputIcon = styled.div`
  height: 20px;
  width: 20px;
  position: absolute;
  top: 5px;
  left: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { TextInputContainer, TextInputLabel, TextInputField, TextInputIcon };
