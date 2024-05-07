import useFirebaseAuthentification from "@/hooks/useFirebaseAuthentification";
import { User } from "firebase/auth";
import React from "react";



export type AuthentificationProvider = {
  user: User | null;
  loginUser: (email: string, password: string) => void;
  signUpUser: (email: string, password: string) => void;
  errorMessage: string | null;
  logoutUser: () => void;
}

export const Authentification = React.createContext<AuthentificationProvider|null>(null);

const AuthentificationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { user, loginUser, logoutUser, errorMessage, signUpUser } =
    useFirebaseAuthentification();


  return (
    <Authentification.Provider
      value={{ user, loginUser, logoutUser, errorMessage, signUpUser }}
    >
      {children}
    </Authentification.Provider>
  );
};

export default AuthentificationProvider;
