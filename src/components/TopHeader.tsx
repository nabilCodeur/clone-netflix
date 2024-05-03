import netflixLogo from "@/assets/netflix-n.png";
import { NavLink } from "react-router-dom";

const TopHeader = () => {
  return (
    <div className="flex items-center justify-between px-2 bg-black">
      <img src={netflixLogo} alt="" className="object-contain w-16" />
      <nav className="space-x-4 text-xl font-extrabold text-white stroke-1 stroke-black">
        <NavLink to={"/"}>Accueil</NavLink>
        <NavLink to={"/movies"}>Films</NavLink>
        <NavLink to={"/tv"}>Séries</NavLink>
        <NavLink to={"/bookmarks"}>Favoris</NavLink>
      </nav>
    </div>
  );
};

export default TopHeader;
