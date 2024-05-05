import useAuthentification from '@/hooks/useAuthentification'
import React from 'react'


export const Authentification= React.createContext({})

const AuthentificationProvider = ({children}:{children:React.ReactNode}) => {
  const {user,loginUser,logoutUser,errorMessage,signUpUser} = useAuthentification()
  return (
    <Authentification.Provider value={{user,loginUser,logoutUser,errorMessage,signUpUser}}>
      {children}
    </Authentification.Provider>
  )
}

export default AuthentificationProvider
