import netflixLogo from "@/assets/netflix-n.png";
import { Link } from "react-router-dom";
import { Button } from "../../ui/button";

const Banner = () => {
  return (
    <header className="absolute top-0 w-full ">
      <div className="flex items-center justify-between ">
        <Link to={"/"}>
          <img src={netflixLogo} className="size-14" />
        </Link>
        <div className="mr-6 space-x-4">
          <Button variant={"destructive"}>
            <Link to="/sign-up">Inscription</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Banner;
