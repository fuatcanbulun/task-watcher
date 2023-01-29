import { ModalContainer, ModalBody } from "./style";

const ModalLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <ModalContainer>
      <ModalBody>{children}</ModalBody>
    </ModalContainer>
  );
};

export default ModalLayout;
