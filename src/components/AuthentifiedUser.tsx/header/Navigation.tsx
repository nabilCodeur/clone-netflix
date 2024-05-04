import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav className="space-x-4 text-xl font-extrabold text-white uppercase stroke-1 stroke-black">
    <NavLink to={"/"}>Accueil</NavLink>
    <NavLink to={"/movies"}>Films</NavLink>
    <NavLink to={"/tv"}>Séries</NavLink>
    <NavLink to={"/bookmarks"}>Favoris</NavLink>
  </nav>
  )
}

export default Navigation
