import { useParams } from "react-router-dom";
import { MediaEndpointApi } from "../types";
import NetflixHeader from "./NetflixHeader";
import NetflixRow from "./NetflixRow";

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
    </div>
  );
};

export default NetflixById;
