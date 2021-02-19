import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import api from "../pages/api";
import {
  SectionForm,
  FormContent,
  FormTitle,
  FormDescription,
  FormGroup,
  FormLabel,
  FormInput,
  FormButton,
  FormButtonContainer,
  FormMessageError,
} from "../styles/components/Form";

interface Auth {
  email: string;
  password: string;
}

const Form = ({ setVisibleModal }) => {
  const { dataUser } = useContext(UserContext);

  const [auth, setAuth] = useState<Auth>({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [borderColor, setBorderColor] = useState<string>("#989fdb");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAuth({
      ...auth,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<EventTarget>) => {
    e.preventDefault();
    const { email, password } = dataUser;

    if (auth.email !== email) {
      setBorderColor("#ff377f");
      setErrorMessage("Digite um e-mail válido;");
      return;
    }

    if (auth.password !== password) {
      setErrorMessage("Password errado");
      return;
    }

    console.log("Email certo");
    setAuth({
      email: "",
      password: "",
    });
    setBorderColor("#989fdb");
    setVisibleModal(true);
    setErrorMessage("");
  };

  return (
    <SectionForm>
      <FormContent onSubmit={handleSubmit}>
        <FormTitle>
          Olá, seja
          <br /> bem-vindo!
        </FormTitle>
        <FormDescription>
          Para acessar a plataforma, faça seu login.
        </FormDescription>
        <FormGroup>
          <FormLabel>E-MAIL</FormLabel>
          <FormInput
            data-cy="input-email"
            type="email"
            placeholder="user.name@mail.com"
            name="email"
            value={auth.email}
            onChange={(e) => handleChange(e)}
            borderColor={borderColor}
          />
          <FormMessageError>{errorMessage}</FormMessageError>
          <FormLabel>SENHA</FormLabel>
          <FormInput
            data-cy="input-password"
            type="password"
            placeholder="*******"
            name="password"
            value={auth.password}
            onChange={(e) => handleChange(e)}
          />
          <FormButtonContainer>
            <FormButton>ENTRAR</FormButton>
          </FormButtonContainer>
        </FormGroup>
      </FormContent>
    </SectionForm>
  );
};

export default Form;
