import { NavLink } from 'react-router-dom'

const Navigation = () => {

  const handleActiveNavLink = ({isActive}:{isActive:boolean}) => {
    return isActive?"underline underline-offset-4":"no-underline"
  }
  
  return (
    <nav className="hidden space-x-4 text-xl font-extrabold text-white uppercase stroke-1 sm:block stroke-black">
    

    <NavLink to={"/movies"} className={handleActiveNavLink}
    >Films</NavLink>
    
    <NavLink to={"/tv"} className={handleActiveNavLink}
    >Séries</NavLink>
    <NavLink to={"/bookmarks"} className={handleActiveNavLink}>Favoris</NavLink>
  </nav>
  )
}

export default Navigation
