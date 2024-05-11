import useBookmarkFirestore from "@/hooks/useBookmarkFirestore";
import { Authentification, AuthentificationProvider } from "@/providers/authentificationProvider";
import { useContext, useEffect } from "react";
import useHeader from "../../../hooks/useHeader";
import { MediaEndpointApi } from "../../../types";
import HeaderSkeleton from "../../loading/HeaderSkeleton";
import { Button } from "../../ui/button";
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
    id:headerId
  } = useHeader(mediaType, id);

  const {user} =  useContext(Authentification) as AuthentificationProvider


  const {addBookmark ,checkMediaInFirestoreBookmark, removeBookmarkById, isBookmarkInList}=useBookmarkFirestore(user?.uid , mediaType??mediaHeader,id??headerId)
  

  const handleBookmark = async ()=>{
    await checkMediaInFirestoreBookmark()
    if (isBookmarkInList){
      await removeBookmarkById()
    }
    else {
      await addBookmark()
    }
    
  }

  useEffect(() => {
    checkMediaInFirestoreBookmark()
  },[checkMediaInFirestoreBookmark]
  )

  if (isError) return <p>{error?.message}</p>;

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
          className="text-white h-[400px] flex items-center "
        >
          <div className="w-1/3 p-5 px-4 ml-3 space-y-2 bg-black/70 ">
            <h1 className="text-2xl uppercase">
              {media?.title ?? media?.name}
            </h1>
            <p className="font-bold text-justify indent-4 line-clamp-6">
              {media?.overview ?? "Résumé indisponible"}
            </p>
            <div className="mt-4 space-x-2 text-end">
              <Button className="uppercase bg-red-600">Lecture</Button>
              <Button className="uppercase " onClick={handleBookmark} >
                {isBookmarkInList?"Supprimer des favoris":"Ajouter à mes favoris"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NetflixHeader;
