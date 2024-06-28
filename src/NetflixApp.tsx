import { useContext } from "react";
import AuthentifiedUser from "./components/AuthentifiedUser/AuthentifiedUser";
import UnAuthentifierUser from "./components/UnAuthentifierUser/UnAuthentifierUser";
import { Authentification, AuthentificationProvider } from "./providers/authentificationProvider";

const NetflixApp = () => {
 

  const authentification=useContext(Authentification) as AuthentificationProvider


  return (
    <div className="w-full h-full text-white ">
      {authentification?.user? <AuthentifiedUser /> : <UnAuthentifierUser />}
    </div>
  );
};

export default NetflixApp;
