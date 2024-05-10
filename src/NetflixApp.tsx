import { useContext } from "react";
import AuthentifiedUser from "./components/AuthentifiedUser/AuthentifiedUser";
import UnAuthentifierUser from "./components/UnAuthentifierUser/UnAuthentifierUser";
import { Authentification, AuthentificationProvider } from "./providers/authentificationProvider";

const NetflixApp = () => {
 

  const authentification=useContext(Authentification) as AuthentificationProvider


  return (
    <div className="h-full text-white bg-black">
      {authentification?.user? <AuthentifiedUser /> : <UnAuthentifierUser />}
    </div>
  );
};

export default NetflixApp;
