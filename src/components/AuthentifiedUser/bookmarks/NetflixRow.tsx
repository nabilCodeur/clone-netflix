import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
} from "@/components/ui/carousel";
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
        queryFn: async () => await clientApiMedia(typeMedia, id),
      };
    }),
  });

  return (
    <Carousel
      orientation="horizontal"
      opts={{ align: "start", loop: true }}
      className="w-5/6 p-4 ml-8"
    >
      <CarouselContent>
        {queries.map((movie) => {
          return (
            <CarouselItem
              key={`${typeMedia}/${movie.data?.id}`}
              className="basis-1/2 sm:basis-1/3 md:basis-1/5"
            >
              <Link to={`/${typeMedia}/${movie.data?.id}`}>
                <img
                  src={buildImageUrl("w200", movie.data?.poster_path)}
                  key={movie.data?.id}
                  alt={movie.data?.title ?? "Inconnu"}
              
                />
              </Link>
            </CarouselItem>
          );
        })}
      </CarouselContent>

      <CarouselNext className="mr-4 sm:mr-2" />
    </Carousel>
  );
};

export default NetflixRow;
