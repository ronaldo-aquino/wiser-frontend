import styled from "styled-components";

export const ModalContainer = styled.section`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center
`;

export const ModalContent = styled.div`
  background: #fff;
  width: 300px;
  height: 375px;
  border-radius: 8px;
  padding: 15px
`;


export const ModalButtonClose = styled.button`

`;

