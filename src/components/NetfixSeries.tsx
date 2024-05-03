import NetflixHeader from "./NetflixHeader";
import NetflixRow from "./NetflixRow";

const NetfixSeries = () => {
  return (
    <div>
      <NetflixHeader mediaType="tv" />
      {/* <NetflixRow
        category="upcoming"
        formatImage="large"
        media="tv"
        sizeImage="w500"
        title="Séries à venir"
      /> */}
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
