import { Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import QueryProvider from "./providers/query";
import NetflixMovies from "./components/NetflixMovies";
import NetfixSeries from "./components/NetfixSeries";
import NetflixBookmarks from "./components/NetflixBookmarks";
import NetflixById from "./components/NetflixById";

function App() {
  return (
    <QueryProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<NetflixMovies />} />
        <Route path="/movie/:id" element={<NetflixById />} />
        <Route path="/tv/:id" element={<NetflixById />} />
        <Route path="/tv" element={<NetfixSeries />} />
        <Route path="/bookmarks" element={<NetflixBookmarks />} />
      </Routes>
    </QueryProvider>
  );
}

export default App;
