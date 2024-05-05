import { useQuery } from "@tanstack/react-query";

import React from "react";
import { Link } from "react-router-dom";
import {
  CategoryEndpointApiList,
  ImageEndpointApi,
  MediaEndpointApi,
} from "../../types";
import { buildImageUrl } from "../../utils/buildImageUrl";
import { clientApiList } from "../../utils/clientApiList";
import NetflixRowSkeleton from "../loading/NetflixRowSkeleton";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { useToast } from "../ui/use-toast";
import { Button } from "../ui/button";
import { Toast } from "@radix-ui/react-toast";


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


  
  if (isError){
   throw new Error(error.message)
    
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
          >
            <CarouselContent className="-ml-9">
              {data?.map((movie) => {
                const fetchImageFormat = buildImageUrl(
                  sizeImage,
                  formatImage === "large"
                    ? movie.backdrop_path
                    : movie.poster_path
                );
                return (
                  <CarouselItem key={movie.id} className="pl-2 basis-1/3">
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
            {/* <CarouselNext /> */}
          </Carousel>
        )}
      </div>
    </div>
  );
};

export default NetflixRow;
