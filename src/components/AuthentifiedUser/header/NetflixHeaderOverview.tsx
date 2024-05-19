import { Media } from "@/utils/clientApiList";

const NetflixHeaderOverview = ({ media }: { media: Media }) => {
  return (
    <div className=" space-y-2 mx-4 w-full  bottom-[-20px] sm:w-1/3 sm:absolute sm:top-1/4 sm:ml-8 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
      <h1 className="mt-6 text-2xl font-extrabold uppercas sm:text-4xl">
        {media?.name || media?.title || "Titre indisponible"}
      </h1>
      <p className="font-bold line-clamp-4 sm:line-clamp-3 sm:text-3xl sm:font-semibold">
        {media?.overview ?? "Résumé indisponible"}
      </p>
    </div>
  );
};

export default NetflixHeaderOverview;
