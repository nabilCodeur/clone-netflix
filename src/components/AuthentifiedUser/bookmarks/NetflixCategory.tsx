
import {
  Authentification,
  AuthentificationProvider,
} from "@/providers/authentificationProvider";
import { MediaEndpointApi } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import NetflixRow from "./NetflixRow";
import useBookmarkFirestore from "@/hooks/useBookmarkFirestore";

const NetflixCategory = ({ typeMedia }: { typeMedia: MediaEndpointApi }) => {
  const authentification = useContext(
    Authentification
  ) as AuthentificationProvider;
  const { readBookmarks } = useBookmarkFirestore(authentification.user?.uid, typeMedia);

  const {
    data: bookmarksIds,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["bookmarks",typeMedia],
    queryFn: () => readBookmarks(),
  });

  
  

  if (isError) return <p>Une erreur s'est produite</p>;
  if (isLoading) return <p>Chargement</p>;
  if (!bookmarksIds) return <p>Aucun média</p>

  return (
    <div className="mx-5 my-4 space-y-5">
      <h1 className="text-2xl font-semibold">
        {typeMedia === "movie" ? "Vos films favoris" : "Vos séries favorites"}
      </h1>
      {bookmarksIds.length ? (
        <NetflixRow bookmarksIds={bookmarksIds} typeMedia={typeMedia} />
      ) : (
        <p>Vous n'avez aucun favori</p>
      )}
    </div>
  );
};

export default NetflixCategory;
