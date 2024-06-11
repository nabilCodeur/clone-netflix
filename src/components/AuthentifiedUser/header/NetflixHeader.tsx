import useBookmarkFirestore from "@/hooks/useBookmarkFirestore";
import {
  Authentification,
  AuthentificationProvider,
} from "@/providers/authentificationProvider";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useContext } from "react";
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
  const query = useQueryClient();
  const {
    data: media,
    error,
    isError,
    isLoading,
    bannerMediaSource,
    mediaHeader,
     mediaId,
  } = useHeader(mediaType, id);

  const { user } = useContext(Authentification) as AuthentificationProvider;
  const { handleBookmark, isBookmarked } = useBookmarkFirestore(
    user?.uid,
    mediaHeader,
    mediaId
  );

  const { data: isBookmarkedQuery } = useQuery({
    queryKey: ["isBookmarked", mediaHeader, mediaId],
    queryFn: isBookmarked,
  });

  const mutation = useMutation({
    mutationFn: handleBookmark,
    mutationKey: ["bookmark", mediaHeader, mediaId],
    onSuccess: () => {
      query.invalidateQueries({
        queryKey: ["isBookmarked", mediaHeader, mediaId],
        
      });
      query.invalidateQueries({
        queryKey:["bookmarks",mediaHeader]
      })
    },
  });

  const handleBookmarksWithUseQuery = () => {
    mutation.mutate();
  };

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
          ? `Une erreur s'est prooduite : ${error?.message}`
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
          className={`bg-cover h-[50vh]  sm:h-[60vh] bg-center  relative w-full `}
        >
          <div className="absolute space-x-2 text-end top-3/4 left-4">
            <Button className="uppercase bg-red-600">Lecture</Button>
            <Button
              className="uppercase "
              onClick={handleBookmarksWithUseQuery}
            >
              {isBookmarkedQuery
                ? "Supprimer des favoris"
                : "Ajouter dans les favoris"}
            </Button>
          </div>
        </section>
        <NetflixHeaderOverview media={media} />
      </div>
    </>
  );
};

export default NetflixHeader;
