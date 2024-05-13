import useHeader from "../../../hooks/useHeader";
import { MediaEndpointApi } from "../../../types";
import HeaderSkeleton from "../../loading/HeaderSkeleton";
import { Button } from "../../ui/button";
import NetflixHeaderOverview from "./NetflixHeaderOverview";
import TopHeader from "./TopHeader";

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
  if (!media) return <p>Film introuvable</p>;

  return (
    <>
      <TopHeader />
      {isLoading ? (
        <HeaderSkeleton />
      ) : (
        <div className="text-white h-[300px] sm:h-[400px]   ">
          <div className="relative">
            <img
              src={bannerMediaSource}
              alt={media.name ? media.title : "Titre inconnu"}
            />
            <div className="absolute mt-4 space-x-2  text-end bottom-6 left-4">
              <Button className="uppercase bg-red-600">Lecture</Button>
              <Button className="uppercase ">Ajouter à mes favoris</Button>
            </div>
            <NetflixHeaderOverview media={media} mediaHeader={mediaHeader} />
          </div>
          
        </div>
      )}
    </>
  );
};

export default NetflixHeader;
