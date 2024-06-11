import { NavLink } from "react-router-dom";

//https://gist.github.com/rikoriswandha/1ffe4e5e267e2b60ac9c255202be14db
const BottomBar = () => {
  const handleActiveNavigationItem = ({ isActive }: { isActive: boolean }) => {
    return isActive ? "underline underline-offset-4" : "no-underline ";
  };

  //TODO:la navbar est partiellement masquée lors du scroll. A fix
  return (
    <div className="fixed bottom-0 inline-block w-full px-2 py-4 space-x-4 text-xl text-white bg-gray-900 sm:hidden">
      <nav className="flex w-full h-full justify-evenly">
        <NavLink to="/" className={handleActiveNavigationItem}>
          Accueil
        </NavLink>

        <NavLink to="/movies" className={handleActiveNavigationItem}>
          Films
        </NavLink>

        <NavLink to="/tv" className={handleActiveNavigationItem}>
          Séries
        </NavLink>
        <NavLink to="/bookmarks" className={handleActiveNavigationItem}>
          Favoris
        </NavLink>
      </nav>
    </div>
  );
};

export default BottomBar;
