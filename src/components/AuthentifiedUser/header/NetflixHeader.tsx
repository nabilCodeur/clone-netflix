import useBookmarkFirestore from "@/hooks/useBookmarkFirestore";
import {
  Authentification,
  AuthentificationProvider,
} from "@/providers/authentificationProvider";
import { useContext, useEffect } from "react";
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

  const { user } = useContext(Authentification) as AuthentificationProvider;
  const { handleBookmark, checkMediaInFirestoreBookmark, isBookmarkInList } =
    useBookmarkFirestore(user?.uid, mediaHeader, media?.id);

  useEffect(() => {
    checkMediaInFirestoreBookmark();
  }, [checkMediaInFirestoreBookmark]);

  if (isLoading)
    return (
      <>
        <TopHeader />
        <HeaderSkeleton />
      </>
    );

  if (isError)
    return (
      <p>
        {import.meta.env.dev
          ? error?.message
          : "Les données n'ont pas été chargées. Veuillez réessayer plus tard"}
      </p>
    );

  if (!media) return <p>Film introuvable</p>;

  return (
    <>
      <TopHeader />
      
        <div className="relative w-full text-white ">
          <section
            style={{
              backgroundImage: `linear-gradient(to right,black,transparent),url(${bannerMediaSource})`,
              backgroundBlendMode: "multiply",
            }}
            className={`  bg-cover h-[50vh]  sm:h-[60vh] bg-center  relative w-full `}
          >
            <div className="absolute space-x-2 text-end top-3/4 left-4">
              <Button className="uppercase bg-red-600">Lecture</Button>
              <Button className="uppercase " onClick={handleBookmark}>
                {isBookmarkInList
                  ? "Supprimer de mes favoris"
                  : "Ajouter à mes favoris"}
              </Button>
            </div>
          </section>
          <NetflixHeaderOverview media={media} />
        </div>
    </>
  );
};

export default NetflixHeader;
