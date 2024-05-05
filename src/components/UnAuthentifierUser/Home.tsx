import backgroundAuthentification from "@/assets/background-authentification.jpg";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import Banner from "./banner/HomeBanner";
const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundAuthentification})`,
        backgroundColor: "darkgrey",
        backgroundBlendMode: "multiply",
      }}
      className="h-[100vh] flex flex-col justify-center "
    >
      <Banner />

      <div className="flex flex-col items-center justify-center ">
        <h1 className="text-3xl font-extrabold">
          Unlimited movies, TV shows, and more
        </h1>
        <br />
        <h2>Watch anywhere. Cancer anytime.</h2>
        <br />
        <Button variant={"destructive"}>
          <Link to="/login">Get Started</Link>
        </Button>
      </div>
    </div>
  );
};

export default Home;
