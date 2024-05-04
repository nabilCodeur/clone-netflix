import { Route, Routes } from "react-router-dom";
import Home from "./components/AuthentifiedUser.tsx/Home";
import NetfixSeries from "./components/AuthentifiedUser.tsx/NetfixSeries";
import NetflixBookmarks from "./components/AuthentifiedUser.tsx/NetflixBookmarks";
import NetflixById from "./components/AuthentifiedUser.tsx/NetflixById";
import NetflixMovies from "./components/AuthentifiedUser.tsx/NetflixMovies";
import "./index.css";
import QueryProvider from "./providers/query";

function App() {
  return (
    <QueryProvider>
      <div className="text-white bg-black">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<NetflixMovies />} />
          <Route path="/movie/:id" element={<NetflixById />} />
          <Route path="/tv/:id" element={<NetflixById />} />
          <Route path="/tv" element={<NetfixSeries />} />
          <Route path="/bookmarks" element={<NetflixBookmarks />} />
          <Route path="/*" />
        </Routes>
      </div>
    </QueryProvider>
  );
}

export default App;
