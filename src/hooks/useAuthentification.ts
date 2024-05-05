import React from "react"


const useAuthentification = () => {
  const [authentificationUser,setAuthentificationUser]=React.useState(false)
  return {authentificationUser}
}

export default useAuthentification
