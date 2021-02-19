import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import {
  ModalContainer,
  ModalContent,
  ModalButtonClose,
} from "../styles/components/Modal";

const Modal = ({ setVisibleModal }) => {
  const { dataUser } = useContext(UserContext);
  const closeModal = () => {
    setVisibleModal(false);
  };

  return (
    <ModalContainer>
      <ModalContent>
        <h1>Teste</h1>
        <ModalButtonClose onClick={() => closeModal()}>Fechar!</ModalButtonClose>
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
