import netflixLogo from "@/assets/netflix-n.png";
import { Button } from "@/components/ui/button";
import {
  Authentification,
  AuthentificationProvider,
} from "@/providers/authentificationProvider";
import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";

const TopHeader = () => {
  const { logoutUser } = React.useContext(
    Authentification
  ) as AuthentificationProvider;
  return (
    
    <div className="sticky">
    <div className="flex items-center justify-between px-2 ">
      <div className="flex items-center space-x-8">
        <Link to={"/"}>
          <img src={netflixLogo} alt="logo" className="object-contain w-16" />
        </Link>
        <Navigation />
      </div>
      <div className="flex items-center">
        {/* <SearchMedia/> */}
        <Button onClick={logoutUser}>Se déconnecter</Button>
      </div>
    </div>
    </div>
  );
};

export default TopHeader;
