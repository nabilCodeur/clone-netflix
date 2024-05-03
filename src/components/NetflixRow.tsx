import { useQuery } from "@tanstack/react-query";

import {
  CategoryEndpointApiList,
  ImageEndpointApi,
  MediaEndpointApi,
} from "../types";
import { Link } from "react-router-dom";
import { clientApiList } from "../utils/clientApiList";
import { buildImageUrl } from "../utils/buildImageUrl";

const NetflixRow = ({
  media,
  category,
  sizeImage,
  formatImage = "large",
  title,
}: {
  media: MediaEndpointApi;
  category: CategoryEndpointApiList;
  formatImage: "large" | "poster";
  sizeImage: ImageEndpointApi;
  title: string;
}) => {
  const getMovies = () => clientApiList(media, category);
  const { data, isLoading, error, isError } = useQuery({
    queryKey: [`${media}/${category}`],
    queryFn: getMovies,
  });

  if (isError) return <p>Error : {error?.message}</p>;

  return (
    <div className="">
      <h1>{title}</h1>

      <div className="flex space-x-2 ">
        {isLoading
          ? "chargement"
          : data?.map((movie) => {
              const fetchImageFormat = buildImageUrl(
                sizeImage,
                formatImage === "large"
                  ? movie.backdrop_path
                  : movie.poster_path
              );
              return (
                // <Link to={`/${media}/${movie.id}`} key={movie.id}>
                <img src={fetchImageFormat} alt={movie.title ?? media} />
                // </Link>
              );
            })}
      </div>
    </div>
  );
};

export default NetflixRow;
