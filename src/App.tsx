import NetflixApp from "./NetflixApp";
import "./index.css";
import QueryProvider from "./providers/queryProvider";

function App() {
  return (
    <QueryProvider>
      <NetflixApp/>
    </QueryProvider>
  );
}

export default App;
