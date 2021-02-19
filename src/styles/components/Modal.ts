import styled from "styled-components";

export const ModalContainer = styled.section`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background: #fff;
  width: 300px;
  border-radius: 8px;
  padding: 15px;
`;

export const ModalTitle = styled.h2`
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  color: #383e71;
`;

export const ModalEmail = styled.p`
  margin-top: 16px;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  color: #989fdb;
`;

export const ModalButtonClose = styled.button`
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  font-size: 16px;
  color: #fff;
  border: none;
  background: linear-gradient(267.79deg, #383e71 0%, #9d25b0 99.18%);
  box-shadow: 0px 10px 25px #cf99db;
  border-radius: 8px;
  cursor: pointer;
  outline: none;
`;
