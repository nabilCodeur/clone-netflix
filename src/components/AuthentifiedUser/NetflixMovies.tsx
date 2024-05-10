import NetflixHeader from "./header/NetflixHeader";
import NetflixRow from "./NetflixRow";

const NetflixMovies = () => {
  return (
    <div>
      <NetflixHeader mediaType="movie" id={843527} />
      <NetflixRow
        category="popular"
        media="movie"
        sizeImage="w500"
        title="Films populaires"
        formatImage="large"
      />
      <NetflixRow
        category="top_rated"
        media="movie"
        sizeImage="w500"
        title="Films les mieux notés"
        formatImage="large"
      />
    </div>
  );
};

export default NetflixMovies;
