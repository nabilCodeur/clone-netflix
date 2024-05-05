import authentification from "@/firebase/authentification";

import {
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";



const useAuthentification = () => {

  const [user, setUser] =
    React.useState<User | null>(null);
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);
  const navigate = useNavigate()

  const signUpUser = (email: string, password: string) => {
    createUserWithEmailAndPassword(authentification, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        navigate("/")
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.error(errorMessage)
        setErrorMessage(errorMessage);
      });
  };

  const loginUser = (email: string, password: string) => {
    signInWithEmailAndPassword(authentification, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        console.log(user.email)
        navigate("/")
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.error(errorMessage)
        setErrorMessage(errorMessage);
      });
  };

  const logoutUser = ()=>{
    signOut(authentification).then(() => {
      setUser(null)
    }
    ).catch(error=>{
      const errorMessage = error.message
      setErrorMessage(errorMessage)
    })
  }

  React.useEffect(() => {
    console.log(user?.email)
  },[user,setUser]
  )

  return { user, loginUser, signUpUser, errorMessage ,  logoutUser };
};

export default useAuthentification;
