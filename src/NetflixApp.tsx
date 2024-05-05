import { useContext } from "react";
import AuthentifiedUser from "./components/AuthentifiedUser/AuthentifiedUser";
import UnAuthentifierUser from "./components/UnAuthentifierUser/UnAuthentifierUser";
import { Authentification } from "./providers/authentificationProvider";

const NetflixApp = () => {

  const {user} = useContext(Authentification);
  console.log(user)

  
  return (
    <div className="h-full text-white bg-black">
      {user? <AuthentifiedUser /> : <UnAuthentifierUser />}
    </div>
  );
};

export default NetflixApp;
