import { ChangeEvent, FormEvent, useEffect, useState } from "react";
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
} from "../styles/components/Form";

interface DataUser {
  id: number;
  email: string;
  password: string;
}

interface Auth {
  email: string;
  password: string;
}

const Form = () => {
  const [dataUser, setDataUser] = useState<DataUser>();
  const [auth, setAuth] = useState<Auth>({
    email: "",
    password: "",
  });

  useEffect(() => {
    const getDataUser = async () => {
      const { data } = await api.get("/auth");
      data.map((user) => setDataUser(user));
    };

    getDataUser();
  }, []);

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
      console.log("E-mail errado");
      console.log(email);
      return;
    }

    if(auth.password !== password) {
      console.log("Password errado");
      console.log(password);
      return;
    }

    console.log("Email certo");
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
            type="email"
            placeholder="user.name@mail.com"
            name="email"
            value={auth.email}
            onChange={(e) => handleChange(e)}
          />
          <FormLabel>SENHA</FormLabel>
          <FormInput
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
