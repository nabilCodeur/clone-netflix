import useFirestore from "@/hooks/useFirestore";
import { Authentification, AuthentificationProvider } from "@/providers/authentificationProvider";
import { useContext } from "react";
import useHeader from "../../../hooks/useHeader";
import { MediaEndpointApi } from "../../../types";
import HeaderSkeleton from "../../loading/HeaderSkeleton";
import { Button } from "../../ui/button";
import TopHeader from "./TopHeader";

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

  const {user} =  useContext(Authentification) as AuthentificationProvider
 

  const {addMediaIdBookmarkFirestore}=useFirestore()

  const handleBookmark = ()=>{
    addMediaIdBookmarkFirestore(user?.uid,mediaType,id)
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
              <Button className="uppercase bg-red-600" onClick={handleBookmark} >
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
