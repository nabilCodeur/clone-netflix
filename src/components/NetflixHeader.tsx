import { z } from "zod";
import { MediaEndpointApi } from "../types";
import { buildImageUrl } from "../utils/buildImageUrl";
import { MediaSchema, clientApiList } from "../utils/clientApiList";
import getRandomElementInArray from "../utils/getRandomElementInArray";
import { clientApiMedia } from "../utils/clientApiMedia";
import { useQuery } from "@tanstack/react-query";
import getRandomMedia from "../utils/getRandomMedia";
import getRandomTypeMedia from "../utils/getRandomTypeMedia";
import useHeader from "../hooks/useHeader";
import TopHeader from "./TopHeader";

// test tv id 2734
const NetflixHeader = ({
  mediaType,
  id,
}: {
  mediaType?: MediaEndpointApi;
  id?: number;
}) => {
  const {
    data: media,
    error,
    isError,
    isLoading,
    bannerMediaSource,
  } = useHeader(mediaType, id);

  if (isLoading) return <p>Chargement</p>;
  if (isError) return <p>{error.message}</p>;

  return (
    <>
      <TopHeader />
      <div
        style={{
          backgroundImage: `url(${bannerMediaSource}`,
          // backgroundPosition: "center",
          backgroundClip: "border-box",
          backgroundSize: "1600px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="text-white h-[400px] flex items-center "
      >
        <div className="w-1/3 p-5 px-4 ml-3 space-y-2 bg-black/70 ">
          <h1 className="text-2xl uppercase">{media?.title ?? media?.name}</h1>
          <p className="font-bold text-justify indent-4">
            {media?.overview ?? "Résumé indisponible"}
          </p>
        </div>
      </div>
    </>
  );
};

export default NetflixHeader;
