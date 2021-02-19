import styled from "styled-components";

export const ModalContainer = styled.section`
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  height: 100vh;
  justify-content: center;
  position: fixed;
  width: 100vw;
  z-index: 1;
`;

export const ModalContent = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 15px;
  width: 300px;
`;

export const ModalTitle = styled.h2`
  color: #383e71;
  font-size: 24px;
  line-height: 32px;
  text-align: center;
`;

export const ModalEmail = styled.p`
  color: #989fdb;
  font-size: 16px;
  font-weight: 600;
  margin-top: 16px;
  text-align: center;
`;

export const ModalButtonClose = styled.button`
  background: linear-gradient(267.79deg, #383e71 0%, #9d25b0 99.18%);
  border-radius: 8px;
  border: none;
  box-shadow: 0px 10px 25px #cf99db;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;
  outline: none;
  padding: 10px;
  width: 100%;
`;
