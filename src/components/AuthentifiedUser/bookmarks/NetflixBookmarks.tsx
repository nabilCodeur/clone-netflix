import TopHeader from "../header/TopHeader";
import NetflixCategory from "./NetflixCategory";

const NetflixBookmarks = () => {
  return (
    <div className="flex flex-col h-full mb-24">
      <TopHeader />
      <NetflixCategory typeMedia="movie" />
      <NetflixCategory typeMedia="tv" />
    </div>
  );
};

export default NetflixBookmarks;
