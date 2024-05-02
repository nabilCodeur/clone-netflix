import { Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import QueryProvider from "./providers/query";

function App() {
  return (
    <QueryProvider>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </QueryProvider>
  );
}

export default App;
