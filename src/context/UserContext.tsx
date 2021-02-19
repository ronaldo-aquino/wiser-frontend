import { createContext, useEffect, useState } from "react";
import api from "../pages/api";

interface DataUser {
  id: number;
  email: string;
  password: string;
}

interface Context {
  dataUser: {
    id: number;
    email: string;
    password: string;
  };
}

const initialState = {
  id: 0,
  email: "",
  password: "",
};

export const UserContext = createContext<Context>({ dataUser: initialState });

const UserProvider: React.FC = ({ children }) => {
  const [dataUser, setDataUser] = useState<DataUser>(initialState);

  useEffect(() => {
    try {
      const getDataUser = async () => {
        const { data } = await api.get("/auth");
        data.map((user: DataUser) => setDataUser(user));
      };

      getDataUser();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <UserContext.Provider value={{ dataUser }}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
