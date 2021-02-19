import styled from "styled-components";

export const SectionForm = styled.section`
  display: flex;
  justify-content: center;
`;

export const FormContent = styled.form`
  margin-top: 139px;
  width: 311px;
  display: flex;
  flex-direction: column;
  background-color: #faf5ff;
  padding: 24px 28px 57px 27px;
  border-radius: 8px;
  position: relative;

  @media (min-width: 768px) {
    margin-top: calc(284px - 24px);
    margin-left: calc(80px - 27px);
  }

  @media (min-width: 1366px) {
    margin-top: calc(136px - 24px);
    margin-left: calc(111px - 27px);
  }
`;

export const FormTitle = styled.h1`
  font-weight: normal;
  font-size: 24px;
  line-height: 32px;
  color: #383e71;
  text-align: center;

  @media (min-width: 768px) {
    font-weight: normal;
    font-size: 40px;
    line-height: 48px;
    text-align: left;
  }

  @media (min-width: 1366px) {
    line-height: 48px;
  }
`;

export const FormDescription = styled.p`
  margin-top: 16px;
  font-weight: 600;
  font-size: 11px;
  line-height: 20px;
  text-align: center;
  color: #989fdb;

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
  font-size: 10px;
  align-items: center;
  color: #383e71;
  margin-left: 11px;
  margin-bottom: 8px;

  &:not(:first-child) {
    margin-top: 16px;
  }
`;

export const FormInput = styled.input`
  height: 48px;
  border: 1px solid #989fdb;
  border-radius: 8px;
  padding-left: 17px;
  outline: none;
  font-size: 10px;
  color: #383e71;

  @media (min-width: 768px) {
    width: 297px;
  }

  @media (min-width: 1366px) {
    width: 256px;
  }
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
  width: 168px;
  height: 48px;
  background: linear-gradient(267.79deg, #383e71 0%, #9d25b0 99.18%);
  border-radius: 8px;
  margin: 0 auto;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
  border: none;
  outline: none;
  cursor: pointer;
  position: absolute;
  bottom: calc(0px - 24px);

  @media (min-width: 768px) {
    position: relative;
    margin: 0;
    width: 297px;
    box-shadow: 0px 10px 25px #CF99DB;
  }
`;
