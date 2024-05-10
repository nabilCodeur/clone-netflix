import { useParams } from "react-router-dom";
import { MediaEndpointApi } from "../../types";
import NetflixRow from "./NetflixRow";
import NetflixHeader from "./header/NetflixHeader";

const NetflixById = () => {
  const { id } = useParams();

  const currentUrl = window.location.href;

  const mediaType: MediaEndpointApi = currentUrl.includes("movie")
    ? "movie"
    : "tv";
  return (
    <div>
      <NetflixHeader id={Number(id)} mediaType={mediaType} />
      <NetflixRow
        category="popular"
        formatImage="large"
        media={mediaType}
        sizeImage="w500"
        title={`${mediaType === "movie" ? "Films" : "Séries"} populaires `}
      />
      <NetflixRow
        category="top_rated"
        formatImage="large"
        media={mediaType}
        sizeImage="w500"
        title={`${mediaType === "movie" ? "Films" : "Séries"} les mieux notés `}
      />
    </div>
  );
};

export default NetflixById;
