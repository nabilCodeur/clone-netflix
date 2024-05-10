import { MediaEndpointApi } from "@/types";
import { buildImageUrl } from "@/utils/buildImageUrl";
import { clientApiMedia } from "@/utils/clientApiMedia";
import { useQueries } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const NetflixRow = ({
  typeMedia,
  bookmarksIds,
}: {
  typeMedia: MediaEndpointApi;
  bookmarksIds: number[] ;
}) => {


  
  const queries = useQueries({
    queries: bookmarksIds.map((id) => {
      return {
        queryKey: [typeMedia, id],
        queryFn: () => clientApiMedia(typeMedia, id),
      };
    }),
  });

  return (
    <div className="flex space-x-4">
      {queries.map((movie) => {
        return (
          <Link to={`/${typeMedia}/${movie.data?.id}`} key={movie.data?.id}>
            <img
              src={buildImageUrl("w500", movie.data?.backdrop_path)}
              alt={movie.data?.title ?? "Inconnu"}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default NetflixRow;
