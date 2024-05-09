import TopHeader from "../header/TopHeader";
import NetflixCategory from "./NetflixCategory";

const NetflixBookmarks = () => {
  return (
    <div className="flex flex-col h-[100vh]">
      <TopHeader />
      <NetflixCategory typeMedia="movie" />
      <NetflixCategory typeMedia="tv" />
    </div>
  );
};

export default NetflixBookmarks;
