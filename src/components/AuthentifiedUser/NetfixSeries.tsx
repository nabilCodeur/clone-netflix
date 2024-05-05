import NetflixHeader from "./header/NetflixHeader";
import NetflixRow from "./NetflixRow";

const NetfixSeries = () => {
  return (
    <div>
      <NetflixHeader mediaType="tv" />
      <NetflixRow
        category="popular"
        formatImage="large"
        media="tv"
        sizeImage="w500"
        title="Séries populaires"
      />
      <NetflixRow
        category="top_rated"
        formatImage="large"
        media="tv"
        sizeImage="w500"
        title="Séries les mieux notées"
      />
    </div>
  );
};

export default NetfixSeries;
