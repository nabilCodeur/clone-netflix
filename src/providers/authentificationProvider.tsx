import authentification from "@/firebase/authentification";
import useFirebaseAuthentification from "@/hooks/useFirebaseAuthentification";
import { User, browserSessionPersistence } from "firebase/auth";
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

    React.useEffect(() => {
      const setAuthPersistance = async()=>{
        try{
           await authentification.setPersistence(browserSessionPersistence)
        }
        catch(error){
          console.error("Erreur lors de la configuration de la persistance de l'authentification")
        }
      }
      setAuthPersistance()
    }
    )


  return (
    <Authentification.Provider
      value={{ user, loginUser, logoutUser, errorMessage, signUpUser }}
    >
      {children}
    </Authentification.Provider>
  );
};

export default AuthentificationProvider;
