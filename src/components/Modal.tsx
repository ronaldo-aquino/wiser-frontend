import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import {
  ModalContainer,
  ModalContent,
  ModalButtonClose,
  ModalTitle,
  ModalEmail
} from "../styles/components/Modal";

const Modal = ({ setVisibleModal }) => {
  const { dataUser } = useContext(UserContext);
  const closeModal = () => {
    setVisibleModal(false);
  };

  return (
    <ModalContainer>
      <ModalContent>
        <ModalTitle>Ok, você logou com sucesso!</ModalTitle>
        <ModalEmail>E-mail: {dataUser.email}</ModalEmail>
        <ModalButtonClose onClick={() => closeModal()}>Fechar!</ModalButtonClose>
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
