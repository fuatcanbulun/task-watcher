import styled from "styled-components";

const SelectInputContainer = styled.div`
  width: 100%;
  height: auto;
  position: relative;
`;

const SelectInputLabel = styled.div`
  width: -webkit-fill-available;
  height: 20px;
  line-height: 20px;
  font-size: 12px;
  color: gray;
  font-family: RobotoRegular;
`;

const SelectInputField = styled.select<{ placeholderPosition: string }>`
  width: -webkit-fill-available;
  height: 30px;
  ::placeholder,
  ::-webkit-input-placeholder {
    padding-left: ${(props) => props.placeholderPosition};
  }
  :-ms-input-placeholder {
    padding-left: 30px;
  }
`;

const SelectInputIcon = styled.div`
  height: 20px;
  width: 20px;
  position: absolute;
  top: 5px;
  left: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export {
  SelectInputContainer,
  SelectInputLabel,
  SelectInputField,
  SelectInputIcon,
};
