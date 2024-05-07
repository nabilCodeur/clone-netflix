import useFirebaseAuthentification from "@/hooks/useFirebaseAuthentification";
import React from "react";

export const Authentification = React.createContext({});

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
