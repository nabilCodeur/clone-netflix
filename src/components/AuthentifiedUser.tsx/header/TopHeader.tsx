import netflixLogo from "@/assets/netflix-n.png";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import SearchMedia from "./SearchMedia";

const TopHeader = () => {
  return (
    <div className="flex items-center justify-between px-2 bg-black">
      <div className="flex items-center space-x-8">
        <Link to={"/"}>
          <img src={netflixLogo} alt="logo" className="object-contain w-16" />
        </Link>
       <Navigation/>
      </div>
      <div>
        <SearchMedia/>
      </div>
    </div>
  );
};

export default TopHeader;
