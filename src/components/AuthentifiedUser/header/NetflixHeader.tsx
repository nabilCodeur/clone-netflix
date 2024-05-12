import useBookmarkFirestore from "@/hooks/useBookmarkFirestore";
import { Authentification, AuthentificationProvider } from "@/providers/authentificationProvider";
import { useContext, useEffect } from "react";
import useHeader from "../../../hooks/useHeader";
import { MediaEndpointApi } from "../../../types";
import HeaderSkeleton from "../../loading/HeaderSkeleton";
import { Button } from "../../ui/button";
import TopHeader from "./TopHeader";
import NetflixHeaderOverview from "./NetflixHeaderOverview";

//TODO:afficher un message lorsqu'un film est ajouté ou supprimé en favori
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
    mediaHeader,

  } = useHeader(mediaType, id);

 



  if (isError) return <p>{error?.message}</p>;
  if (!media) return <p>Film introuvable</p>

  return (
    <>
      <TopHeader />
      {isLoading ? (
        <HeaderSkeleton />
      ) : (
        <div
          style={{
            backgroundImage: `url(${bannerMediaSource}`,
            backgroundClip: "border-box",
            backgroundSize: "1600px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          className="text-white h-[300px] sm:h-[400px]  flex items-center "
        >
        
        <NetflixHeaderOverview media={media} mediaHeader={mediaHeader}/>
        </div>
      )}
    </>
  );
};

export default NetflixHeader;
