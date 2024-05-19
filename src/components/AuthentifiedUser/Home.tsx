import NetflixRow from "./NetflixRow";
import NetflixHeader from "./header/NetflixHeader";

const Home = () => {
  return (
    <div className="relative w-full mb-10 h-dvh ">
      <NetflixHeader  />
      
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
        media="movie"
        title="Films les mieux notés"
        formatImage="poster"
      /> 
        <NetflixRow
        category="top_rated"
        sizeImage="w500"
        media="tv"
        title="Séries les mieux notées"
        formatImage="poster"
      />
    </div>
  );
};

export default Home;
