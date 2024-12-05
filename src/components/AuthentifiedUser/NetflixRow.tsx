import { useQuery } from "@tanstack/react-query";

import { Link } from "react-router-dom";
import {
  CategoryEndpointApiList,
  ImageEndpointApi,
  MediaEndpointApi,
} from "../../types";
import { buildImageUrl } from "../../utils/buildImageUrl";
import { clientApiList } from "../../utils/clientApiList";
import NetflixRowSkeleton from "../loading/NetflixRowSkeleton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
} from "../ui/carousel";

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
  const getMovies = async () => await clientApiList(media, category);

  const { data, isLoading, error, isError } = useQuery({
    queryKey: [`${media}/${category}`],
    queryFn: getMovies,
  });

  if (isError) {
    return (
      <p>Une erreur s'est produite {import.meta.env.dev ?? error.message}</p>
    );
  }

  return (
    <div className="py-4 pl-3">
      <h1 className="text-2xl font-bold uppercase">{title}</h1>

      <div className="mt-4">
        {isLoading ? (
          <NetflixRowSkeleton />
        ) : (
          <Carousel
            orientation="horizontal"
            opts={{ align: "start", loop: true }}
            className="w-11/12 "
          >
            <CarouselContent className="">
              {data?.map((movie) => {
                if (!movie) return null;
                const fetchImageFormat = buildImageUrl(
                  sizeImage,
                  formatImage === "large"
                    ? movie.backdrop_path
                    : movie.poster_path
                );
                return (
                  <CarouselItem
                    key={`${media}/${formatImage}/${movie?.id}`}
                    className=" sm:basis-1/2 md:basis-1/3"
                  >
                    <Link to={`/${media}/${movie.id}`} key={movie.id}>
                      <img
                        src={fetchImageFormat}
                        alt={movie.title ?? media}
                        className="transition-transform ease-in-out hover:scale-125"
                      />
                    </Link>
                  </CarouselItem>
                );
              })}
            </CarouselContent>

            <CarouselNext className="mr-4" />
          </Carousel>
        )}
      </div>
    </div>
  );
};

export default NetflixRow;
