import { useContext } from "react";
import AuthentifiedUser from "./components/AuthentifiedUser/AuthentifiedUser";
import UnAuthentifierUser from "./components/UnAuthentifierUser/UnAuthentifierUser";
import { Authentification, AuthentificationProvider } from "./providers/authentificationProvider";

const NetflixApp = () => {

  const {user} = useContext(Authentification) as AuthentificationProvider ;


  
  return (
    <div className="h-full text-white bg-black">
      {user? <AuthentifiedUser /> : <UnAuthentifierUser />}
    </div>
  );
};

export default NetflixApp;
