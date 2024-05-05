import AuthentifiedUser from "./components/AuthentifiedUser/AuthentifiedUser";
import UnAuthentifierUser from "./components/UnAuthentifierUser/UnAuthentifierUser";

const NetflixApp = () => {
  const authUser = false;
  return <div className="h-full text-white bg-black">{authUser ? <AuthentifiedUser /> : <UnAuthentifierUser />}</div>;
};

export default NetflixApp;
