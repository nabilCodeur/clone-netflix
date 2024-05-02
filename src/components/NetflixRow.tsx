import { useQuery } from "@tanstack/react-query";
import { buildImageUrl, clientApi } from "../utils";
import {
  CategoryEndpointApi,
  ImageEndpointApi,
  MediaEndpointApi,
} from "../types";
import { Link } from "react-router-dom";

const NetflixRow = ({
  media,
  category,
  formatImage,
  title,
}: {
  media: MediaEndpointApi;
  category: CategoryEndpointApi;
  formatImage: ImageEndpointApi;
  title: string;
}) => {
  const getMovies = () => clientApi(media, category);
  const { data, isLoading, error } = useQuery({
    queryKey: [`${media}/${category}`],
    queryFn: getMovies,
  });

  const imageExempleSource =
    "https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg";

  return (
    <div className="">
      <h1>{title}</h1>
      <div className="flex space-x-2">
        {isLoading
          ? "chargement"
          : data.map((movie) => {
              return (
                <Link to="/">
                  <img
                    src={buildImageUrl("w500", movie.backdrop_path)}
                    alt="movie"
                  />
                </Link>
              );
            })}
      </div>
    </div>
  );
};

export default NetflixRow;
