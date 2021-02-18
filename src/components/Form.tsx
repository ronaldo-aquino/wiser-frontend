import {
  SectionForm,
  FormContent,
  FormTitle,
  FormDescription,
  FormGroup,
  FormLabel,
  FormInput,
  FormButton,
  FormButtonContainer
} from "../styles/components/Form";

const Form = () => {
  return (
    <SectionForm>
      <FormContent>
        <FormTitle>
          Olá, seja
          <br /> bem-vindo!
        </FormTitle>
        <FormDescription>
          Para acessar a plataforma, faça seu login.
        </FormDescription>
        <FormGroup>
          <FormLabel>E-MAIL</FormLabel>
          <FormInput type="email" placeholder="user.name@mail.com" />
          <FormLabel>SENHA</FormLabel>
          <FormInput type="password" placeholder="*******" />
          <FormButtonContainer>
            <FormButton>ENTRAR</FormButton>
          </FormButtonContainer>
        </FormGroup>
      </FormContent>
    </SectionForm>
  );
};

export default Form;
