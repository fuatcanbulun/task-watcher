import styled from "styled-components";

const ModalContainer = styled.div`
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
`;

const ModalBody = styled.div`
  background-color: white;
  padding: 40px;

  @media only screen and (min-width: 960px) {
    width: 500px;
  }
  @media only screen and (min-width: 1400px) {
    width: 500px;
  }
`;

export { ModalContainer, ModalBody };
