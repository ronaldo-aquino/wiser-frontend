import styled from "styled-components";

type inputError = {
  borderColor?: string;
};

export const SectionForm = styled.section`
  display: flex;
  justify-content: center;
`;

export const FormContent = styled.form`
  background-color: #faf5ff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  margin-top: 139px;
  padding: 24px 28px 57px 27px;
  position: relative;
  width: 311px;

  @media (min-width: 768px) {
    margin-left: calc(80px - 27px);
    margin-top: calc(284px - 24px);
  }

  @media (min-width: 1366px) {
    margin-top: calc(136px - 24px);
    margin-left: calc(111px - 27px);
  }
`;

export const FormTitle = styled.h1`
  color: #383e71;
  font-size: 24px;
  font-weight: normal;
  line-height: 32px;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 40px;
    font-weight: normal;
    line-height: 48px;
    text-align: left;
  }

  @media (min-width: 1366px) {
    line-height: 48px;
  }
`;

export const FormDescription = styled.p`
  color: #989fdb;
  font-size: 11px;
  font-weight: 600;
  line-height: 20px;
  margin-top: 16px;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 16px;
    text-align: left;
  }

  @media (min-width: 1366px) {
    line-height: 20px;
    margin-bottom: 31px;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const FormLabel = styled.label`
  align-items: center;
  color: #383e71;
  font-size: 10px;
  margin-bottom: 8px;
  margin-left: 11px;

  &:not(:first-child) {
    margin-top: 16px;
  }
`;

export const FormInput = styled.input<inputError>`
  border-radius: 8px;
  border: 1px solid #989fdb;
  border-color: ${props => props.borderColor};
  color: #383e71;
  font-size: 10px;
  height: 48px;
  outline: none;
  padding-left: 17px;

  @media (min-width: 768px) {
    width: 297px;
  }

  @media (min-width: 1366px) {
    width: 256px;
  }
`;

export const FormMessageError = styled.span`
  color: #ff377f;
  font-size: 10px;
  margin-left: 20px;
  margin-top: 8px;
`;

export const FormButtonContainer = styled.div`
  display: flex;
  justify-content: center;

  @media (min-width: 768px) {
    margin: 0;
    width: 297px;
  }

  @media (min-width: 1366px) {
    width: 256px;
  }
`;

export const FormButton = styled.button`
  background: linear-gradient(267.79deg, #383e71 0%, #9d25b0 99.18%);
  border-radius: 8px;
  border: none;
  bottom: calc(0px - 24px);
  color: #ffffff;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  height: 48px;
  line-height: 20px;
  margin: 0 auto;
  outline: none;
  position: absolute;
  width: 168px;

  @media (min-width: 768px) {
    box-shadow: 0px 10px 25px #cf99db;
    margin: 0;
    position: relative;
    width: 297px;
  }
`;
