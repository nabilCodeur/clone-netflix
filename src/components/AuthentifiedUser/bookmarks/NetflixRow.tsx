import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
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
  bookmarksIds: number[];
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
   
      <Carousel orientation="horizontal" opts={{ align: "start", loop: true }}>
        <CarouselContent>
          {queries.map((movie) => {
            return (
              <CarouselItem key={movie.data?.id}>
              <Link to={`/${typeMedia}/${movie.data?.id}`} >
                <img
                  src={buildImageUrl("w500", movie.data?.backdrop_path)}
                  key={movie.data?.id}
                  alt={movie.data?.title ?? "Inconnu"}
                />
              </Link>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>

  );
};

export default NetflixRow;
