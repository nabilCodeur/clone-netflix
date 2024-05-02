import { useQuery } from "@tanstack/react-query";
import { buildImageUrl, clientApi } from "../utils";
import NetflixRow from "./NetflixRow";

const Home = () => {
  return (
    <div>
      <NetflixRow
        category="popular"
        formatImage="w500"
        media="movie"
        title="Films populaires"
      />
      <NetflixRow
        category="top_rated"
        formatImage="w500"
        media="tv"
        title="Séries les mieux notées"
      />
    </div>
  );
};

export default Home;
