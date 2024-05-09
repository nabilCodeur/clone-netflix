import useFirestore from "@/hooks/useFirestore";
import useHeader from "../../../hooks/useHeader";
import { MediaEndpointApi } from "../../../types";
import HeaderSkeleton from "../../loading/HeaderSkeleton";
import { Button } from "../../ui/button";
import TopHeader from "./TopHeader";
import React from "react";
import { Authentification, AuthentificationProvider } from "@/providers/authentificationProvider";

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

  const {fireStoreUpdateDocument}=useFirestore()
  const authentification = React.useContext(Authentification) as AuthentificationProvider

  const addFavorite = async ()=>{
    const bookMarksTypeFirestore = mediaType==="movie"?"bookmarksMovieIds":"bookmarksTvIds"
    const obj = {
      [bookMarksTypeFirestore]:6
    }

    console.log(obj)
    
    fireStoreUpdateDocument("users", authentification.user?.uid,{test:"toto"})
  }

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
            // backgroundPosition: "center",
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
              <Button className="uppercase">Lecture</Button>
              <Button className="uppercase bg-red-600" onClick={addFavorite}>
                Ajouter à la liste
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NetflixHeader;
