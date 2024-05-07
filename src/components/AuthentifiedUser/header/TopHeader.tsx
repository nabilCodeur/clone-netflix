import netflixLogo from "@/assets/netflix-n.png";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import SearchMedia from "./SearchMedia";
import { Authentification, AuthentificationProvider } from "@/providers/authentificationProvider";
import { Button } from "@/components/ui/button";
import React from "react";

const TopHeader = () => {
  const {logoutUser}=React.useContext(Authentification) as AuthentificationProvider
  return (
    <header className="flex items-center justify-between px-2 bg-black">
      <div className="flex items-center space-x-8">
        <Link to={"/"}>
          <img src={netflixLogo} alt="logo" className="object-contain w-16" />
        </Link>
       <Navigation/>
      </div>
      <div>

        <SearchMedia/>
        <Button onClick={logoutUser}>Se déconnecter</Button>
      </div>
    </header>
  );
};

export default TopHeader;
