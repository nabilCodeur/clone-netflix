import NetflixHeader from "./header/NetflixHeader";
import NetflixRow from "./NetflixRow";

const Home = () => {
  return (
    <div>
      <NetflixHeader />
      <NetflixRow
        category="popular"
        sizeImage="w500"
        media="movie"
        title="Films populaires"
        formatImage="large"
      />
      <NetflixRow
        category="top_rated"
        sizeImage="w500"
        media="tv"
        title="Séries les mieux notées"
        formatImage="poster"
      />
      <NetflixRow
        category="top_rated"
        sizeImage="w500"
        media="movie"
        title="Films les mieux notés"
        formatImage="poster"
      />
    </div>
  );
};

export default Home;
