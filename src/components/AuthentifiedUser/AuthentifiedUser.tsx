import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import NetfixSeries from './NetfixSeries'
import NetflixBookmarks from './NetflixBookmarks'
import NetflixById from './NetflixById'
import NetflixMovies from './NetflixMovies'

const AuthentifiedUser = () => {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/movies" element={<NetflixMovies />} />
    <Route path="/movie/:id" element={<NetflixById />} />
    <Route path="/tv/:id" element={<NetflixById />} />
    <Route path="/tv" element={<NetfixSeries />} />
    <Route path="/bookmarks" element={<NetflixBookmarks />} />
    <Route path="/*" />
  </Routes>
  )
}

export default AuthentifiedUser
